import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const greetings = [
  { language: "English", text: "Hello" },
  { language: "Hindi", text: "नमस्ते" },
  { language: "Bengali", text: "নমস্কার" },
  { language: "Tamil", text: "வணக்கம்" },
  { language: "Telugu", text: "నమస్తే" },
  { language: "Marathi", text: "नमस्कार" },
  { language: "Gujarati", text: "નમસ્તે" },
  { language: "Kannada", text: "ನಮಸ್ಕಾರ" },
  { language: "Malayalam", text: "നമസ്കാരം" },
  { language: "Punjabi", text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ" },
  { language: "Odia", text: "ନମସ୍କାର" },
];

const Preloader = ({ onFinish }) => {
  const [current, setCurrent] = useState(0);

  // cycle greetings
  useEffect(() => {
    if (current < greetings.length - 1) {
      const interval = setTimeout(() => {
        setCurrent((prev) => prev + 1);
      }, 1500);
      return () => clearTimeout(interval);
    }
  }, [current]);

  // auto timeout after 4 sec
  useEffect(() => {
    const timeout = setTimeout(() => {
      onFinish();
    }, 4000); // 4 sec cap
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-gray-200 z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="text-4xl font-bold text-gray-800">
            {greetings[current].text}
          </div>
          <span className="block text-lg mt-2 text-gray-600">
            ({greetings[current].language})
          </span>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default Preloader;
