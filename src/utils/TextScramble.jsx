import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const TextScramble = ({ text }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); 

  const scrambleText = () => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      setDisplayedText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            // Keep spaces intact, only scramble non-space characters
            if (text[index] === " ") {
              return " ";
            }
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

  // Run scramble effect only when the component comes into view
  useEffect(() => {
    if (isInView) {
      scrambleText();
    }
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className="font-mono text-white text-center text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[8vw] 2xl:text-[6vw] p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 whitespace-nowrap rounded-md sm:rounded-lg"
    >
      {displayedText}
    </div>
  );
};

export default TextScramble;
