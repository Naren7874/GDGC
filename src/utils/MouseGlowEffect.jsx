import React, { useEffect, useRef } from 'react';
import "../index.css"
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
      <div ref={blobRef} id="blob" />
      <div id="blur" />
    </>
  );
};

export default MouseGlowEffect;
