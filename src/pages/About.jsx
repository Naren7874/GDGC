import React from 'react';
import TextScramble from '../utils/TextScramble';
import Text from '../components/textScroll'

const About = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <TextScramble text="About Us" />
      <Text Text="About Us" width="50vw" height="29vh" fontSize="5vw" />  
    </div>
  );
};

export default About;
