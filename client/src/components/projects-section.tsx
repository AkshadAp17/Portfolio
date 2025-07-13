import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, projectCardHover } from "@/lib/animations";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      completedDate: "March 2024",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React and WebSocket integration.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "JavaScript", "Socket.io", "MongoDB"],
      completedDate: "February 2024",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Weather Forecast App",
      description: "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics. Features responsive design and API integration.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["HTML", "CSS", "JavaScript", "API Integration"],
      completedDate: "January 2024",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects, skills, and contact information. Built with modern web technologies and featuring smooth animations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      completedDate: "December 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Recipe Finder App",
      description: "A recipe discovery application with search functionality, ingredient filtering, and meal planning features. Integrated with external recipe APIs.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "JavaScript", "API Integration", "CSS"],
      completedDate: "November 2023",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Todo List Application",
      description: "A feature-rich todo application with categories, priorities, due dates, and local storage. Built with vanilla JavaScript and modern CSS.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["JavaScript", "HTML", "CSS", "Local Storage"],
      completedDate: "October 2023",
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
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <motion.div variants={projectCardHover}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

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
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>

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

                  <div className="flex items-center text-sm text-slate-500">
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
