
import { useState } from 'react';
import './App.css';
import { LoadingScreen } from './compenents/LoadingScreen';
import { Navbar } from './compenents/NavBar';
import { MobileMenu } from './compenents/MobileMenu';
import { Home } from './compenents/sections/Home';
import { About } from './compenents/sections/About';
import { Projects } from './compenents/sections/Project';
import { Contact } from './compenents/sections/Contact';
import ParticlesBackground from './compenents/ParticlesBackground';
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true )} />}{" "}
        <div className="relative min-h-screen">
          <ParticlesBackground />
          <div 
            className={`min-h-screen relative z-10 transition-opacity duration-3000 ${
            isLoaded ? "opacity-100" : "opacity-0"
            } bg-transparent text-gray-100`}
          >
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Home />
            <About />
            <Projects />
            <Contact />
          </div>
        </div>
    </>
  );
}

export default App;
