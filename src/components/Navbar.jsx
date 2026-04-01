import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, setPage }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : '';
    }, [menuOpen]);

    const goHome = () => setPage('home');

    const scrollTo = (id) => {
        setPage('home');
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    };

    const linkClass = "text-[#E8EDF2] hover:text-white transition-colors cursor-pointer bg-transparent border-none font-medium text-lg \
relative after:absolute after:bottom-0 after:left-0 after:bg-white \
after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300";

    return (
        <nav className="fixed top-0 w-full z-40 bg-[#3e5873]/70 backdrop-blur-md border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <button onClick={goHome} className="text-xl font-bold text-white bg-transparent border-none cursor-pointer">
                        ZZ
                    </button>
                    <div
                        className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-10 text-lg font-medium">
                        <button onClick={() => scrollTo('about')} className={linkClass}>About</button>
                        <button onClick={() => setPage('experience')} className={linkClass}>Experience</button>
                        <button onClick={() => setPage('projects')} className={linkClass}>Projects</button>
                        <button onClick={() => scrollTo('contact')} className={linkClass}>Contact</button>
                        <a
                            href="https://drive.google.com/file/d/1Bw-6LkZXdc2J0rBQzQcbRa4VI2YemTdb/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#E8EDF2] hover:text-white transition-colors
                            relative after:absolute after:bottom-0 after:left-0 after:bg-white
                            after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
