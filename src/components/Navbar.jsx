import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen, setPage, currentPage }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : '';
    }, [menuOpen]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const goHome = () => setPage('home');

    const scrollTo = (id) => {
        const alreadyHome = currentPage === 'home';
        if (alreadyHome) {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            return;
        }
        // cross-page: switch to home, then jump (no smooth) to the anchor
        setPage('home');
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'auto' });
            });
        });
    };

    // pages with paper bg at top — need dark text when navbar is transparent
    const isOverPaper = !scrolled && (currentPage === 'projects' || currentPage === 'experience');
    const baseText = isOverPaper ? 'text-ink' : 'text-paper';
    const linkText = isOverPaper ? 'text-ink/70' : 'text-paper/75';

    const linkClass =
        `font-mono text-[11px] tracking-[0.2em] uppercase ${linkText} hover:text-lava transition-colors cursor-pointer bg-transparent border-none relative group`;

    return (
        <nav
            className={`fixed top-0 w-full z-40 transition-all duration-300 ${
                scrolled ? "bg-abyss/85 backdrop-blur-md border-b border-hairline" : "bg-transparent"
            }`}
            style={scrolled ? { borderBottomColor: 'var(--color-hairline)' } : {}}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center h-16">
                    <button
                        onClick={goHome}
                        className={`font-mono text-[11px] tracking-[0.2em] uppercase ${baseText} bg-transparent border-none cursor-pointer flex items-center gap-2`}
                    >
                        <span>ZZ</span>
                        <span className="text-lava">⟡</span>
                    </button>

                    <div
                        className={`text-2xl relative cursor-pointer z-40 md:hidden bg-transparent border-none ${baseText}`}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center gap-9">
                        <button onClick={() => setPage('experience')} className={linkClass}>
                            <span className="opacity-0 group-hover:opacity-100 text-lava transition-opacity mr-1">⟡</span>Experience
                        </button>
                        <button onClick={() => setPage('projects')} className={linkClass}>
                            <span className="opacity-0 group-hover:opacity-100 text-lava transition-opacity mr-1">⟡</span>Projects
                        </button>
                        <button onClick={() => scrollTo('contact')} className={linkClass}>
                            <span className="opacity-0 group-hover:opacity-100 text-lava transition-opacity mr-1">⟡</span>Contact
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1Bw-6LkZXdc2J0rBQzQcbRa4VI2YemTdb/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={linkClass + " no-underline"}
                        >
                            <span className="opacity-0 group-hover:opacity-100 text-lava transition-opacity mr-1">⟡</span>Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};
