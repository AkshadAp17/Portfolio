import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const AboutSection = () => {
  const achievements = [
    "5+ Years Experience",
    "50+ Projects Completed",
    "Remote Team Leader"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Passionate developer with a love for clean code and innovative solutions
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
              className="text-lg text-slate-700 leading-relaxed"
            >
              I'm a full-stack developer with over 5 years of experience building web applications that users love.
              My journey started with a Computer Science degree, but my real education came from countless hours of
              coding, learning, and pushing the boundaries of what's possible on the web.
            </motion.p>

            <motion.p
              variants={staggerItem}
              className="text-lg text-slate-700 leading-relaxed"
            >
              I believe in writing clean, maintainable code and creating intuitive user experiences. Whether I'm
              working with React, Node.js, or exploring new technologies, I'm always focused on delivering value
              and solving real problems.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-4 pt-4"
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-slate-100 px-4 py-2 rounded-full">
                  <span className="text-sm font-medium text-slate-700">{achievement}</span>
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
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="text-2xl font-bold text-[var(--portfolio-primary)]">50+</div>
              <div className="text-sm text-slate-600">Projects Completed</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl border">
              <div className="text-2xl font-bold text-[var(--portfolio-primary)]">5+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
