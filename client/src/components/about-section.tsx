import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const AboutSection = () => {
  const achievements = [
    "Final Year Student",
    "20+ Projects Completed",
    "Quick Learner"
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate student developer with a love for clean code and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p
              variants={staggerItem}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              I'm a final year Computer Science student and aspiring full-stack developer passionate about building web applications that make a difference.
              My journey started with academic foundations, but my real education came from countless hours of
              coding, learning, and pushing the boundaries of what's possible on the web.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              I believe in writing clean, maintainable code and creating intuitive user experiences. Whether I'm
              working with React, Node.js, or exploring new technologies, I'm always focused on delivering value
              and solving real problems. As a student, I'm eager to learn and contribute to meaningful projects.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-4 pt-4"
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-100 dark:bg-slate-800 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{achievement}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace"
              className="rounded-xl shadow-2xl w-full h-auto"
            />

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border dark:border-slate-700">
              <div className="text-2xl font-bold text-[var(--portfolio-primary)]">20+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border dark:border-slate-700">
              <div className="text-2xl font-bold text-[var(--portfolio-primary)]">Final</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Year</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
