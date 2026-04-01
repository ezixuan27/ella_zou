export const MobileMenu = ({ menuOpen, setMenuOpen, setPage }) => {

    const close = () => setMenuOpen(false);

    const goTo = (page) => {
        close();
        setPage(page);
    };

    const scrollTo = (id) => {
        close();
        setPage('home');
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
    };

    const linkClass = `text-xl font-semibold my-4 text-[#E8EDF2]/80 hover:text-white transition-colors cursor-pointer
        bg-transparent border-none
        relative after:absolute after:bottom-0 after:left-0 after:bg-white
        after:h-[2px] after:w-0 hover:after:w-full after:transition-all after:duration-300
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"}`;

    return (
        <div className={`fixed top-0 left-0 w-full bg-[#3e5873] z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out
            ${menuOpen
                ? "h-screen opacity-100 pointer-events-auto"
                : "h-0 opacity-0 pointer-events-none"
            }
        `}>
            <button onClick={close}
                className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer bg-transparent border-none"
                aria-label="Close Menu"
            >
                &times;
            </button>

            <button onClick={() => scrollTo('about')} className={linkClass}>ABOUT</button>
            <button onClick={() => goTo('experience')} className={linkClass}>EXPERIENCE</button>
            <button onClick={() => goTo('projects')} className={linkClass}>PROJECTS</button>
            <button onClick={() => scrollTo('contact')} className={linkClass}>CONTACT</button>
            <a
                href="https://drive.google.com/file/d/1XL0eKA0bFRUUoVSaPtx-xEb5jrzDAqCK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                className={linkClass}
            >
                RESUME
            </a>
        </div>
    );
};
