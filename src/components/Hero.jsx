import { motion } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter size={24} />, url: "https://twitter.com/yourusername" },
  ];

  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-primary via-primary to-tertiary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-tertiary/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full max-w-2xl z-10"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm sm:text-base text-secondary font-semibold uppercase tracking-widest mb-4"
          >
            Welcome to my portfolio
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
          >
            <span className="gradient-text">I'm a Web Developer</span>
            <span className="text-secondary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg sm:text-xl text-darkText max-w-xl mb-8"
          >
            I specialize in building and designing exceptional digital experiences.
            Currently, I'm focused on building responsive web applications using
            modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="portfolio" smooth duration={500} className="group">
              <button className="btn-primary flex items-center gap-2">
                <span>View Work</span>
                <HiArrowNarrowRight className="group-hover:rotate-90 duration-300" />
              </button>
            </Link>
            <Link to="contact" smooth duration={500}>
              <button className="glass-effect px-6 py-3 text-lightText hover:text-secondary transition-all duration-300">
                Contact Me
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 flex items-center gap-6"
          >
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center"
        >
          <div className="relative">
            {/* Blob animations */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-tertiary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            {/* Image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary/50 animate-float animate-glow">
              <img
                src="/profile.jpeg"
                alt="my profile"
                className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 