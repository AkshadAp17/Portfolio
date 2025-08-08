import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, ArrowRight, Sparkles, Star, Zap, TrendingUp, Rocket, Crown } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, projectCardHover } from "@/lib/animations";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Legal Case Management System",
      description: "Comprehensive legal case management platform with client management, case tracking, document management, and billing system. Features role-based access control and automated workflows.",
      visual: "⚖️",
      technologies: ["React", "Node.js", "MongoDB", "TypeScript"],
      completedDate: "March 2024",
      demoUrl: "#",
      githubUrl: "#",
      isFreelancing: false,
      stars: 15,
      difficulty: "Advanced",
      category: "Enterprise",
      icon: "🏛️"
    },
    {
      title: "Hema Motor - Freelancing Project",
      description: "Automotive service booking and management platform for Hema Motor workshop. Features service booking, real-time tracking, payment processing, and customer feedback system.",
      visual: "🚗",
      technologies: ["React", "Node.js", "MongoDB", "Payment Gateway"],
      completedDate: "February 2024",
      demoUrl: "https://vista-etyd.onrender.com/",
      githubUrl: "https://github.com/AkshadAp17/Vista",
      isFreelancing: true,
      stars: 28,
      difficulty: "Intermediate",
      category: "E-commerce",
      icon: "🏁"
    },
    {
      title: "Facility Booking System",
      description: "Corporate facility booking system for meeting rooms, conference halls, and equipment. Features calendar integration, conflict resolution, and usage analytics.",
      visual: "🏢",
      technologies: ["React", "Node.js", "MongoDB", "Real-time Updates"],
      completedDate: "January 2024",
      demoUrl: "#",
      githubUrl: "#",
      isFreelancing: false,
      stars: 12,
      difficulty: "Intermediate",
      category: "Corporate",
      icon: "🏢"
    },
    {
      title: "Food Delivery System",
      description: "Full-stack food delivery application with restaurant management and delivery tracking. Features GPS integration, payment processing, and real-time order updates.",
      visual: "🍕",
      technologies: ["React Native", "Node.js", "MongoDB", "GPS Integration"],
      completedDate: "December 2023",
      demoUrl: "#",
      githubUrl: "#",
      isFreelancing: false,
      stars: 35,
      difficulty: "Advanced",
      category: "Mobile App",
      icon: "🍕"
    },
    {
      title: "Money Split Application",
      description: "Group expense management and money splitting application. Features automatic bill splitting algorithms, expense tracking, and real-time collaboration.",
      visual: "💰",
      technologies: ["React", "Node.js", "MongoDB", "WebSocket"],
      completedDate: "November 2023",
      demoUrl: "https://splie-money-5pdr.vercel.app/",
      githubUrl: "https://github.com/AkshadAp17/Splie-Money",
      isFreelancing: false,
      stars: 42,
      difficulty: "Intermediate",
      category: "Finance",
      icon: "💳"
    },
  ];

  const techColors: { [key: string]: string } = {
    React: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "Node.js": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    PostgreSQL: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    Stripe: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    TypeScript: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
    "Socket.io": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    MongoDB: "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
    "Vue.js": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
    PWA: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    "Chart.js": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
    "API Integration": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
    "Next.js": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    Prisma: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    Redis: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    OAuth: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    "Payment Gateway": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    "Real-time Updates": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    "GPS Integration": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    "WebSocket": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
  };

  const difficultyColors = {
    "Beginner": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    "Intermediate": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
    "Advanced": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
  };

  const categoryColors = {
    "Enterprise": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    "E-commerce": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "Corporate": "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
    "Mobile App": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    "Finance": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Enhanced background decoration */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced live header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          {/* Live animated header */}
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-blue-600" />
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Zap className="h-6 w-6 text-yellow-500" />
              <span className="text-blue-600 font-bold text-lg">LIVE PORTFOLIO</span>
              <Zap className="h-6 w-6 text-yellow-500" />
            </motion.div>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-8 w-8 text-blue-600" />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 font-heading relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="gradient-text">Creative</span>{" "}
            <span className="text-slate-900 dark:text-white">Portfolio</span>
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Crown className="h-8 w-8 text-yellow-500" />
            </motion.div>
          </motion.h2>

          <motion.p 
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            A showcase of my professional projects including freelancing work and full-stack applications
          </motion.p>

          {/* Live stats */}
          <motion.div
            className="flex justify-center gap-8 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-blue-600">5+</div>
              <div className="text-sm text-slate-500">Projects</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-purple-600">3+</div>
              <div className="text-sm text-slate-500">Technologies</div>
            </motion.div>
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl font-bold text-green-600">2+</div>
              <div className="text-sm text-slate-500">Years</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover="hover"
              className="group relative glass-effect rounded-2xl overflow-hidden card-hover"
            >
              <motion.div variants={projectCardHover}>
                {/* Enhanced project visual with better icons */}
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-800">
                  <motion.div 
                    className="w-full h-80 flex items-center justify-center relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>

                    {/* Enhanced icon with better styling */}
                    <motion.div 
                      className="text-8xl relative z-10 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-800 rounded-full p-8 shadow-2xl"
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1],
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 6, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      {project.icon}
                    </motion.div>

                    {/* Floating elements */}
                    <motion.div
                      className="absolute top-4 right-4 text-yellow-400"
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
                      <Star size={24} />
                    </motion.div>

                    {/* Live indicator */}
                    <motion.div
                      className="absolute top-4 left-4 flex items-center gap-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      LIVE
                    </motion.div>

                    {/* Overlay with enhanced effects */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <motion.div 
                        className="text-center text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Button
                            size="lg"
                            className="bg-white text-black font-bold px-6 py-3 shadow-lg hover:bg-gray-100 transition-all duration-300"
                            asChild
                          >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-5 w-5" />
                              Live Demo
                            </a>
                          </Button>
                          <Button
                            size="lg"
                            className="bg-black text-white font-bold px-6 py-3 shadow-lg hover:bg-gray-800 transition-all duration-300"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-5 w-5" />
                              View Code
                            </a>
                          </Button>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>

                <div className="p-8">
                  {/* Enhanced header with badges */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{project.title}</h3>
                      <div className="flex items-center gap-3 mb-4 flex-wrap">
                        {project.isFreelancing && (
                          <span className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 text-xs font-medium px-3 py-1 rounded-full">
                            <Rocket className="inline mr-1 h-3 w-3" />
                            Freelancing
                          </span>
                        )}
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${difficultyColors[project.difficulty as keyof typeof difficultyColors]}`}>
                          <TrendingUp className="inline mr-1 h-3 w-3" />
                          {project.difficulty}
                        </span>
                        <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                          {project.category}
                        </span>
                        <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                          <Star size={14} className="fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{project.stars}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">{project.description}</p>

                  {/* Enhanced technology tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 ${
                          techColors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                        }`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Enhanced footer */}
                  <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      <span>Completed in {project.completedDate}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="glass-effect bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Sparkles className="mr-2 h-5 w-5" />
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
