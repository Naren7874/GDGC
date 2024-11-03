import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const Text = ({ Text }) => {
  useEffect(() => {
    // Animate the stroke-dashoffset on mount
    gsap.fromTo(
      "#active",
      { strokeDashoffset: 1000 },
      { strokeDashoffset: 0, duration: 8 }
    );
  }, []);

  return (
    <div className="flex z-10 items-center justify-center h-screen bg-transparent load-container">
      <svg className="w-[225px] md:w-[340px] lg:w-[480px] h-[110px]" viewBox="0 0 500 200">
        <text
          x="0"
          y="-20"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          strokeDasharray="1000"
          className="font-bold text-white font-spartan text-5xl md:text-[57px] lg:text-[5rem] leading-[7rem]"
        >
          <tspan x="0" dy="100">{Text}</tspan>
          <animate
            id="active"
            attributeName="stroke-dashoffset"
            from="1000"
            to="0"
            dur="8s"
            fill="freeze"
          />
        </text>
      </svg>
    </div>
  );
};

export default Text;
