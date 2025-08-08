import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Sparkles, Zap, Code, User, Briefcase, FileText, MessageCircle } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ["home", "about", "experience", "skills", "projects", "contact"];
      const scrollPositionWithOffset = scrollPosition + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPositionWithOffset >= offsetTop && scrollPositionWithOffset < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "about", label: "About", icon: FileText },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Sparkles },
    { id: "contact", label: "Contact", icon: MessageCircle },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-700"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center relative overflow-hidden"
              whileHover={{
                rotate: 360,
                scale: 1.1,
                boxShadow: "0 8px 25px rgba(59, 130, 246, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                AA
              </div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 100] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span
                className="text-xl font-bold gradient-text"
                whileHover={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Akshad Apastambh
              </motion.span>
              <motion.div
                className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Zap className="h-3 w-3" />
                <span>Full Stack Developer</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium relative ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg"
                    layoutId="activeTab"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Theme Toggle Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="ml-4 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 shadow-lg"
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-700" />
                )}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden"
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white/80 backdrop-blur-sm dark:bg-slate-800/80"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden pb-4 space-y-2"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
            
            {/* Mobile Theme Toggle */}
            <div className="flex items-center justify-between py-3 px-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
              <span className="text-slate-600 dark:text-slate-300 font-medium">Theme</span>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="bg-white/80 backdrop-blur-sm dark:bg-slate-800/80"
              >
                {isDark ? (
                  <Sun className="h-4 w-4 text-yellow-500" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-700" />
                )}
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
