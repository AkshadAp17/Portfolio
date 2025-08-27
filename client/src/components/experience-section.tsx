import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink, Star, Award, CheckCircle, ArrowUpRight, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, cardHoverEffect, scaleIn, floatingAnimation } from "@/lib/animations";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full-Stack Developer (Freelancing)",
      company: "Hema Motor Workshop",
      duration: "Dec 2023 - Feb 2024",
      location: "Remote",
      description: "Developed a comprehensive automotive service booking platform with real-time tracking, payment processing, and customer management system.",
      technologies: ["React", "Node.js", "MongoDB", "Payment Gateway", "Real-time Updates"],
      achievements: [
        "Built complete booking system with appointment scheduling",
        "Integrated payment gateway for secure transactions",
        "Implemented real-time service status tracking",
        "Created admin dashboard for workshop management",
        "Achieved 5/5 client satisfaction rating"
      ],
      link: "https://vista-etyd.onrender.com/"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
          {...floatingAnimation}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full mb-4"
            variants={scaleIn}
          >
            <Briefcase className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Professional Journey</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Professional <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey in web development includes both freelancing work and personal projects
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50 overflow-hidden group"
              {...cardHoverEffect}
            >
              {/* Gradient overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  {/* Rating positioned in header for better spacing */}
                  <motion.div
                    className="lg:hidden flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full self-start mb-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.2 }}
                  >
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium text-green-700 dark:text-green-300">5.0</span>
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-xl shadow-lg"
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Briefcase size={24} />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400 mb-4">
                      <motion.div
                        className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Calendar size={16} className="text-green-500" />
                        <span className="font-medium">{exp.duration}</span>
                      </motion.div>
                      <motion.div
                        className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <MapPin size={16} className="text-blue-500" />
                        <span className="font-medium">{exp.location}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Action buttons and rating for larger screens */}
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 mt-4 lg:mt-0">
                    {/* Rating for larger screens */}
                    <motion.div
                      className="hidden lg:flex items-center gap-1 bg-green-100 dark:bg-green-900/30 px-3 py-1 rounded-full"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.2 }}
                    >
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-xs font-medium text-green-700 dark:text-green-300">5.0</span>
                    </motion.div>
                    
                    <motion.a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    </motion.a>
                  </div>
                </div>

                <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-blue-500" />
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Technologies Used
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium px-4 py-2 rounded-xl border border-blue-200/50 dark:border-blue-700/50 shadow-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-green-500" />
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">
                      Key Achievements
                    </h4>
                  </div>
                  <div className="space-y-3">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        className="flex items-start gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-lg border-l-4 border-green-500"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: achievementIndex * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 