import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen"
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Footer } from "./components/sections/Footer";
import { Contact } from "./components/sections/Contact";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const setPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"
          } bg-[#f4f8fe] text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} setPage={setPage} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setPage={setPage} />

        {currentPage === 'home' && (
          <>
            <Home setPage={setPage} />
            <About />
            <Contact />
            <Footer />
          </>
        )}
        {currentPage === 'projects' && <Projects setPage={setPage} />}
        {currentPage === 'experience' && <Experience setPage={setPage} />}

      </div>
    </>
  )
}

export default App;
