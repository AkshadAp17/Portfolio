import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Sparkles, Code, Rocket, User } from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Code className="h-4 w-4" />
              Full Stack Developer
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Akshad</span>
              <br />
              <span className="text-slate-900 dark:text-white">Apastambh</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Final Year Computer Science Student passionate about creating beautiful, 
              functional web applications that solve real-world problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection("projects")}
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  View My Work
                  <ArrowDown className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => scrollToSection("contact")}
                >
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-gray-800 dark:hover:text-gray-200" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/akshad-apastambh-9726332a1/", label: "LinkedIn", color: "hover:text-blue-600" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-blue-400" },
                { icon: Mail, href: "mailto:akshadapastambh37@gmail.com", label: "Email", color: "hover:text-red-500" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-slate-500 transition-all duration-300 relative group ${social.color}`}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    y: -5
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                >
                  <social.icon size={28} className="drop-shadow-lg" />
                  <motion.div
                    className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {social.label}
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                  </motion.div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Main Avatar Container */}
            <motion.div 
              className="relative w-80 h-80"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                boxShadow: [
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                  "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.3 }
              }}
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full p-2">
                <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full flex items-center justify-center relative overflow-hidden">
                  {/* Developer Avatar */}
                  <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-6xl relative">
                    <User className="w-24 h-24" />
                    
                    {/* Animated shine effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{ x: [-100, 100] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 text-yellow-400"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    <Sparkles size={32} />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 text-blue-400"
                    animate={{ 
                      rotate: [0, -360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    <Code size={24} />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
