import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "A full-stack e-commerce platform built with React and Node.js",
      image: "/portfolio1.jpg",
      demo: "https://demo-link-1.com",
      code: "https://github.com/yourusername/project1"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A React-based task management application with drag-and-drop functionality",
      image: "/portfolio2.jpg",
      demo: "https://demo-link-2.com",
      code: "https://github.com/yourusername/project2"
    },
    {
      id: 3,
      title: "Social Media Dashboard",
      description: "A responsive dashboard for social media analytics",
      image: "/portfolio3.jpg",
      demo: "https://demo-link-3.com",
      code: "https://github.com/yourusername/project3"
    },
  ];

  return (
    <div name="portfolio" className="bg-primary w-full min-h-screen text-lightText">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="section-title">Portfolio</p>
          <p className="py-6 text-darkText">Check out some of my work right here</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, title, description, image, demo, code }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-darkText mb-4">{description}</p>
                <div className="flex items-center justify-center">
                  <a
                    href={demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm px-4 py-2 mr-2"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-sm px-4 py-2"
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