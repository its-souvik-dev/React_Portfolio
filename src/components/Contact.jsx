import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('submitting');

    try {
      const form = e.target;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div name="contact" className="w-full min-h-screen bg-primary py-16 sm:py-24 px-4 sm:px-8 text-lightText">
      <div className="flex flex-col justify-center max-w-screen-xl mx-auto h-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pb-8 sm:pb-12 text-center sm:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold inline border-b-4 border-secondary">
            Contact
          </h2>
          <p className="py-6 text-base sm:text-lg text-darkText max-w-2xl">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="flex justify-center items-center">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            action="https://getform.io/f/YOUR-FORM-ID"
            method="POST"
            className="flex flex-col w-full max-w-2xl space-y-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="form-group">
                <label htmlFor="name" className="text-sm font-medium mb-1 block text-darkText">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full p-3 bg-primary/30 border-2 border-gray-700 rounded-lg text-lightText 
                           focus:outline-none focus:border-secondary transition-colors duration-300
                           placeholder:text-gray-500"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="text-sm font-medium mb-1 block text-darkText">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 bg-primary/30 border-2 border-gray-700 rounded-lg text-lightText 
                           focus:outline-none focus:border-secondary transition-colors duration-300
                           placeholder:text-gray-500"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="text-sm font-medium mb-1 block text-darkText">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Enter your message"
                rows="6"
                className="w-full p-3 bg-primary/30 border-2 border-gray-700 rounded-lg text-lightText 
                         focus:outline-none focus:border-secondary transition-colors duration-300
                         placeholder:text-gray-500 resize-y min-h-[150px]"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSubmitting}
              className={`btn-primary px-8 py-4 rounded-lg text-base sm:text-lg font-medium
                       disabled:opacity-70 disabled:cursor-not-allowed
                       transition-all duration-300 relative overflow-hidden
                       ${isSubmitting ? 'animate-pulse' : ''}`}
            >
              {isSubmitting ? 'Sending...' : "Let's Connect"}
            </motion.button>

            {formStatus === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-500 text-center mt-4"
              >
                Thank you for your message! I'll get back to you soon.
              </motion.p>
            )}

            {formStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-center mt-4"
              >
                Oops! Something went wrong. Please try again later.
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact; 