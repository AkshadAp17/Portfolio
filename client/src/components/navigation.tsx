import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Code, User, Briefcase, FileText, MessageCircle, Sparkles, Download } from "lucide-react";

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

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/Akshad_Apastambh_Resume.pdf';
    link.download = 'Akshad_Apastambh_Resume.pdf';
    link.click();
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-200/50 dark:border-slate-700/50"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md border-b border-slate-200/30 dark:border-slate-700/30"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: 0, 
        opacity: 1,
      }}
      transition={{ 
        duration: 1, 
        ease: "easeOut", 
        type: "spring", 
        bounce: 0.3,
        staggerChildren: 0.1
      }}
    >
      {/* Enhanced animated background gradient */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        animate={{ 
          background: [
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
            "linear-gradient(90deg, rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
            "linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05), rgba(59, 130, 246, 0.05))",
            "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05), rgba(236, 72, 153, 0.05))",
          ]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo/Brand */}
          <motion.div
            className="flex items-center cursor-pointer group"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ 
              scale: 1.05,
              x: 5,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("home")}
          >
            {/* Enhanced animated logo icon */}
            <motion.div
              className="relative w-10 h-10 sm:w-12 sm:h-12 mr-2 sm:mr-4"
              whileHover={{ 
                rotate: 360,
                scale: 1.1,
                y: -2
              }}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0.3)",
                  "0 0 0 8px rgba(59, 130, 246, 0)",
                  "0 0 0 0 rgba(59, 130, 246, 0)"
                ]
              }}
              transition={{ 
                rotate: { duration: 0.6 },
                scale: { duration: 0.2 },
                y: { duration: 0.2 },
                boxShadow: { duration: 2, repeat: Infinity }
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-xl shadow-lg"></div>
              <div className="absolute inset-1 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>

            </motion.div>
            
            <div className="flex flex-col">
              <motion.h1
                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-slate-900 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent"
                whileHover={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="hidden sm:inline">Akshad Apastambh</span>
                <span className="sm:hidden">Akshad A.</span>
              </motion.h1>
              <motion.div
                className="hidden sm:flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400"
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                <span>Full Stack Developer</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, staggerChildren: 0.1 }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium overflow-hidden group ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                    : "text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-sm border border-slate-200/50 dark:border-slate-700/50"
                }`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ 
                  y: 0, 
                  opacity: 1,
                  transition: { 
                    delay: 0.6 + (index * 0.1),
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.4
                  }
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
                  rotateZ: activeSection === item.id ? 0 : 2
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                
                <item.icon className="h-4 w-4 relative z-10" />
                <span className="relative z-10">{item.label}</span>
                
                {/* Enhanced active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"
                    layoutId="activeTab"
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(59, 130, 246, 0.4)",
                        "0 0 0 4px rgba(59, 130, 246, 0.1)",
                        "0 0 0 0 rgba(59, 130, 246, 0.4)"
                      ]
                    }}
                    transition={{ 
                      type: "spring", 
                      bounce: 0.3, 
                      duration: 0.6,
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                  />
                )}
              </motion.button>
            ))}
            
            {/* Enhanced Resume Download Button */}
            <motion.button
              onClick={handleResumeDownload}
              className="relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 font-medium overflow-hidden group bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg hover:shadow-xl"
              initial={{ y: -20, opacity: 0, scale: 0.8 }}
              animate={{ 
                y: 0, 
                opacity: 1, 
                scale: 1,
                boxShadow: [
                  "0 0 0 0 rgba(34, 197, 94, 0.4)",
                  "0 0 0 6px rgba(34, 197, 94, 0)",
                  "0 0 0 0 rgba(34, 197, 94, 0.4)"
                ]
              }}
              whileHover={{ 
                scale: 1.08, 
                y: -3,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.25)",
                rotate: [0, -1, 1, 0]
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                y: { delay: 1.2, duration: 0.6, type: "spring", bounce: 0.5 },
                opacity: { delay: 1.2, duration: 0.6, type: "spring", bounce: 0.5 },
                scale: { delay: 1.2, duration: 0.6, type: "spring", bounce: 0.5 },
                boxShadow: { duration: 3, repeat: Infinity },
                rotate: { duration: 0.6 }
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              <Download className="h-4 w-4 relative z-10" />
              <span className="relative z-10">Resume</span>
            </motion.button>
            
            {/* Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className="ml-4"
            >
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="relative bg-white/90 backdrop-blur-sm dark:bg-slate-800/90 border-slate-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-800 shadow-lg overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: isDark ? 0 : 180 }}
                  transition={{ duration: 0.5 }}
                />
                {isDark ? (
                  <Sun className="h-4 w-4 text-yellow-500 relative z-10" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-800 dark:text-slate-300 relative z-10" />
                )}
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Theme Toggle and Menu */}
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="relative bg-white/90 backdrop-blur-sm dark:bg-slate-800/90 border-slate-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-800 shadow-lg overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ rotate: isDark ? 0 : 180 }}
                  transition={{ duration: 0.5 }}
                />
                {isDark ? (
                  <Sun className="h-4 w-4 text-yellow-500 relative z-10" />
                ) : (
                  <Moon className="h-4 w-4 text-slate-800 dark:text-slate-300 relative z-10" />
                )}
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-4 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </motion.button>
            ))}
            
            {/* Mobile Resume Download Button */}
            <motion.button
              onClick={handleResumeDownload}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
              whileHover={{ x: 10 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-4 w-4" />
              Resume
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
