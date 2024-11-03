import React, { useState, useEffect } from 'react';

const TextScramble = ({ text }) => {

  const [displayedText, setDisplayedText] = useState(text);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  let interval = null;

  const handleMouseOver = () => {
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

  useEffect(() => {
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="font-mono text-white text-center absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10
                 text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[8vw] 2xl:text-[6vw]
                 p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 whitespace-nowrap rounded-md sm:rounded-lg"
      data-value={text}
      onMouseOver={handleMouseOver}
    >
      {displayedText}
    </div>
  );
};

export default TextScramble;
