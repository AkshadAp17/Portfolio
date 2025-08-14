import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, ArrowRight, Sparkles, Star, Zap, TrendingUp, Rocket, Crown, Eye, Code, Play } from "lucide-react";

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
      icon: "🏛️",
      color: "from-blue-500 to-purple-600"
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
      icon: "🏁",
      color: "from-green-500 to-emerald-600"
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
      icon: "🏢",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Task Management Dashboard",
      description: "Comprehensive task management application with drag-and-drop functionality, team collaboration, and progress tracking. Built with modern React patterns and state management.",
      visual: "📋",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
      completedDate: "October 2023",
      demoUrl: "https://task-manager-demo.vercel.app/",
      githubUrl: "https://github.com/AkshadAp17/task-management-app",
      isFreelancing: false,
      stars: 42,
      difficulty: "Intermediate",
      category: "Productivity",
      icon: "✅",
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Weather Forecast Application",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts. Features PWA capabilities and offline functionality.",
      visual: "🌤️",
      technologies: ["Vue.js", "PWA", "Chart.js", "Weather API"],
      completedDate: "September 2023",
      demoUrl: "https://weather-app-vue.vercel.app/",
      githubUrl: "https://github.com/AkshadAp17/weather-forecast-app",
      isFreelancing: false,
      stars: 38,
      difficulty: "Intermediate",
      category: "Web App",
      icon: "🌡️",
      color: "from-sky-500 to-blue-600"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with payment integration, inventory management, and admin dashboard. Includes Stripe payment processing and advanced filtering.",
      visual: "🛒",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      completedDate: "August 2023",
      demoUrl: "https://ecommerce-platform-demo.vercel.app/",
      githubUrl: "https://github.com/AkshadAp17/ecommerce-platform",
      isFreelancing: false,
      stars: 65,
      difficulty: "Advanced",
      category: "E-commerce",
      icon: "🏪",
      color: "from-rose-500 to-pink-600"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization, content scheduling, and engagement tracking across multiple platforms.",
      visual: "📊",
      technologies: ["Next.js", "Prisma", "Redis", "OAuth"],
      completedDate: "July 2023",
      demoUrl: "https://social-dashboard-demo.vercel.app/",
      githubUrl: "https://github.com/AkshadAp17/social-media-dashboard",
      isFreelancing: false,
      stars: 29,
      difficulty: "Advanced",
      category: "Analytics",
      icon: "📈",
      color: "from-violet-500 to-purple-600"
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

  const stats = [
    { label: "Projects", value: "7+", color: "text-blue-500" },
    { label: "Technologies", value: "15+", color: "text-purple-500" },
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
            A showcase of my professional projects including freelancing work and full-stack applications
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
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative"
            >
              {/* Enhanced Project Card */}
              <motion.div
                className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 dark:border-slate-700"
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
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Main project icon */}
                  <motion.div
                    className="text-6xl relative z-10"
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
                  
                  <motion.div
                    className="absolute bottom-4 left-4 text-blue-400"
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
                    <Sparkles size={20} />
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
                <div className="p-6">
                  {/* Project title */}
                  <motion.h3
                    className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
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

                  {/* Project Info Row */}
                  <div className="flex items-center justify-between">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
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

                    {/* Stars */}
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
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
