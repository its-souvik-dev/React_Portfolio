import { motion, useAnimation } from 'framer-motion';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import profileImg from '../assets/images/profile.jpg';

const TypewriterText = ({ text, typeSpeed = 150, deleteSpeed = 50, delayBeforeDelete = 2000, delayBeforeRewrite = 1000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout;

    if (isWaiting) {
      timeout = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, delayBeforeDelete);
    } else if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        timeout = setTimeout(() => {}, delayBeforeRewrite);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      if (displayedText.length === text.length) {
        setIsWaiting(true);
      } else {
        timeout = setTimeout(() => {
          setDisplayedText(prev => text.slice(0, prev.length + 1));
        }, typeSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isWaiting, text, typeSpeed, deleteSpeed, delayBeforeDelete, delayBeforeRewrite]);

  return (
    <h3 className="text-2xl sm:text-3xl font-bold text-secondary relative group cursor-default min-h-[2.5em] flex items-center justify-center">
      <span className="mr-1">{displayedText}</span>
      <span className="animate-blink">|</span>
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full"></span>
    </h3>
  );
};

const Hero = () => {
  const socialLinks = [
    { icon: <FaGithub size={24} />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter size={24} />, url: "https://twitter.com/yourusername" },
  ];

  return (
    <div name="home" className="w-full min-h-screen bg-gradient-to-b from-primary via-primary to-tertiary relative overflow-hidden py-8 sm:py-12">
      {/* Background decoration - adjusted for better mobile appearance */}
      <div className="absolute top-20 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-tertiary/20 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-8 md:flex-row gap-8 sm:gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center h-full max-w-2xl z-10 text-center md:text-left"
        >
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs sm:text-sm md:text-base text-secondary font-semibold uppercase tracking-widest mb-2 sm:mb-4"
          >
            Welcome to my portfolio
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-3 sm:mb-4"
          >
            <span className="gradient-text">I'm a Web Developer</span>
            <span className="text-secondary">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-darkText max-w-xl mx-auto md:mx-0 mb-6 sm:mb-8"
          >
            I specialize in building and designing exceptional digital experiences.
            Currently, I'm focused on building responsive web applications using
            modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="portfolio" smooth duration={500} className="group">
              <button className="btn-primary w-full sm:w-auto flex items-center justify-center gap-2">
                <span>View Work</span>
                <HiArrowNarrowRight className="group-hover:rotate-90 duration-300" />
              </button>
            </Link>
            <Link to="contact" smooth duration={500} className="w-full sm:w-auto">
              <button className="glass-effect w-full sm:w-auto px-6 py-3 text-lightText hover:text-secondary transition-all duration-300">
                Contact Me
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 sm:mt-8 flex items-center gap-6 justify-center md:justify-start"
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
          className="w-full md:w-1/2 flex justify-center items-center"
        >
          <div className="relative w-full max-w-md">
            {/* Blob animations - adjusted for better mobile appearance */}
            <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-tertiary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            {/* Image container - made responsive */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-secondary/50 animate-float animate-glow mx-auto">
              <img
                src={profileImg}
                alt="my profile"
                className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            {/* Name with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-6"
            >
              <TypewriterText 
                text="Shadow Developer" 
                typeSpeed={150}
                deleteSpeed={75}
                delayBeforeDelete={2000}
                delayBeforeRewrite={1000}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero; 