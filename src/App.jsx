// App.jsx
import MouseGlowEffect from "./utils/MouseGlowEffect"
import HomePage from "./pages/HomePage"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Team from "./pages/Team"
import Events from "./pages/Events"
import Flashback from "./pages/Flashback"
import StickyNavbar from "./components/Navbar"

function App() {
    return (
        <div className="relative overflow-hidden">
            {/* Fixed mouse glow effect for background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <MouseGlowEffect />
            </div>

            {/* Page content with scrolling layout */}
            <div className="relative z-10 flex flex-col items-center">
                <div className="top-0 w-screen flex justify-center items-center">
                    <StickyNavbar />
                </div>
                <section id="home">
                    <HomePage />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="team">
                    <Team />
                </section>
                <section id="events">
                    <Events />
                </section>
                <section id="flashback">
                    <Flashback />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </div>
        </div>
    )
}

export default App
