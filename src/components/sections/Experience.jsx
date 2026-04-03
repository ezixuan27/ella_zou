import { useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const experiences = [
    {
        icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
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
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
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
        icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222",
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
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        role: "Business Analyst Intern",
        company: "Azores Networks  ·  Excel, Jiandaoyun",
        date: "Jul 2025 – Aug 2025",
        location: "Richardson, TX",
        bullets: [
            "Deployed product-tracking workflows and dashboards to monitor R&D progress and visualize client data.",
        ],
    },
];

const dotColors = ["#5D88AA", "#8BB1D1", "#2C4E80", "#7BA3C0"];

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
                    className="text-[#5D88AA] hover:text-[#2C4E80] transition-colors mb-8 flex items-center gap-1 text-sm group"
                >
                        <span className="relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 group-hover:after:w-4/5">
                            ← Back to Home
                        </span>
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
                                        <path strokeLinecap="round" strokeLinejoin="round" d={exp.icon} />
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
                                        <div className="flex flex-wrap items-center gap-2 mb-3">
                                            <p className="text-[#5D88AA] font-medium">{exp.company}</p>
                                            {exp.location && <span className="text-[#8BB1D1] text-xs">· {exp.location}</span>}
                                        </div>
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
