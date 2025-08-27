import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText, Calendar, MapPin, Code, Award, Users, Target } from "lucide-react";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft } from "@/lib/animations";

const ResumeSection = () => {
  const experience = {
    title: "Freelancer – Full Stack Web Developer",
    company: "Remote",
    duration: "Jan. 2024",
    description: "Vehicle Selling Platform – Automotive Marketplace",
    achievements: [
      "Developed a full-featured vehicle marketplace where buyers (users) can browse and inquire about vehicles, and sellers (admins) can list, manage, and approve vehicles.",
      "Implemented a real-time chat system for buyers to directly message sellers for inquiries using WebSocket and Socket.io.",
      "Created an advanced search and filtering system for type, price, location, and mileage, improving buyer experience and search accuracy.",
      "Built a mobile-friendly React.js frontend with Tailwind CSS, featuring dynamic inventory cards and interactive maps.",
      "Added website analytics integration (traffic tracking, user activity monitoring, conversion tracking) to optimize sales performance.",
      "Implemented performance optimizations (lazy loading, image compression), reducing load times by 40%.",
      "Developed an admin dashboard for sellers to manage listings, verify buyers, and track inquiries."
    ]
  };

  const projects = [
    {
      title: "Legal Case Management System",
      duration: "Mar. 2025",
      technologies: ["MERN Stack", "Tailwind CSS", "Nodemailer", "Multer"],
      achievements: [
        "Built a role-based platform for Admins (case oversight), Lawyers (case handling), and Users (Victim/Accused) with secure JWT authentication.",
        "Enabled document and video uploads with Multer, automatic hearing date assignment (1–30 days), and unique PNR tracking via UUID.",
        "Integrated Nodemailer for automated email updates on case status and hearing schedules.",
        "Added lawyer recommendations based on case type and expertise, plus an interactive calendar for hearing schedules.",
        "Designed a fully responsive frontend for seamless access on desktop and mobile."
      ]
    },
    {
      title: "AI-Powered GitHub Test Case Generator",
      duration: "Feb. 2025",
      technologies: ["React.js", "Node.js", "GitHub API", "AI Integration"],
      achievements: [
        "Integrated the GitHub API to list repository files and allow developers to select multiple files for analysis.",
        "Used AI models to create test case summaries for frameworks like JUnit and Selenium.",
        "Built a code generation module to produce full, ready-to-use test files from summaries.",
        "Added an optional feature to auto-create GitHub Pull Requests with generated test files.",
        "Designed a streamlined UI for file selection, AI review, and test generation in one workflow."
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Computer Science",
    institution: "Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded",
    duration: "Aug. 2022 – Jun. 2026"
  };

  const skills = {
    languages: ["Java", "JavaScript", "HTML", "CSS", "SQL", "TypeScript"],
    frontend: ["React.js", "Context API", "Tailwind CSS", "Material UI"],
    backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST API"],
    devops: ["Git", "GitHub", "Firebase", "Vercel"],
    tools: ["WebSocket", "JWT", "Multer", "Socket.io", "Postman"],
    concepts: ["Data Structures & Algorithms", "OOP", "SDLC"]
  };

  const achievements = [
    "Solved 350+ DSA problems on coding platforms.",
    "Led a team of 4 to deliver a full-stack application under tight deadlines."
  ];

  const leadership = [
    "Active GitHub contributor focused on MERN stack and scalable applications.",
    "Comfortable working both independently and in collaborative teams."
  ];

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Akshad_Apastambh_Resume.pdf';
    link.download = 'Akshad_Apastambh_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-32 h-32 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 8,
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
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full mb-4"
            variants={fadeInUp}
          >
            <FileText className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Professional Resume</span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Resume <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Overview</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            A comprehensive overview of my professional experience, skills, and achievements
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={handleDownload}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF Resume
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Experience Section */}
          <motion.div variants={staggerItem} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-xl"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Target size={24} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Professional Experience</h3>
                <p className="text-slate-600 dark:text-slate-400">Recent work experience and achievements</p>
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6 mb-6">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{experience.title}</h4>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <MapPin size={16} />
                  {experience.company}
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Calendar size={16} />
                  {experience.duration}
                </div>
              </div>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{experience.description}</p>
            </div>
            
            <div className="space-y-3">
              {experience.achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-slate-50/50 dark:bg-slate-800/30 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects Section */}
          <motion.div variants={staggerItem} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
              <motion.div
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-xl"
                whileHover={{ rotate: 5, scale: 1.1 }}
              >
                <Code size={24} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Featured Projects</h3>
                <p className="text-slate-600 dark:text-slate-400">Key projects and technical achievements</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{project.duration}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {project.achievements.slice(0, 3).map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills & Education Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div variants={staggerItem} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Award size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Education</h3>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{education.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{education.institution}</p>
                <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                  <Calendar size={16} />
                  {education.duration}
                </div>
              </div>
            </motion.div>

            {/* Technical Skills */}
            <motion.div variants={staggerItem} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-3 rounded-xl"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Code size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Technical Skills</h3>
                </div>
              </div>
              
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items], index) => (
                  <div key={category}>
                    <h5 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements & Leadership */}
          <div className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={staggerItem} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white p-3 rounded-xl"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Award size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Achievements</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={staggerItem} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-slate-200/50 dark:border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-xl"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <Users size={24} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Leadership & Activities</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                {leadership.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;