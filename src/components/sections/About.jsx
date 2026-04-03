import { useEffect, useRef, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const EduCard = ({ logo, name, dates, location, subtitle, accentColor, coursework, courseLabel = "Coursework", activities }) => {
    const [courseOpen, setCourseOpen] = useState(false);
    const [activitiesOpen, setActivitiesOpen] = useState(false);

    return (
        <RevealOnScroll>
            <div className="flex items-start gap-5">
                {/* dot + logo on the line */}
                <div className="relative flex-shrink-0 flex flex-col items-center" style={{ width: "56px" }}>
                    <div className="w-14 h-14 rounded-full border-2 border-white shadow-md overflow-hidden bg-white z-10 flex items-center justify-center">
                        <img src={logo} alt={name} className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* card */}
                <div className="flex-1 bg-white rounded-2xl shadow-md shadow-blue-100 border-l-4 overflow-hidden mb-2"
                    style={{ borderLeftColor: accentColor }}>
                    <div className="px-5 py-4">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-0.5">
                            <h3 className="font-bold text-[#2C4E80] text-lg">{name}</h3>
                            <span className="text-sm text-[#8BB1D1] font-medium bg-[#F0F7FF] px-2 py-0.5 rounded-full">{dates}</span>
                        </div>
                        <p className="text-sm text-[#5D88AA] mb-1">{location}</p>
                        {subtitle && <p className="text-sm text-[#344c67] italic">{subtitle}</p>}
                    </div>

                    {coursework && (
                        <div className="border-t border-[#E8F0F7]">
                            <button
                                onClick={() => setCourseOpen(o => !o)}
                                className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-[#5D88AA] hover:bg-[#F7FAFF] transition-colors"
                            >
                                <span>{courseLabel}</span>
                                <span className={`transition-transform duration-200 ${courseOpen ? 'rotate-180' : ''}`}>▾</span>
                            </button>
                            {courseOpen && (
                                <div className="px-5 pt-3 pb-6">
                                    <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                                        {coursework.map((c, i) => (
                                            <li key={i} className="text-xs text-[#344c67] flex items-start gap-1.5">
                                                <span className="text-[#8BB1D1] mt-0.5">▹</span>{c}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {activities && (
                        <div className="border-t border-[#E8F0F7]">
                            <button
                                onClick={() => setActivitiesOpen(o => !o)}
                                className="w-full flex items-center justify-between px-5 py-3 text-sm font-semibold text-[#5D88AA] hover:bg-[#F7FAFF] transition-colors"
                            >
                                <span>Activities</span>
                                <span className={`transition-transform duration-200 ${activitiesOpen ? 'rotate-180' : ''}`}>▾</span>
                            </button>
                            {activitiesOpen && (
                                <div className="px-5 pt-3 pb-6 space-y-3">
                                    {activities.map((a, i) => (
                                        <div key={i} className="flex items-start justify-between gap-2 text-xs text-[#344c67]">
                                            <div>
                                                <span>{a.name}</span>
                                                {a.role && <span className="text-[#8BB1D1] ml-1">· {a.role}</span>}
                                            </div>
                                            <span className="text-[#8BB1D1] whitespace-nowrap flex-shrink-0">{a.date}</span>
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

    const languages = [
        "Java",
        "Python",
        "Dr.Racket",
        "JavaScript",
        "HTML",
        "CSS"
    ];

    const tools = [
        "React",
        "Node.js",
        "Git",
        "GitHub",
        "Figma",
        "Adobe Photoshop"
    ]

    return (
        <section
            id="about"
            className="bg-white min-h-screen flex flex-col py-20 relative"
            style={{
                clipPath: 'polygon(0 80px, 100% 0, 100% 100%, 0 100%)',
                paddingTop: '7rem',
                marginTop: '-3rem',
            }}
        >
            {/* Scattered AI images — left side */}
            <div className="hidden xl:block pointer-events-none select-none">
                <img src="ai-portrait.png" alt=""
                    className="absolute w-44 opacity-90"
                    style={{ left: '2rem', top: '10rem', rotate: '-6deg',
                        boxShadow: '4px 6px 20px rgba(0,0,0,0.13)',
                        borderRadius: '4px', border: '6px solid white' }} />
                <img src="ai-eye.png" alt=""
                    className="absolute w-36 opacity-85"
                    style={{ left: '3.5rem', top: '26rem', rotate: '4deg',
                        boxShadow: '4px 6px 20px rgba(0,0,0,0.11)',
                        borderRadius: '4px', border: '6px solid white' }} />
            </div>
            {/* Scattered AI images — right side */}
            <div className="hidden xl:block pointer-events-none select-none">
                <img src="ai-snowboard.png" alt=""
                    className="absolute w-40 opacity-90"
                    style={{ right: '2rem', top: '14rem', rotate: '7deg',
                        boxShadow: '4px 6px 20px rgba(0,0,0,0.13)',
                        borderRadius: '4px', border: '6px solid white' }} />
            </div>

            <div className="4xl:max-w-1/2 md:max-w-2/3 md:mx-auto w-full px-4 my-10">
                <RevealOnScroll>
                    <div className="bg-[#F7FAFF] rounded-3xl shadow-md border border-[#E3EEF7] p-7 md:p-10">

                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#5D88AA] text-center tracking-[0.12em]
                            after:content-[''] after:block after:w-40 after:h-[3px]
                            after:bg-[#5D88AA] after:mx-auto after:mt-3">
                            ABOUT ME
                        </h2>

                        <p className="text-base md:text-lg leading-relaxed text-[#344c67] mb-6">
                            I'm a student new to the tech field, deeply curious about the potential of AI and how
                            it continues to reshape industries. With the internet taking decades to spread, and AI
                            achieving similar impact in just a few years, I feel fortunate to be born in such an era.
                            My interest in organizing and connecting systems naturally led me to supply chain, a field
                            that not only sparks my passion but also holds the possibility of letting me see the world.
                        </p>

                        <div className="border-t border-[#D9EAF5] pt-6 flex flex-col md:flex-row gap-6 items-start">
                            <p className="text-base md:text-lg leading-relaxed text-[#344c67] flex-1">
                                Away from the screen, I've been climbing for 9 years and enjoy the chance to experience
                                and capture the outdoors. I also have a passion for mechanical keyboards and creative crafting projects.
                            </p>

                            <div className="rounded-2xl bg-white border border-[#D9EAF5] shadow-sm p-5 w-full md:w-56 flex-shrink-0 hover:-translate-y-1 transition-transform">
                                <h3 className="text-sm font-bold text-[#5D88AA] uppercase tracking-widest mb-3">Personal Tags</h3>
                                <ul className="space-y-2 text-sm text-[#344c67]">
                                    <li className="flex items-center gap-2"><span className="text-[#8BB1D1]">▹</span> Rock Climber</li>
                                    <li className="flex items-center gap-2"><span className="text-[#8BB1D1]">▹</span> Tech Enthusiast</li>
                                    <li className="flex items-center gap-2"><span className="text-[#8BB1D1]">▹</span> Mechanical Keyboard Fan</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </RevealOnScroll>

                {/* Photos */}
                {(() => {
                    const photos = [
                        { src: 'mypic.jpeg',         label: 'me :)',           rot: '-8deg',  tx: '-4px',  ty: '2px'  },
                        { src: 'friends.jpeg',       label: 'friends ♡',       rot: '5deg',   tx: '3px',   ty: '-4px' },
                        { src: 'candypic.jpg',       label: 'candy 🐱',        rot: '-3deg',  tx: '6px',   ty: '6px'  },
                        { src: 'candysleep.JPG',     label: 'candy sleeping',  rot: '10deg',  tx: '-2px',  ty: '3px'  },
                        { src: 'photo-selfie.jpeg',  label: 'just a selfie',   rot: '-6deg',  tx: '4px',   ty: '-2px', pos: 'top' },
                        { src: 'photo-climb.png',    label: 'ice climbing 🧊',  rot: '-4deg',  tx: '2px',   ty: '-6px' },
                    ];
                    return (<>
                        {/* Desktop: polaroid scatter pile */}
                        <div className="hidden md:flex justify-center my-16">
                            <div className="polaroid-pile">
                                {photos.map((p, i) => (
                                    <div key={i} className="polaroid-card" style={{ '--rot': p.rot, '--tx': p.tx, '--ty': p.ty, zIndex: 7 - i }}>
                                        <img src={p.src} alt={p.label} style={{ objectPosition: p.pos || 'center' }} />
                                        <span>{p.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Mobile: swipe carousel */}
                        <div className="md:hidden my-10">
                            <div className="polaroid-carousel">
                                {photos.map((p, i) => (
                                    <div key={i} className="polaroid-carousel-card">
                                        <img src={p.src} alt={p.label} style={{ objectPosition: p.pos || 'center' }} />
                                        <span>{p.label}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-center text-[#8BB1D1] text-xs mt-4 tracking-widest">swipe ›</p>
                        </div>
                    </>);
                })()}

                <h2 className="text-3xl font-bold mt-10 text-[#5D88AA] text-center
                    after:block after:w-25 after:h-[3px]
                    after:bg-[#5D88AA] after:mx-auto after:mt-3">
                    Education
                </h2>

                <div className="relative mt-12 max-w-2xl mx-auto" ref={timelineRef}>
                    {/* scroll-driven vertical line */}
                    <div ref={lineRef} className="absolute left-7 top-0 w-[5px] -translate-x-1/2 bg-[#8BB1D1] z-0" style={{ height: 0 }} />

                    <div className="flex flex-col gap-10">
                        <EduCard
                            logo="NU_logo.png" name="Northeastern University"
                            dates="2024 – Present" location="Boston, MA"
                            subtitle="B.S. Computer Science · Supply Chain Management Minor"
                            accentColor="#5D88AA"
                            coursework={["Algorithms and Data","Object Oriented Design","Global Supply Chain Strategy","Foundations of Data Science","Advanced Linear Algebra","Advanced Mathematical Reasoning","Discrete Structures","Fundamentals of CS I/II","Introduction to Cybersecurity","Supply Chain & Operation Management"]}
                            activities={[
                                { name: "Kaleidoscope (Khoury's Club Council)", role: "Event Coordinator", date: "2025 – Present" },
                                { name: "NU Supply Chain Management Club", date: "2025 – Present" },
                                { name: "OASIS", role: "Web Developer", date: "Jan – Mar 2025" },
                            ]}
                        />
                        <EduCard
                            logo="hebron_logo.png" name="Hebron High School"
                            dates="2020 – 2024" location="Carrollton, TX"
                            subtitle="GPA: 3.86 / 4.0"
                            accentColor="#7BA3C0"
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
                            accentColor="#8BB1D1"
                        />
                        <EduCard
                            logo="bjdl.jpeg" name="East Beijing Road Primary School"
                            dates="2012 – 2018" location="Nanjing, China"
                            accentColor="#A8C5D8"
                        />
                    </div>
                </div>

            </div>
        </section>
    )

}