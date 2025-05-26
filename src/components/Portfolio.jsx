import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js",
      image: "images/ecommarce.jpg",
      demo: "https://demo-link-1.com",
      code: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A React-based task management application with drag-and-drop functionality",
      image: "images/taskmanagement.jpg",
      demo: "https://demo-link-2.com",
      code: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A responsive dashboard for social media analytics",
      image: "images/socialmeadia.jpg",
      demo: "https://demo-link-3.com",
      code: "https://github.com/yourusername/project3"
    },
  ];

  return (
    <div name="portfolio" className="bg-primary w-full min-h-screen text-lightText py-16 sm:py-24">
      <div className="max-w-screen-xl p-4 sm:p-8 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-8 sm:pb-12 text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold inline border-b-4 border-secondary">
            Portfolio
          </h2>
          <p className="py-6 text-base sm:text-lg text-darkText max-w-2xl mx-auto sm:mx-0">
            Check out some of my work right here. Each project demonstrates different skills and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, title, description, image, demo, code }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-48 sm:h-56 object-cover object-center transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-3 text-secondary">{title}</h3>
                <p className="text-sm sm:text-base text-darkText mb-6">{description}</p>
                <div className="flex items-center justify-start space-x-4">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-effect text-sm px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio; 