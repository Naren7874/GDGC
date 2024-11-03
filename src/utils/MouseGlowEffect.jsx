import React, { useEffect, useRef } from 'react';
import "../styles/MouseGlowEffect.css"; // Import custom CSS for animations

const MouseGlowEffect = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      if (blobRef.current) {
        blobRef.current.animate(
          {
            left: `${clientX}px`,
            top: `${clientY}px`,
          },
          { duration: 3000, fill: 'forwards' }
        );
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return (
    <>
      <div
        ref={blobRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[17vmax] w-[17vmax] rounded-full pointer-events-none opacity-80 glow-blob"
      />
      <div className="absolute inset-0 w-full h-full pointer-events-none backdrop-blur-6xl" />
    </>
  );
};

export default MouseGlowEffect;
