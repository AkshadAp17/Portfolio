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
      title: "Social Media Dashboard",
      description: "A comprehensive social media dashboard with analytics, post scheduling, and engagement tracking. Built with modern web technologies.",
      visual: "📱",
      technologies: ["Next.js", "Prisma", "Redis", "OAuth"],
      completedDate: "December 2023",
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
