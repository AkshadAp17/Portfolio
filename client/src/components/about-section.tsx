import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight, scaleIn, floatingAnimation, cardHoverEffect } from "@/lib/animations";
import { Code, Sparkles, Zap, Target, Award, BookOpen, Coffee, Heart } from "lucide-react";

const AboutSection = () => {
  const achievements = [
    { icon: BookOpen, text: "Final Year Student", color: "from-blue-500 to-blue-600" },
    { icon: Award, text: "Freelancing Experience", color: "from-green-500 to-green-600" },
    { icon: Code, text: "Full-Stack Developer", color: "from-purple-500 to-purple-600" },
    { icon: Target, text: "Problem Solver", color: "from-orange-500 to-orange-600" }
  ];

  const stats = [
    { number: "20+", label: "Projects Completed", icon: "🚀" },
    { number: "2+", label: "Years Learning", icon: "📚" },
    { number: "1", label: "Freelance Client", icon: "🤝" },
    { number: "100%", label: "Passion", icon: "❤️" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-700/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          {...floatingAnimation}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 4,
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
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-4"
            variants={scaleIn}
          >
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Get to know me</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Passionate student developer with a love for clean code and innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-8"
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
              I specialize in React, Node.js, and MongoDB, with experience in payment gateway integration, real-time features, and database design. My recent freelancing project for Hema Motor workshop demonstrates my ability to deliver complete solutions from concept to deployment. I believe in writing clean, maintainable code and creating intuitive user experiences.
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="grid grid-cols-2 gap-4 pt-4"
            >
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={`relative overflow-hidden bg-gradient-to-r ${achievement.color} p-4 rounded-xl text-white shadow-lg group cursor-pointer`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative z-10 flex items-center gap-3">
                    <achievement.icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{achievement.text}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInRight}
            className="relative"
          >
            <motion.div
              className="relative bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl shadow-2xl p-1"
              whileHover={{ rotate: 1, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl h-80 flex items-center justify-center relative overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-10">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.8, 0.3],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                <div className="text-center relative z-10">
                  <motion.div
                    className="text-8xl mb-6"
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    👨‍💻
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold text-slate-800 dark:text-white mb-3"
                    animate={{ opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Full-Stack Developer
                  </motion.h3>
                  <div className="flex items-center justify-center gap-4 text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Code className="w-4 h-4" />
                      <span className="text-sm">React</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Zap className="w-4 h-4" />
                      <span className="text-sm">Node.js</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-500" />
                      <span className="text-sm">MongoDB</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 text-yellow-400"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  <Coffee className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-slate-200/50 dark:border-slate-700/50 overflow-hidden group"
              {...cardHoverEffect}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <div className="relative z-10">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <motion.div
                  className="text-3xl font-bold text-slate-900 dark:text-white mb-1"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );

};

export default AboutSection;
