import { RevealOnScroll } from "../RevealOnScroll";

const projects = [
    {
        title: "Cybersecurity AI Agents",
        meta: "2025 · Research · Northeastern",
        tags: ["Python", "VS Code", "n8n", "RAG", "Discord Bot"],
        description:
            "As a research assistant on Northeastern's cybersecurity AI agent team, I helped develop JustinBot3000 — an AI agent that delivers real-time, course-restricted hints and answers via Discord. I built n8n workflows integrating Google Drive, Pinecone, and OpenAI embeddings for RAG, automating responses to 100+ weekly student inquiries. I also co-authored Elicitation Simulation, a study that uses LLM agents in classroom settings to introduce students to social and prompt engineering — published in the Journal of The Colloquium for Information Systems Security Education (CISSE).",
        url: "https://journal.cisse.info/jcisse/article/view/220",
    },
    {
        title: "Mudle",
        meta: "2025 · Team of 5 · OASIS",
        tags: ["React", "JSX", "CSS", "Spotify API", "Google Sheet"],
        description:
            "An interactive web-based music guessing game inspired by Wordle and Hangman. Developed by me and other four, the app challenges users to guess the title of a song one letter at a time. Players can guess letters via keyboard input or by clicking on an on-screen keyboard. Incorrect guesses trigger the appearance of a \"hangcat\" graphic; if the full hangcat appears before the song is guessed, the user loses.",
        url: "https://oasis-2025-mudle.github.io/app/",
    },
    {
        title: "Calendar App",
        meta: "2024 · Pair · CS 3500",
        tags: ["Java", "IntelliJ IDEA", "MVC", "OOD"],
        description:
            "A calendar program inspired by Google Calendar, following the Model-View-Controller (MVC) design pattern. It allows users to create, edit, and query events across multiple time zones, with scalable support for event sets and selective field queries. The program features both text-based and graphical interfaces, including scrollable views that display up to ten detailed events at a time.",
        url: "https://github.com/ezixuan27/CS3500-OOD/tree/main/Calendar",
    },
    {
        title: "Engineering Notebook",
        meta: "2023 · Team Captain · VEX 87867D/V",
        tags: ["VEX Robotics", "Engineering Design Process"],
        description:
            "As the team captain and Engineering Notebook manager, I documented the detailed process of our robot's design, team management, competition strategies, and code evolution over time. Our notebook earned the Innovate Award and Excellence Award at the Wylie High School Tournament and For The Love Of Bots Tournament. As a team, we qualified for the 2024 VEX World Championship held in Dallas, TX.",
        url: "https://drive.google.com/file/d/1eTzdu62W11yHGcf7IJdqPsAeJP8xwc0m/view?usp=sharing",
    },
    {
        title: "Sports Nutrition — FCCLA",
        meta: "2023 · Team of 3 · State Finalist",
        tags: ["MyPlate", "Google Slides"],
        description:
            "I competed in FCCLA's Sports Nutrition STAR Event in a team of three, designing a five-day nutrition/hydration plan for a 16-year-old football running back with low iron (targeting 160→180 lb with ~3,694 kcal, 200 g protein, and ~1 gallon fluids per day) and brought a mannequin to demonstrate portion sizes and fueling. Presented with visuals and the mannequin, the project placed 4th at regionals and advanced us to State Finalist.",
        url: "https://docs.google.com/presentation/d/137l1IDLxQ-HXIf7DZqgD6DPZ1YWjGK7UsX_5IXAQCRE/edit?usp=sharing",
    },
];

export const Projects = ({ setPage }) => {
    return (
        <section
            id="projects"
            className="bg-paper text-ink min-h-screen pt-28 pb-24"
        >
            <div className="max-w-5xl mx-auto px-6 md:px-12">

                {/* back link */}
                {setPage && (
                    <button
                        onClick={() => { window.scrollTo(0, 0); setPage('home'); }}
                        className="font-mono text-[10px] tracking-[0.25em] uppercase text-ink/60 hover:text-lava transition-colors mb-10 bg-transparent border-none cursor-pointer flex items-center gap-2"
                    >
                        <span>←</span> Back to Index
                    </button>
                )}

                {/* header */}
                <RevealOnScroll>
                    <div className="mb-16 md:mb-24">
                        <div className="flex items-baseline gap-6 mb-6">
                            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-lava">Selected Work</span>
                            <span className="flex-1 h-px bg-ink/15"></span>
                        </div>
                        <h1 className="font-display font-light text-ink leading-[0.95] tracking-[-0.02em]"
                            style={{ fontSize: 'clamp(48px, 7vw, 120px)' }}>
                            Things I've <span className="italic text-lava">built.</span>
                        </h1>
                    </div>
                </RevealOnScroll>

                {/* project rows */}
                <div style={{ borderColor: 'var(--color-hairline)' }}>
                    {projects.map((p, i) => (
                        <RevealOnScroll key={p.title}>
                            <div
                                className="py-10 md:py-14"
                                style={{ borderTop: '1px solid var(--color-hairline)' }}
                            >
                                <div className="grid grid-cols-[60px_1fr] md:grid-cols-[110px_1fr] gap-4 md:gap-10">
                                    {/* huge number */}
                                    <span
                                        className="font-display font-light text-lava leading-none origin-left"
                                        style={{ fontSize: 'clamp(48px, 6vw, 96px)' }}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    {/* content */}
                                    <div>
                                        <h2 className="font-display font-normal text-ink leading-tight mb-2"
                                            style={{ fontSize: 'clamp(28px, 3.4vw, 48px)' }}>
                                            {p.title}
                                        </h2>
                                        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink/60 mb-5">
                                            {p.meta}
                                        </div>
                                        <p className="text-base md:text-lg leading-relaxed text-ink/85 mb-6 max-w-3xl">
                                            {p.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {p.tags.map((t) => (
                                                <span
                                                    key={t}
                                                    className="font-mono text-[10px] tracking-[0.18em] uppercase px-3 py-1.5 border border-ink/70 text-ink/80"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                        <a
                                            href={p.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-lava hover:gap-3 transition-all relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-lava after:transition-all after:duration-300 hover:after:w-full"
                                        >
                                            View Project <span className="transition-transform group-hover:translate-x-1">→</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </RevealOnScroll>
                    ))}
                </div>

            </div>
        </section>
    );
};
