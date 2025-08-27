import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, ArrowRight, Sparkles, Star, Zap, TrendingUp, Rocket, Crown, Eye, Code, Play } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Hema Motor Workshop",
      description: "Complete automotive service management platform with appointment scheduling, service tracking, customer management, and integrated payment processing. Features real-time notifications and admin dashboard.",
      visual: "🚗",
      technologies: ["React", "Node.js", "MongoDB", "Payment Gateway", "Real-time Updates"],
      completedDate: "Feb 2024",
      demoUrl: "https://github.com/AkshadAp17/Hema-Motor-Workshop",
      githubUrl: "https://github.com/AkshadAp17/Hema-Motor-Workshop",
      isFreelancing: true,
      stars: 25,
      difficulty: "Professional",
      category: "Service Management",
      icon: "🔧",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Legal Case Management",
      description: "Comprehensive legal case tracking and management system for law firms. Features client management, case timeline, document storage, billing integration, and court date scheduling with automated reminders.",
      visual: "⚖️",
      technologies: ["React", "Node.js", "MongoDB", "Document Management", "Billing System"],
      completedDate: "Jan 2024",
      demoUrl: "https://github.com/AkshadAp17/Legal-Case-Management",
      githubUrl: "https://github.com/AkshadAp17/Legal-Case-Management",
      isFreelancing: false,
      stars: 18,
      difficulty: "Professional",
      category: "Legal Tech",
      icon: "📋",
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Facility Booking System",
      description: "Modern facility booking and management platform for organizations. Features room booking, resource scheduling, availability tracking, user permissions, and automated confirmation systems.",
      visual: "🏢",
      technologies: ["React", "Node.js", "MongoDB", "Calendar Integration", "User Management"],
      completedDate: "Dec 2023",
      demoUrl: "https://github.com/AkshadAp17/Facility-Booking-System",
      githubUrl: "https://github.com/AkshadAp17/Facility-Booking-System",
      isFreelancing: false,
      stars: 22,
      difficulty: "Advanced",
      category: "Booking System",
      icon: "🏠",
      color: "from-teal-500 to-cyan-600"
    },
    {
      title: "Split Money - Expense Tracker",
      description: "Smart expense tracking and bill splitting application for groups. Features real-time calculations, receipt scanning, expense categorization, and settlement recommendations with multiple payment methods.",
      visual: "💰",
      technologies: ["React", "Node.js", "MongoDB", "Receipt OCR"],
      completedDate: "March 2024",
      demoUrl: "#",
      githubUrl: "#",
      isFreelancing: false,
      stars: 34,
      difficulty: "Advanced",
      category: "Finance",
      icon: "💸",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "URL Shortener Service", 
      description: "Professional URL shortening service with custom aliases, click analytics, QR code generation, and bulk operations. Features user management, link expiration, and detailed statistics dashboard.",
      visual: "🔗",
      technologies: ["React", "Node.js", "MongoDB", "Analytics"],
      completedDate: "February 2024",
      demoUrl: "#",
      githubUrl: "#",
      isFreelancing: false,
      stars: 28,
      difficulty: "Intermediate",
      category: "Web Service",
      icon: "🔗",
      color: "from-blue-500 to-purple-600"
    }
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
    "Document Management": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
    "Billing System": "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
    "Calendar Integration": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "User Management": "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    "Receipt OCR": "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    "Analytics": "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300",
  };

  const stats = [
    { label: "Projects", value: "5+", color: "text-blue-500" },
    { label: "Technologies", value: "12+", color: "text-purple-500" },
    { label: "Years", value: "2+", color: "text-green-500" },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900 relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating project icons */}
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl opacity-10 dark:opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {['💻', '🚀', '⚡', '🎯', '🔥', '⭐'][i]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4"
            whileHover={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
Featured Projects
          </motion.h2>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center gap-8 mt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              >
                <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-8 items-stretch"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative h-full"
            >
              {/* Enhanced Project Card */}
              <motion.div
                className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700 h-full flex flex-col"
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Live badge */}
                <motion.div
                  className="absolute top-4 left-4 z-20"
                  whileHover={{ scale: 1.1 }}
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.4)",
                      "0 0 0 10px rgba(34, 197, 94, 0)",
                      "0 0 0 0 rgba(34, 197, 94, 0)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 2, repeat: Infinity },
                    scale: { duration: 0.2 }
                  }}
                >
                  <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                    LIVE
                  </span>
                </motion.div>

                {/* Project Visual */}
                <div className="relative h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 flex items-center justify-center overflow-hidden">
                  {/* Dynamic gradient background based on project */}
                  <motion.div 
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`}
                    animate={{ 
                      opacity: [0.05, 0.15, 0.05] 
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <motion.div 
                      className="absolute inset-0" 
                      style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }}
                      animate={{
                        backgroundPosition: ['0px 0px', '20px 20px', '0px 0px']
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                  </div>
                  
                  {/* Main project icon with enhanced animation */}
                  <motion.div
                    className="text-6xl relative z-10 drop-shadow-lg"
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1],
                      y: [0, -8, 0],
                      textShadow: [
                        "0 0 10px rgba(59, 130, 246, 0.3)",
                        "0 0 20px rgba(59, 130, 246, 0.5)",
                        "0 0 10px rgba(59, 130, 246, 0.3)"
                      ]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 15,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {project.icon}
                  </motion.div>
                  
                  {/* Enhanced floating elements */}
                  <motion.div
                    className="absolute top-3 right-3 text-yellow-400 drop-shadow-sm"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    <Star size={22} fill="currentColor" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-3 left-3 text-purple-400 drop-shadow-sm"
                    animate={{ 
                      rotate: [0, -360],
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 5, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                  >
                    <Sparkles size={18} />
                  </motion.div>
                  
                  {/* Additional floating tech icons */}
                  <motion.div
                    className="absolute top-16 left-6 text-green-400 opacity-60"
                    animate={{ 
                      y: [0, -15, 0],
                      rotate: [0, 180, 360],
                      scale: [0.8, 1.1, 0.8]
                    }}
                    transition={{ 
                      duration: 7, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Zap size={16} />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-16 right-6 text-pink-400 opacity-60"
                    animate={{ 
                      y: [0, 12, 0],
                      rotate: [0, -180, -360],
                      scale: [0.9, 1.2, 0.9]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 2
                    }}
                  >
                    <Rocket size={14} />
                  </motion.div>

                  {/* Hover overlay with live buttons */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 flex items-end justify-center pb-4 gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black px-2 py-1 rounded-md font-medium text-xs flex items-center gap-1 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <Play size={10} />
                      Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-black text-white px-2 py-1 rounded-md font-medium text-xs flex items-center gap-1 hover:bg-gray-800 transition-colors duration-200 shadow-lg"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 10, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <Github size={10} />
                      Code
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Project title */}
                  <motion.h3
                    className="text-xl font-bold mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.a
                      href={project.demoUrl !== "#" ? project.demoUrl : project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      {project.title}
                    </motion.a>
                  </motion.h3>

                  {/* Project Description */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Completion Date */}
                  <div className="flex items-center gap-2 mb-4 text-xs text-slate-500 dark:text-slate-500">
                    <Calendar size={14} />
                    <span>Completed: {project.completedDate}</span>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className={`px-3 py-1.5 text-sm font-medium rounded-lg ${techColors[tech] || "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"}`}
                          whileHover={{ scale: 1.05 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.1, duration: 0.3 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <motion.span
                      className="px-3 py-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 text-xs font-medium rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.difficulty}
                    </motion.span>
                    <motion.span
                      className="px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 text-xs font-medium rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {project.category}
                    </motion.span>
                    {project.isFreelancing && (
                      <motion.span
                        className="px-3 py-1 bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300 text-xs font-medium rounded-full"
                        whileHover={{ scale: 1.05 }}
                      >
                        Freelancing
                      </motion.span>
                    )}
                  </div>

                  {/* Project Actions Row */}
                  <div className="flex items-center justify-between mt-auto">
                    {/* View Project Button */}
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-sm hover:shadow-md"
                      whileHover={{ scale: 1.05, y: -1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={14} />
                      View Project
                    </motion.a>

                    {/* Stars - smaller and positioned down */}
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={14} fill="currentColor" />
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        {project.stars}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* See Other Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/AkshadAp17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={24} />
            See Other Projects on GitHub
            <ExternalLink size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
