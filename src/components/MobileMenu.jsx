export const MobileMenu = ({ menuOpen, setMenuOpen, setPage }) => {

    const close = () => setMenuOpen(false);

    const goTo = (page) => {
        close();
        setPage(page);
    };

    const scrollTo = (id) => {
        close();
        setPage('home');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
            });
        });
    };

    const itemClass = `font-display italic text-paper/85 hover:text-lava transition-colors cursor-pointer bg-transparent border-none text-4xl md:text-5xl text-left flex items-baseline gap-4 my-1
        ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}
        transition-all duration-500`;

    const numClass = "font-mono text-[11px] tracking-[0.25em] uppercase text-lava not-italic";

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: menuOpen ? '100vh' : 0,
                backgroundColor: 'var(--color-abyss)',
                zIndex: 50,
                opacity: menuOpen ? 1 : 0,
                pointerEvents: menuOpen ? 'auto' : 'none',
                transition: 'height 500ms ease-in-out, opacity 500ms ease-in-out',
                overflow: 'hidden',
            }}
            className="flex flex-col items-start justify-center px-8 grain"
        >
            <button onClick={close}
                className="absolute top-6 right-6 text-lava text-3xl focus:outline-none cursor-pointer bg-transparent border-none z-10"
                aria-label="Close Menu"
            >
                ×
            </button>

            <nav className="flex flex-col gap-1 z-10 mt-10">
                <button onClick={() => goTo('experience')} className={itemClass}>
                    <span className={numClass}>01</span>Experience
                </button>
                <button onClick={() => goTo('projects')} className={itemClass}>
                    <span className={numClass}>02</span>Projects
                </button>
                <button onClick={() => scrollTo('contact')} className={itemClass}>
                    <span className={numClass}>03</span>Contact
                </button>
                <a
                    href="https://drive.google.com/file/d/1XL0eKA0bFRUUoVSaPtx-xEb5jrzDAqCK/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className={itemClass}
                >
                    <span className={numClass}>04</span>Resume
                </a>
            </nav>
        </div>
    );
};
