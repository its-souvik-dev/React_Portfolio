import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: "https://github.com/yourusername" },
    { icon: <FaLinkedin size={20} />, url: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter size={20} />, url: "https://twitter.com/yourusername" },
  ];

  return (
    <footer className="w-full bg-primary py-8 relative">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Left side content */}
          <div className="space-y-4">
            {/* Copyright */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                © {currentYear} Shadow Dev. All rights reserved.
              </p>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                Made with <FaHeart className="text-red-500 animate-pulse" /> 
                using React & Tailwind CSS
              </p>
            </div>
          </div>

          {/* Right side social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </footer>
  );
};

export default Footer; 