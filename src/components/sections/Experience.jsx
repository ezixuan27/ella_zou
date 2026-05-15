import { useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const experiences = [
    {
        role: "Enterprise Resiliency & Risk Intelligence Intern",
        company: "Wellington Management Company",
        date: "Dec 2025 – Present",
        location: "Boston, MA",
        bullets: [
            "Built a multi-agent system for risk incident Q&A, querying Snowflake databases to surface trends.",
            "Automated email parsing to populate the request tracker, cutting manual data entry by 50%+.",
            "Responded to RFPs on IT and risk topics, communicating the firm's security frameworks to clients.",
        ],
    },
    {
        role: "Research Assistant",
        company: "Course AI Agent Research  ·  Python, n8n",
        date: "Jun 2025 – Present",
        location: "Boston, MA",
        bullets: [
            "Developed AI agents for student Q&A and elicitation simulation using RAG with Pinecone & OpenAI.",
            "Automated Discord-based support handling 100+ weekly inquiries via n8n workflows.",
        ],
    },
    {
        role: "Peer Tutor",
        company: "Knack",
        date: "Jan 2025 – Present",
        location: "Boston, MA",
        bullets: [
            "Courses: Fundamentals of CS 1 · Discrete Structures · Supply Chain Operations · Foundations of Data Science",
            "Supported exam prep and concept walkthroughs, earning a 5/5 student rating.",
        ],
    },
    {
        role: "Business Analyst Intern",
        company: "Azores Networks  ·  Excel, Jiandaoyun",
        date: "Jul 2025 – Aug 2025",
        location: "Richardson, TX",
        bullets: [
            "Deployed product-tracking workflows and dashboards to monitor R&D progress and visualize client data.",
        ],
    },
];

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
        <section className="bg-paper text-ink min-h-screen pt-28 pb-24">
            <div className="max-w-4xl mx-auto px-6 md:px-12">

                <button
                    onClick={() => { window.scrollTo(0, 0); setPage('home'); }}
                    className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 hover:text-lava transition-colors mb-10 bg-transparent border-none cursor-pointer flex items-center gap-2"
                >
                    <span>←</span> Back to Index
                </button>

                <RevealOnScroll>
                    <div className="mb-16 md:mb-24">
                        <div className="flex items-baseline gap-6 mb-6">
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-lava">Experience</span>
                            <span className="flex-1 h-px bg-ink/15"></span>
                        </div>
                        <h1 className="font-display font-light text-ink leading-[0.95] tracking-[-0.02em]"
                            style={{ fontSize: 'clamp(48px, 7vw, 120px)' }}>
                            Where I've <span className="italic text-lava">worked.</span>
                        </h1>
                    </div>
                </RevealOnScroll>

                <div className="relative" ref={timelineRef}>
                    {/* vertical lines */}
                    <div className="absolute left-2 top-0 w-px bg-ink/15" style={{ height: '100%' }} />
                    <div ref={lineRef} className="absolute left-2 top-0 w-px bg-ink" style={{ height: 0 }} />

                    <div className="flex flex-col">
                        {experiences.map((exp, i) => (
                            <div key={i} className={`relative pl-10 md:pl-14 ${i > 0 ? 'pt-10 md:pt-12 border-t' : 'pt-2'} pb-10 md:pb-12`}
                                 style={{ borderColor: 'var(--color-hairline)' }}>
                                {/* square node */}
                                <div className="absolute left-[2px] top-3 w-2 h-2 bg-ink" />

                                <RevealOnScroll direction="left">
                                    <div className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-3 md:gap-8">
                                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-lava md:pt-2">
                                            {exp.date.toUpperCase()}
                                        </div>
                                        <div>
                                            <h3 className="font-display font-normal text-ink leading-tight mb-1"
                                                style={{ fontSize: 'clamp(22px, 2.4vw, 32px)' }}>
                                                {exp.role}
                                            </h3>
                                            <p className="font-display italic text-ink/70 text-base md:text-lg mb-1">
                                                {exp.company}
                                            </p>
                                            {exp.location && (
                                                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-ink/50 mb-4">
                                                    {exp.location}
                                                </p>
                                            )}
                                            <ul className="space-y-2 mt-4">
                                                {exp.bullets.map((b, j) => (
                                                    <li key={j} className="text-ink/85 text-base flex items-start gap-3">
                                                        <span className="text-lava mt-1.5 flex-shrink-0">—</span>
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </RevealOnScroll>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
