import { useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const experiences = [
    {
        role: "Software Engineering Intern",
        company: "Company Name",
        date: "Jun – Aug 2025",
        bullets: [
            "Placeholder: describe your key contribution or project here.",
            "Placeholder: mention a technology or tool you used.",
            "Placeholder: quantify impact if possible (e.g. improved X by Y%).",
        ],
    },
    {
        role: "Research Assistant",
        company: "Organization Name",
        date: "Jan – May 2025",
        bullets: [
            "Placeholder: describe the research focus or problem you worked on.",
            "Placeholder: mention any tools, datasets, or methods used.",
            "Placeholder: note any publications, presentations, or outcomes.",
        ],
    },
    {
        role: "Teaching Assistant",
        company: "Northeastern University",
        date: "Sep – Dec 2024",
        bullets: [
            "Placeholder: describe the course and your responsibilities.",
            "Placeholder: mention office hours, grading, or lab support.",
            "Placeholder: note student count or any notable contributions.",
        ],
    },
];

const dotColors = ["#5D88AA", "#8BB1D1", "#2C4E80"];

export const Experience = ({ setPage }) => {
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
            line.style.height = progress * timeline.offsetHeight + "px";
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section className="bg-[#f4f8fe] min-h-screen pt-24 pb-20">
            <div className="max-w-2xl mx-auto px-6">

                <button
                    onClick={() => { window.scrollTo(0, 0); setPage('home'); }}
                    className="text-[#5D88AA] hover:text-[#2C4E80] transition-colors mb-8 flex items-center gap-1 text-sm"
                >
                    ← Back to Home
                </button>

                <RevealOnScroll>
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-[#2C4E80] text-center tracking-[0.12em]
                        after:content-[''] after:block after:w-40 after:h-[3px]
                        after:bg-[#5D88AA] after:mx-auto after:mt-3">
                        EXPERIENCE
                    </h2>
                </RevealOnScroll>

                <div className="relative" ref={timelineRef}>
                    {/* vertical line */}
                    <div
                        ref={lineRef}
                        className="absolute left-4 top-0 w-[3px] bg-[#8BB1D1]"
                        style={{ height: 0 }}
                    />

                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, i) => (
                            <div key={i} className="flex items-start gap-6">
                                {/* dot */}
                                <div
                                    className="relative z-10 flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-md mt-1"
                                    style={{ backgroundColor: dotColors[i] }}
                                >
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>

                                {/* card */}
                                <div className="flex-1 min-w-0">
                                <RevealOnScroll direction="left">
                                    <div className="w-full bg-white rounded-2xl border border-[#8BB1D1] shadow-xl shadow-blue-100 p-6 hover:-translate-y-1 transition-transform">
                                        <div className="flex flex-wrap items-baseline gap-3 mb-1">
                                            <h3 className="text-xl font-bold text-[#2C4E80]">{exp.role}</h3>
                                            <span className="text-[#5D88AA] text-sm italic">{exp.date}</span>
                                        </div>
                                        <p className="text-[#5D88AA] font-medium mb-3">{exp.company}</p>
                                        <ul className="space-y-1.5">
                                            {exp.bullets.map((b, j) => (
                                                <li key={j} className="text-[#344c67] text-sm flex items-start gap-2">
                                                    <span className="text-[#8BB1D1] mt-0.5">▹</span>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </RevealOnScroll>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
