import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {

    const tagColors2 = {
        React: "bg-sky-100 text-sky-700 hover:bg-sky-200",
        JSX: "bg-sky-100 text-sky-700 hover:bg-sky-200",
        CSS: "bg-sky-100 text-sky-700 hover:bg-sky-200",
        "Spotify API": "bg-sky-100 text-sky-700 hover:bg-sky-200",
        "Google Sheet": "bg-sky-100 text-sky-700 hover:bg-sky-200",

        Java: "bg-[#A7E3DC] text-[#00695C] hover:bg-[#00d4b9]",
        "IntelliJ IDEA": "bg-[#A7E3DC] text-[#00695C] hover:bg-[#00d4b9]",
        MVC: "bg-[#FDE68A] text-[#ff5700] hover:bg-[#ffd700]",
        OOD: "bg-[#FDE68A] text-[#ff5700] hover:bg-[#ffd700]",

        Python: "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
        "VS Code": "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
        n8n: "bg-[#F8BBD0] text-[#C2185B] hover:bg-[#EC407A]/65",

        "MyPlate" :"bg-blue-500/10 text-blue-500 hover:bg-blue-500/20",
        "Google Slides":"bg-[#FDE68A] text-[#ff5700] hover:bg-[#ffd700]",

        "VEX Robotics" :"bg-[#1d346f]/70 text-white hover:bg-[#1d346f]",
        "Engineering Design Process":"bg-[#ffd3bb]/60 text-[#fa857c] hover:bg-[#fa857c]/70 hover:text-white",
    };

    return (
        <section
            id="projects"
            className="bg-[#EEF5FA]min-h-screen flex items-center justify-center py-20"
        >
            <div className="md:max-w-2/3 max-w-full md:mx-auto mx-5 my-10">
                <RevealOnScroll>
                    <h2
                        className="text-4xl md:text-5xl font-bold md:mt-10 mb-8 text-[#2C4E80] text-center
                        after:block after:w-80 after:h-[3px] after:bg-[#2C4E80] after:mx-auto after:mt-5">
                        FEATURED PROJECTS
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <div className="bg-white/60 p-6 rounded-xl border border-slate-200 shadow-sm
                        hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-[rgb(26,43,76)] text-2xl font-bold mb-2 uppercase">
                                Mudle
                            </h3>
                            <p className="text-[#3B4859] mb-3 text-lg">
                                An interactive web-based music guessing game inspired by Wordle and Hangman. Developed by me and other four, the app challenges users to guess the
                                title of a song one letter at a time. Players can guess letters via keyboard input or by clicking on an on-screen keyboard. Incorrect guesses trigger the
                                appearance of a "hangcat" graphic; if the full hangcat appears before the song is guessed, the user loses.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["React", "JSX", "CSS", "Spotify API", "Google Sheet"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition shadow-sm cursor-default 
                                 ${tagColors2[tech] || "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://oasis-2025-mudle.github.io/app/ " 
                                className="text-xl text-[#FF7B54]/90 hover:text-[#2C4E80] transition-colors my-4"
                                target="_blank">
                                    View Project
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/60 p-6 rounded-xl border border-slate-200 shadow-sm
                        hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-[#1A2B4C] text-2xl font-bold mb-2 uppercase">
                                Calendar App
                            </h3>
                            <p className="text-[#3B4859] mb-3 text-lg">
                                A calendar program inspired by Google Calendar, following the Model-View-Controller (MVC) design pattern. It allows users to create, edit, and query events
                                across multiple time zones, with scalable support for event sets and selective field queries. The program features both text-based and graphical interfaces,
                                including scrollable views that display up to ten detailed events at a time.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Java", "IntelliJ IDEA", "MVC", "OOD"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition shadow-sm cursor-default 
                                 ${tagColors2[tech] || "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://github.com/ezixuan27/CS3500-OOD/tree/main/Calendar" 
                                className="text-xl text-[#FF7B54]/90 hover:text-[#2C4E80] transition-colors my-4"
                                target="_blank">
                                    View Project
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/60 p-6 rounded-xl border border-slate-200 shadow-sm
                        hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-[#1A2B4C] text-2xl font-bold mb-2 uppercase">
                                Cybersecurity AI Agents
                            </h3>
                            <p className="text-[#3B4859] mb-3 text-lg">
                                I’m currently assisting with course AI agent research, where I helped develop JustinBot3000, an AI agent that delivers real-time course-specific hints
                                and answers restricted to approved materials. Helped design n8n workflows integrating Google Drive, Pinecone vector store, and OpenAI embeddings to enable
                                RAG, and automated Q&A through Discord, supporting over student inquiries each week. Alongside this project,
                                I’m currently working on Elicitation Simulation, where it simulates real human conversations to bring the awareness 
                                of social and prompt engineering.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "VS Code", "n8n"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition shadow-sm cursor-default 
                                 ${tagColors2[tech] || "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>


                            <div className="flex justify-between items-center">
                                <a href="https://github.com/JoshuaGoldberg/JustinBot" 
                                className="text-xl text-[#FF7B54]/90 hover:text-[#2C4E80] transition-colors my-4"
                                target="_blank">
                                    View Project
                                </a>
                            </div>
                        </div>

                    <div className="bg-white/60 p-6 rounded-xl border border-slate-200 shadow-sm
                        hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-[#1A2B4C] text-2xl font-bold mb-2 uppercase">
                                Sports Nutrition - FCCLA
                            </h3>
                            <p className="text-[#3B4859] mb-3 text-lg">
                                I competed in FCCLA’s Sports Nutrition STAR Event in a team of three, designing a five-day nutrition/hydration plan 
                                for a 16-year-old football running back with low iron (targeting 160→180 lb with ~3,694 kcal, 200 g protein, and ~1 
                                gallon fluids per day) and brought a mannequin to demonstrate portion sizes and fueling. Presented with visuals and 
                                the mannequin, the project placed 4th at regionals and advanced us to State Finalist. 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["MyPlate", "Google Slides"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition shadow-sm cursor-default 
                                 ${tagColors2[tech] || "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://docs.google.com/presentation/d/137l1IDLxQ-HXIf7DZqgD6DPZ1YWjGK7UsX_5IXAQCRE/edit?usp=sharing" 
                                className="text-xl text-[#FF7B54]/90 hover:text-[#2C4E80] transition-colors my-4"
                                target="_blank">
                                    View Project
                                </a>
                            </div>
                        </div>

                        <div className="bg-white/60 p-6 rounded-xl border border-slate-200 shadow-sm
                        hover:-translate-y-1 hover:border-blue-500/30 hober:shadow-[0?2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                            <h3 className="text-[#1A2B4C] text-2xl font-bold mb-2 uppercase">
                                Engineering Notebook
                            </h3>
                            <p className="text-[#3B4859] mb-3 text-lg">
                                As the team captain and Engineering Notebook manager, I documented the detailed process of our robot’s design, 
                                team management, competition strategies, and code evolution over time. Our notebook earned the Innovate Award 
                                and Excellence Award at the Wylie High School Tournament and For The Love Of Bots Tournament. 
                                As a team, we qualified for the 2024 VEX World Championship held in Dallas, TX. 
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["VEX Robotics", "Engineering Design Process"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className={`py-1 px-3 rounded-full text-sm transition shadow-sm cursor-default 
                                 ${tagColors2[tech] || "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center">
                                <a href="https://drive.google.com/file/d/1eTzdu62W11yHGcf7IJdqPsAeJP8xwc0m/view?usp=sharing" 
                                className="text-xl text-[#FF7B54]/90 hover:text-[#2C4E80] transition-colors my-4"
                                target="_blank">
                                    View Notebook
                                </a>
                            </div>
                        </div>
                    
                    </div>


                </RevealOnScroll>
            </div>

        </section>
    )
}