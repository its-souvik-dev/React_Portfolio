import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div name="contact" className="w-full min-h-screen bg-primary p-4 text-lightText">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-8"
        >
          <p className="section-title">Contact</p>
          <p className="py-6 text-darkText">Submit the form below to get in touch with me</p>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.form
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            action="https://getform.io/f/YOUR-FORM-ID"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-lightText focus:outline-none focus:border-secondary"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-lightText focus:outline-none focus:border-secondary"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-lightText focus:outline-none focus:border-secondary"
            ></textarea>

            <button className="btn-primary px-6 py-3 my-8 mx-auto flex items-center">
              Let's talk
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 