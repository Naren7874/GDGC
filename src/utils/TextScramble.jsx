import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TextScramble = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const scrambleText = () => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      setDisplayedText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  // Run scramble effect on mount
  useEffect(() => {
    scrambleText();
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="font-mono text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[8vw] 2xl:text-[6vw] p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 whitespace-nowrap rounded-md sm:rounded-lg"
      data-value={text}
      onMouseOver={scrambleText} // Also keep this for hover effect
      initial={{ scale: 0 }} // Start with scale 0
      whileInView={{ scale: 1 }} // Animate to scale 1 when in view
      transition={{ duration: 0.5, ease: "easeOut" }} // Transition settings
      viewport={{ once: false }} // Trigger only once when in view
    >
      {displayedText}
    </motion.div>
  );
};

export default TextScramble;
