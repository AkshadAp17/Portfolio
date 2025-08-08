import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

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
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-heading">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My journey in web development includes both freelancing work and personal projects
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-[var(--portfolio-primary)] text-white p-2 rounded-lg">
                      <Briefcase size={20} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-[var(--portfolio-primary)] mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:ml-4 mt-4 lg:mt-0 inline-flex items-center gap-2 text-[var(--portfolio-primary)] hover:underline"
                >
                  <ExternalLink size={16} />
                  View Project
                </a>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                {exp.description}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                  Key Achievements:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="flex items-start gap-2 text-slate-700 dark:text-slate-300"
                    >
                      <span className="text-[var(--portfolio-primary)] mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection; 