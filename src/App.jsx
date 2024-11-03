// /* eslint-disable no-unused-vars */
import React from 'react';
import MouseGlowEffect from './utils/MouseGlowEffect';
import TextScramble from './utils/TextScramble';
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <TextScramble text="Hello, World!" />
      {/* <LandingPage/> */}
      <MouseGlowEffect />
     <Nav/>
    </>
  );
}

export default App;
