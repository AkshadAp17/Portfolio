import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, projectCardHover } from "@/lib/animations";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      visual: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      completedDate: "March 2024",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React and WebSocket integration.",
      visual: "📋",
      technologies: ["React", "JavaScript", "Socket.io", "MongoDB"],
      completedDate: "February 2024",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and API integration.",
      visual: "🌤️",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      completedDate: "January 2024",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and contact information. Built with modern web technologies and featuring smooth animations.",
      visual: "💼",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      completedDate: "December 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recipe Finder App",
      description: "A recipe discovery application with search functionality, ingredient filtering, and meal planning features. Integrated with external recipe APIs.",
      visual: "🍳",
      technologies: ["React", "JavaScript", "API Integration", "CSS"],
      completedDate: "November 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Todo List Application",
      description: "A feature-rich todo application with categories, priorities, due dates, and local storage. Built with vanilla JavaScript and modern CSS.",
      visual: "✅",
      technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
      completedDate: "October 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time chat application with multiple rooms, user authentication, and message history. Built with Socket.io for instant messaging.",
      visual: "💬",
      technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
      completedDate: "September 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Music Player App",
      description: "A modern music player with playlist management, audio controls, and responsive design. Features include search, shuffle, and repeat functionality.",
      visual: "🎵",
      technologies: ["JavaScript", "HTML", "CSS", "Web Audio API"],
      completedDate: "August 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Blog Platform",
      description: "A full-featured blog platform with user authentication, post creation, comments, and admin dashboard. Built with modern web technologies.",
      visual: "📝",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      completedDate: "July 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Quiz Application",
      description: "Interactive quiz application with multiple question types, scoring system, and progress tracking. Perfect for educational purposes.",
      visual: "🧠",
      technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
      completedDate: "June 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "URL Shortener",
      description: "A URL shortening service with analytics, custom aliases, and QR code generation. Built with Node.js and MongoDB.",
      visual: "🔗",
      technologies: ["Node.js", "MongoDB", "Express", "Chart.js"],
      completedDate: "May 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Expense Tracker",
      description: "Personal expense tracking application with category management, budget alerts, and spending analytics. Features data visualization.",
      visual: "💰",
      technologies: ["React", "JavaScript", "Chart.js", "Local Storage"],
      completedDate: "April 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Image Gallery",
      description: "Responsive image gallery with upload functionality, filters, and slideshow features. Built with modern CSS and JavaScript.",
      visual: "🖼️",
      technologies: ["JavaScript", "HTML", "CSS", "File API"],
      completedDate: "March 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Calculator App",
      description: "Advanced calculator with scientific functions, history, and memory operations. Features a clean, intuitive interface.",
      visual: "🔢",
      technologies: ["JavaScript", "HTML", "CSS", "Math.js"],
      completedDate: "February 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Password Generator",
      description: "Secure password generator with customizable options, strength meter, and clipboard integration. Built for security-conscious users.",
      visual: "🔐",
      technologies: ["JavaScript", "HTML", "CSS", "Crypto API"],
      completedDate: "January 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "QR Code Generator",
      description: "Generate QR codes for text, URLs, and contact information. Features customizable size, color, and download options.",
      visual: "📱",
      technologies: ["JavaScript", "HTML", "CSS", "QR.js"],
      completedDate: "December 2022",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Color Palette Generator",
      description: "Generate beautiful color palettes for design projects. Features color harmony rules and export functionality.",
      visual: "🎨",
      technologies: ["JavaScript", "HTML", "CSS", "Color API"],
      completedDate: "November 2022",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Word Counter Tool",
      description: "Text analysis tool with word count, character count, reading time, and keyword density features.",
      visual: "📄",
      technologies: ["JavaScript", "HTML", "CSS", "Text API"],
      completedDate: "October 2022",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Memory Game",
      description: "Interactive memory card game with multiple difficulty levels, scoring system, and leaderboard functionality.",
      visual: "🧩",
      technologies: ["JavaScript", "HTML", "CSS", "Animation"],
      completedDate: "September 2022",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Digital Clock",
      description: "Customizable digital clock with multiple time zones, alarms, and stopwatch functionality. Features modern design.",
      visual: "⏰",
      technologies: ["JavaScript", "HTML", "CSS", "Date API"],
      completedDate: "August 2022",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Snake Game",
      description: "Classic snake game with modern graphics, high score tracking, and responsive controls. Built with HTML5 Canvas.",
      visual: "🐍",
      technologies: ["JavaScript", "HTML5 Canvas", "CSS", "Game Logic"],
      completedDate: "July 2022",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Unit Converter",
      description: "Multi-purpose unit converter for length, weight, temperature, and currency. Features real-time conversion and clean interface.",
      visual: "⚖️",
      technologies: ["JavaScript", "HTML", "CSS", "API Integration"],
      completedDate: "June 2022",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const techColors: { [key: string]: string } = {
    React: "bg-blue-100 text-blue-800",
    "Node.js": "bg-green-100 text-green-800",
    PostgreSQL: "bg-purple-100 text-purple-800",
    Stripe: "bg-yellow-100 text-yellow-800",
    TypeScript: "bg-indigo-100 text-indigo-800",
    "Socket.io": "bg-red-100 text-red-800",
    MongoDB: "bg-gray-100 text-gray-800",
    "Vue.js": "bg-cyan-100 text-cyan-800",
    PWA: "bg-orange-100 text-orange-800",
    "Chart.js": "bg-pink-100 text-pink-800",
    "API Integration": "bg-teal-100 text-teal-800",
    "Next.js": "bg-purple-100 text-purple-800",
    Prisma: "bg-blue-100 text-blue-800",
    Redis: "bg-green-100 text-green-800",
    OAuth: "bg-yellow-100 text-yellow-800",
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection from my 20+ projects that showcase my skills and passion for development
          </p>
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
              className="group relative bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <motion.div variants={projectCardHover}>
                <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
                  <div className="w-full h-64 flex items-center justify-center">
                    <div className="text-8xl opacity-60 dark:opacity-40">
                      {project.visual}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-[var(--portfolio-primary)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="flex space-x-4">
                        <Button
                          size="sm"
                          className="bg-white text-[var(--portfolio-primary)] hover:bg-slate-100"
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          className="bg-white text-[var(--portfolio-primary)] hover:bg-slate-100"
                          asChild
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`text-xs font-medium px-2.5 py-0.5 rounded ${
                          techColors[tech] || "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Completed in {project.completedDate}</span>
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
          className="text-center mt-12"
        >
          <Button
            size="lg"
            className="bg-[var(--portfolio-primary)] hover:bg-blue-700 text-white px-8 py-3"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
