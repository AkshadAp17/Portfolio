import { motion } from "framer-motion";
import { Code, Server, Cloud, Smartphone, Palette, Settings, Sparkles, TrendingUp } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, skillBarAnimation, scaleIn, floatingAnimation, cardHoverEffect } from "@/lib/animations";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "Tailwind CSS", level: 70 },
      ],
    },
    {
      icon: Server,
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 65 },
        { name: "PostgreSQL", level: 60 },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Basics", level: 50 },
        { name: "Docker", level: 45 },
        { name: "Git/GitHub", level: 80 },
      ],
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        { name: "Figma", level: 60 },
        { name: "UI/UX Basics", level: 65 },
        { name: "Responsive Design", level: 75 },
      ],
    },
    {
      icon: Settings,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 70 },
        { name: "Java", level: 65 },
        { name: "C++", level: 60 },
      ],
    },
    {
      icon: Code,
      title: "Tools & Workflow",
      skills: [
        { name: "VS Code", level: 90 },
        { name: "Git/GitHub", level: 80 },
        { name: "Postman", level: 70 },
        { name: "MongoDB Compass", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-700/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-16 left-20 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-xl"
          {...floatingAnimation}
        />
        <motion.div
          className="absolute bottom-16 right-16 w-28 h-28 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <motion.div 
                className="text-[var(--portfolio-primary)] text-3xl mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <category.icon size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                    <div className="w-16 bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-[var(--portfolio-primary)] h-2 rounded-full skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
