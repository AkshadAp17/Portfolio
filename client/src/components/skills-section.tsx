import { motion } from "framer-motion";
import { Code, Server, Cloud, Smartphone, Palette, Settings } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

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
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-[var(--portfolio-primary)] text-3xl mb-4">
                <category.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-slate-700">{skill.name}</span>
                    <div className="w-16 bg-slate-200 rounded-full h-2">
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
