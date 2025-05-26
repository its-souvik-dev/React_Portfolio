import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaGitAlt, FaReact, FaJs, FaLaravel } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

const About = () => {
  const techStack = [
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={40} /> },
    { name: 'React', icon: <FaReact className="text-blue-400" size={40} /> },
    { name: 'Laravel', icon: <FaLaravel className="text-red-500" size={40} /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-600" size={40} /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" size={40} /> },
    { name: 'Web Dev', icon: <FaCode className="text-purple-400" size={40} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-tertiary to-primary py-16 relative">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent"></div>
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-72 h-72 bg-tertiary/20 rounded-full filter blur-3xl"></div>

      <div className="max-w-screen-xl mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-xl text-darkText leading-relaxed glass-effect p-6">
              I am a passionate web developer with expertise in modern web technologies.
              My journey in web development started with a curiosity to create beautiful
              and functional websites. Over time, I've developed strong skills in
              front-end development with React.js and back-end development with Laravel.
            </motion.p>

            <motion.p variants={itemVariants} className="text-xl text-darkText leading-relaxed glass-effect p-6">
              I believe in writing clean, maintainable code and creating user-friendly
              interfaces. My experience includes building responsive websites,
              full-stack applications with MySQL databases, and RESTful APIs. I'm always
              eager to learn new technologies and improve my skills.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8 gradient-text">
              Tech Stack
            </motion.h3>
            <motion.div variants={containerVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {techStack.map(({ name, icon }, index) => (
                <motion.div
                  key={name}
                  variants={itemVariants}
                  className="group"
                >
                  <div className="card flex flex-col items-center justify-center p-6 space-y-4 hover:bg-white/5">
                    {icon}
                    <span className="text-lg font-medium">{name}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 