import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const EduCard = ({ logo, name, dates, location, subtitle, coursework, courseLabel = "Coursework", activities }) => {
    const [courseOpen, setCourseOpen] = useState(false);
    const [activitiesOpen, setActivitiesOpen] = useState(false);

    return (
        <RevealOnScroll>
            <div className="flex items-start gap-5">
                {/* logo node — no ring, just the logo */}
                <div className="relative flex-shrink-0 flex items-center justify-center bg-paper" style={{ width: "56px", height: "56px" }}>
                    <img src={logo} alt={name} className="w-full h-full object-contain" />
                </div>

                {/* content (no card, just hairline left) */}
                <div className="flex-1 pl-5 border-l border-ink/10">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                        <h3 className="font-display font-normal text-ink text-2xl leading-tight">{name}</h3>
                        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-lava">{dates}</span>
                    </div>
                    <p className="text-sm text-ink/60 mb-0.5">{location}</p>
                    {subtitle && <p className="text-sm font-display italic text-ink/75">{subtitle}</p>}

                    {coursework && (
                        <div className="mt-3 border-t border-ink/10">
                            <button
                                onClick={() => setCourseOpen(o => !o)}
                                className="w-full flex items-center justify-between py-2.5 font-mono text-[10px] tracking-[0.2em] uppercase text-ink/70 hover:text-lava transition-colors bg-transparent border-none cursor-pointer"
                            >
                                <span>{courseLabel}</span>
                                <span className={`transition-transform duration-200 ${courseOpen ? 'rotate-180' : ''}`}>▾</span>
                            </button>
                            {courseOpen && (
                                <div className="pb-4">
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                        {coursework.map((c, i) => (
                                            <li key={i} className="text-xs text-ink/80 flex items-start gap-2">
                                                <span className="text-lava mt-0.5">—</span>{c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {activities && (
                        <div className="border-t border-ink/10">
                            <button
                                onClick={() => setActivitiesOpen(o => !o)}
                                className="w-full flex items-center justify-between py-2.5 font-mono text-[10px] tracking-[0.2em] uppercase text-ink/70 hover:text-lava transition-colors bg-transparent border-none cursor-pointer"
                            >
                                <span>Activities</span>
                                <span className={`transition-transform duration-200 ${activitiesOpen ? 'rotate-180' : ''}`}>▾</span>
                            </button>
                            {activitiesOpen && (
                                <div className="pb-4 space-y-2">
                                    {activities.map((a, i) => (
                                        <div key={i} className="flex items-start justify-between gap-3 text-xs text-ink/80">
                                            <div>
                                                <span>{a.name}</span>
                                                {a.role && <span className="text-ink/50 ml-1.5 italic font-display">· {a.role}</span>}
                                            </div>
                                            <span className="text-ink/50 whitespace-nowrap flex-shrink-0 font-mono tracking-[0.1em]">{a.date}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </RevealOnScroll>
    );
};

export const About = () => {
    const timelineRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const timeline = timelineRef.current;
            const line = lineRef.current;
            if (!timeline || !line) return;
            const rect = timeline.getBoundingClientRect();
            const scrolled = window.innerHeight - rect.top;
            const progress = Math.min(Math.max(scrolled / timeline.offsetHeight, 0), 1);
            line.style.height = (progress * timeline.offsetHeight) + "px";
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* section divider */}
            <div className="section-divider">
                <span className="num">01</span>
                <span>About</span>
                <span className="line"></span>
            </div>

            <section
                id="about"
                className="bg-paper text-ink relative overflow-hidden"
            >
                {/* Scattered AI/photo cards — kept, restyled cream */}
                <div className="hidden xl:block pointer-events-none select-none">
                    <img src="ai-portrait.png" alt=""
                        className="absolute w-40 opacity-95"
                        style={{ left: '2rem', top: '8rem', rotate: '-6deg',
                            boxShadow: '4px 6px 24px rgba(10,26,47,0.15)',
                            background: 'var(--color-cream)', padding: '8px 8px 36px',
                            filter: 'contrast(1.05) saturate(0.92) sepia(0.04)' }} />
                    <img src="ai-eye.png" alt=""
                        className="absolute w-32 opacity-90"
                        style={{ left: '3.5rem', top: '24rem', rotate: '4deg',
                            boxShadow: '4px 6px 24px rgba(10,26,47,0.13)',
                            background: 'var(--color-cream)', padding: '8px 8px 36px',
                            filter: 'contrast(1.05) saturate(0.92) sepia(0.04)' }} />
                </div>
                <div className="hidden xl:block pointer-events-none select-none">
                    <img src="ai-snowboard.png" alt=""
                        className="absolute w-36 opacity-95"
                        style={{ right: '2rem', top: '12rem', rotate: '7deg',
                            boxShadow: '4px 6px 24px rgba(10,26,47,0.15)',
                            background: 'var(--color-cream)', padding: '8px 8px 36px',
                            filter: 'contrast(1.05) saturate(0.92) sepia(0.04)' }} />
                    <img src="photo-climb2.JPG" alt=""
                        className="absolute w-32 opacity-95"
                        style={{ right: '3rem', top: '28rem', rotate: '-5deg',
                            boxShadow: '4px 6px 24px rgba(10,26,47,0.15)',
                            background: 'var(--color-cream)', padding: '8px 8px 36px',
                            filter: 'contrast(1.05) saturate(0.92) sepia(0.04)' }} />
                </div>

                {/* Main content */}
                <div className="max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-32">

                    {/* Two-column intro */}
                    <RevealOnScroll>
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
                            <div>
                                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-lava block mb-5">
                                    About
                                </span>
                                <h2 className="font-display font-light text-ink leading-[0.95] tracking-[-0.02em]"
                                    style={{ fontSize: 'clamp(40px, 5.6vw, 88px)' }}>
                                    A student,<br />
                                    a <span className="italic text-lava">climber,</span><br />
                                    a curious mind.
                                </h2>
                            </div>
                            <div>
                                <p className="font-display font-light text-ink text-xl md:text-2xl leading-snug mb-6">
                                    I'm a student new to the tech field, deeply curious about the potential of <span className="italic text-lava">AI</span> and how it continues to reshape industries. With the internet taking decades to spread, and AI achieving similar impact in just a few years, I feel fortunate to be born in such an era.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed text-ink/80 mb-6">
                                    My interest in organizing and connecting systems naturally led me to supply chain — a field that not only sparks my passion but holds the possibility of letting me see the world.
                                </p>
                                <p className="text-base md:text-lg leading-relaxed text-ink/80">
                                    Away from the screen, I've been climbing for nine years and enjoy the chance to experience and capture the outdoors. I also have a passion for mechanical keyboards and creative crafting projects.
                                </p>

                                <div className="flex flex-wrap gap-2 mt-8">
                                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase px-3 py-2 border border-ink text-ink">Rock Climber</span>
                                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase px-3 py-2 border border-ink text-ink">Tech Enthusiast</span>
                                    <span className="font-mono text-[10px] tracking-[0.18em] uppercase px-3 py-2 border border-ink text-ink">Keyboard Fan</span>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>

                    {/* Polaroid pile (luxe-ified via index.css) */}
                    {(() => {
                        const photos = [
                            { src: 'mypic.jpeg',         label: 'me :)',           rot: '-8deg',  tx: '-4px',  ty: '2px'  },
                            { src: 'friends.jpeg',       label: 'friends ♡',       rot: '5deg',   tx: '3px',   ty: '-4px' },
                            { src: 'candypic.jpg',       label: 'Candy',           rot: '-3deg',  tx: '6px',   ty: '6px'  },
                            { src: 'candysleep.JPG',     label: 'Candy sleeping',  rot: '10deg',  tx: '-2px',  ty: '3px'  },
                            { src: 'photo-selfie.jpeg',  label: 'another me',      rot: '-6deg',  tx: '4px',   ty: '-2px', pos: 'top' },
                            { src: 'photo-climb.png',    label: 'ice climbing',    rot: '-4deg',  tx: '2px',   ty: '-6px' },
                        ];
                        return (<>
                            <div className="hidden md:flex justify-center mt-32 mb-20">
                                <div className="polaroid-pile">
                                    {photos.map((p, i) => (
                                        <div key={i} className="polaroid-card" style={{ '--rot': p.rot, '--tx': p.tx, '--ty': p.ty, zIndex: 7 - i }}>
                                            <img src={p.src} alt={p.label} style={{ objectPosition: p.pos || 'center' }}
                                                draggable={false}
                                                onContextMenu={(e) => e.preventDefault()} />
                                            <span>{p.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="md:hidden my-12">
                                <div className="polaroid-carousel">
                                    {photos.map((p, i) => (
                                        <div key={i} className="polaroid-carousel-card">
                                            <img src={p.src} alt={p.label} style={{ objectPosition: p.pos || 'center' }}
                                                draggable={false}
                                                onContextMenu={(e) => e.preventDefault()} />
                                            <span>{p.label}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-center text-ink/40 text-[10px] font-mono mt-3 tracking-[0.3em] uppercase">swipe ›</p>
                            </div>
                        </>);
                    })()}

                    {/* Education */}
                    <div className="mt-16 md:mt-24">
                        <RevealOnScroll>
                            <div className="flex items-baseline gap-6 mb-12">
                                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-lava">02 — Education</span>
                                <span className="flex-1 h-px bg-ink/15"></span>
                            </div>
                            <h2 className="font-display font-light text-ink leading-[0.95] tracking-[-0.02em] mb-12"
                                style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
                                Where I've <span className="italic text-lava">studied.</span>
                            </h2>
                        </RevealOnScroll>

                        <div className="relative max-w-3xl" ref={timelineRef}>
                            <div className="absolute left-7 top-0 w-px bg-ink/15 z-0" style={{ height: '100%' }} />
                            <div ref={lineRef} className="absolute left-7 top-0 w-px bg-lava z-0" style={{ height: 0 }} />

                            <div className="flex flex-col gap-10 relative">
                                <EduCard
                                    logo="NU_logo.png" name="Northeastern University"
                                    dates="2024 – Present" location="Boston, MA"
                                    subtitle="B.S. Computer Science · Supply Chain Management Minor"
                                    coursework={["Algorithms and Data","Object Oriented Design","Global Supply Chain Strategy","Foundations of Data Science","Advanced Linear Algebra","Advanced Mathematical Reasoning","Discrete Structures","Fundamentals of CS I/II","Introduction to Cybersecurity","Supply Chain & Operation Management","Introduction to Database Design"]}
                                    activities={[
                                        { name: "Kaleidoscope (Khoury's Club Council)", role: "Events & Operations", date: "2025 – Present" },
                                        { name: "NU Supply Chain Management Club", date: "2025 – Present" },
                                        { name: "OASIS", role: "Web Developer", date: "Jan – Mar 2025" },
                                    ]}
                                />
                                <EduCard
                                    logo="hebron_logo.png" name="Hebron High School"
                                    dates="2020 – 2024" location="Carrollton, TX"
                                    subtitle="GPA: 3.86 / 4.0"
                                    coursework={["Calculus BC","Computer Science A","Macroeconomics","US Government","Physics 1","Physics C","World History","Human Geography","Psychology","Chinese"]}
                                    courseLabel="AP Courses"
                                    activities={[
                                        { name: "Family, Career & Community Leaders of America", role: "President", date: "2021 – 2024" },
                                        { name: "Girls Who Code", role: "Founder / President", date: "2023 – 2024" },
                                        { name: "VEX Robotics Team 87867D/V", role: "Captain / Notebook Manager", date: "2023 – 2024" },
                                        { name: "Rays Of Light Volunteer", date: "2020 – 2024" },
                                        { name: "Team Texas Rock Climbing", date: "2021 – 2023" },
                                        { name: "Team Lone Star Rock Climbing", date: "2019 – 2021" },
                                    ]}
                                />
                                <EduCard
                                    logo="pca.png" name="Prestonwood Christian Academy"
                                    dates="2018 – 2020" location="Frisco, TX"
                                />
                                <EduCard
                                    logo="bjdl.jpeg" name="East Beijing Road Primary School"
                                    dates="2012 – 2018" location="Nanjing, China"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};
