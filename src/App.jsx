// import React from "react"
import MouseGlowEffect from "./utils/MouseGlowEffect";
// import TextScramble from './utils/TextScramble';
// Importing pages
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Flashback from "./pages/Flashback";
import StickyNavbar from "./components/Navbar";
// Add other page imports as needed

function App() {
  return (
    <div className="relative overflow-hidden">
      {/* Fixed mouse glow effect for background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MouseGlowEffect />
      </div>

      {/* Page content with scrolling layout */}
      <div className="relative z-10 flex flex-col items-center space-y-32">
    <div className="top-0">
        <StickyNavbar />
    </div>
    <HomePage />
    <About />
    <Team />
    <Events />
    <Flashback />
    <Contact />
</div>

    </div>
  );
}

export default App;
