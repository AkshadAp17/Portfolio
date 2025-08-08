import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const AboutSection = () => {
  const achievements = [
    "Final Year Student",
    "Freelancing Experience",
    "Full-Stack Developer"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4 font-heading">About Me</h2>
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
              I'm a final year Computer Science student and full-stack developer with freelancing experience, passionate about building web applications that solve real-world problems. My journey includes both academic projects and professional freelancing work, giving me practical experience in client communication and project delivery.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              I specialize in React, Node.js, and MongoDB, with experience in payment gateway integration, real-time features, and mobile development. My recent freelancing project for Hema Motor workshop demonstrates my ability to deliver complete solutions from concept to deployment. I believe in writing clean, maintainable code and creating intuitive user experiences.
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
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-2xl w-full h-64 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">💻</div>
                <div className="text-xl font-semibold">Full-Stack Development</div>
                <div className="text-sm opacity-90">React • Node.js • MongoDB</div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border dark:border-slate-700">
              <div className="text-2xl font-bold text-[var(--portfolio-primary)]">5+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Professional Projects</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-xl border dark:border-slate-700">
              <div className="text-2xl font-bold text-[var(--portfolio-primary)]">Freelancing</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
