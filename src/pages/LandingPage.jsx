import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import anime from 'animejs';
import HomePage from './HomePage'; // Import your HomePage component

const LandingPage = () => {
  const [showHomePage, setShowHomePage] = useState(false); // Controls visibility of HomePage
  const [isMobile, setIsMobile] = useState(false); // Check if screen is mobile size

  useEffect(() => {
    // Check if the screen width is below 640px (mobile)
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize(); // Initial check on component mount
    window.addEventListener('resize', handleResize); // Update on screen resize

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleClick = () => {
    const btn = document.querySelector('.btn');

    gsap.to(btn, {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: 'expo.inOut',
    });

    gsap.to('.text-wrapper > div', {
      x: '500',
      duration: 1,
      ease: 'expo.inOut',
      delay: 1,
      stagger: 0.1,
    });

    gsap.to('.text-wrapper', {
      y: -600,
      scale: 4.5,
      rotate: -90,
      duration: 3,
      ease: 'expo.inOut',
      delay: 1.5,
    });

    gsap.to('.text', {
      opacity: 1,
      duration: 1,
      ease: 'expo.inOut',
      delay: 3,
    });

    gsap.to('.text-wrapper > div', {
      x: '-3500',
      duration: 4,
      ease: 'expo.inOut',
      delay: 3.5,
      stagger: 0.05,
    });

    gsap.to('.text-container', {
      bottom: '-100%',
      duration: 2,
      ease: 'expo.inOut',
      delay: 6,
      onComplete: () => {
        // Show HomePage after animation completes and a delay
        setTimeout(() => {
          setShowHomePage(true);
        }, 2000);
      },
    });

    // Header animation with Anime.js
    const headerText = "GDG";
    const header = document.createElement('div');
    header.className = 'header';
    header.innerHTML = headerText.replace(/\S/g, "<span class='letter'>$&</span>");
    document.body.appendChild(header);

    anime.timeline().add({
      targets: '.header .letter',
      opacity: [0, 1],
      translateY: [200, 0],
      translateZ: 0,
      easing: 'easeOutExpo',
      duration: 2000,
      delay: (el, i) => 7000 + 40 * i,
    });
  };

  // Render HomePage directly if on a mobile screen
  if (isMobile) {
    return <HomePage />;
  }

  return (
    <div className="container z-30">
      {/* Display Enter button, text container, and text wrapper only if HomePage is hidden */}
      {!showHomePage && (
        <>
          <button className="btn" onClick={handleClick}>Enter</button>
          <div className="text-container"></div>
          <div className="text-wrapper">
            {[
              'Zealously few furniture repulsive agreeable consisted.',
              'Collected breakfast estimable questions in to it.',
              'For him precaution any advantages dissimilar few.',
              'Shortly respect ask cousins brought add tedious nay.',
              'Object remark lively all did feebly excuse our wooded.',
              'Sufficient unpleasing an insensible motionless if ye.',
              'The for fully had she there leave merit enjoy forth.',
              'In in written on charmed justice is amiable farther.',
              'How daughters not promotion few knowledge contented.',
              'Zealously few furniture repulsive.',
            ].map((text, index) => (
              <div key={index} className="text">{text}</div>
            ))}
          </div>
        </>
      )}

      {/* Show HomePage component after the animation and delay */}
      {showHomePage && <HomePage />}
    </div>
  );
};

export default LandingPage;
