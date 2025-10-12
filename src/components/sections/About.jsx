import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

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
            className="bg-white min-h-screen flex flex-col py-20"
        >

            <div className="4xl:max-w-1/2 md:max-w-2/3 md:mx-auto w-full px-4 my-10">
                <RevealOnScroll>

                    <div className="rounded-lg text-lg md:text-xl border-white/10 border
                    rounded-3xl bg-[#F7FAFF] shadow-md p-2 md:p-12">
                        <h2
                        className="text-4xl md:text-5xl font-bold mb-8 text-[#5D88AA] text-center 
                                    relative after:content-[''] after:block after:w-40 after:h-[3px] 
                                    after:bg-[#5D88AA] after:mx-auto after:mt-3">
                        ABOUT ME
                    </h2>
                        <p className="text-[#044568]">
                            I'm a student new to the tech field, deeply curious about the potential of AI and how
                            it continues to reshape industries. With the internet taking decades to spread, and AI
                            achieving similar impact in just a few years, I feel fortunate to be born in such an era.
                            My interest in organizing and connecting systems naturally led me to supply chain, a field
                            that not only sparks my passion but also holds the possibility of letting me see the world.
                        </p>

                        <div>
                            <div className="flex flex-row gap-5 items-start pt-4">

                                <div>
                                    <p className="text-xl leading-8 text-[#344c67]">
                                        Away from the screen, I've been climbing for 9 years and enjoy the chance to experience
                                        and capture the outdoors. I also have a passion for mechanical keyboards and creative crafting projects.
                                    </p>
                                </div>

                                <div className="flex min-w-[250px] rounded-xl bg-[#FFFFFF] shadow shadow-md p-4 h-fit hidden md:block
                                hover hover:-translate-y-1">
                                    <h3 className="text-lg font-semibold text-[#5D88AA] mb-3">
                                        PERSONAL TAGS
                                    </h3>
                                    <ul className="text-sm list-disc list-inside space-y-2 text-[#344c67] marker:text-[#344c67]">
                                        <li>Rock Climber</li>
                                        <li>Tech Enthusiast</li>
                                        <li>Mechenical Keyboard Fan</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </RevealOnScroll>

                <div className="flex flex-col space-y-4 md:hidden w-full max-w-[400] my-5 gap-8">
                    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                        <img
                            src="mypic.jpeg"
                            alt="Me"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-100 hover:opacity-0"
                        />
                        <img
                            src="friends.jpeg"
                            alt="Me and Friends"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-100"
                        />
                    </div>

                    <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
                        <img
                            src="candypic.jpg"
                            alt="Candy"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-100 hover:opacity-0"
                        />
                        <img
                            src="candysleep.JPG"
                            alt="Candy Sleep"
                            className="absolute inset-0 w-full h-full object-cover rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-100"
                        />
                    </div>
                </div>

                <div className="hidden md:flex flex-1 mx-auto flex-row md:space-x-4 items-center justify-center my-10">

                    <div className="flex flex-1 relative w-2/5 h-150 rounded-xl overflow-hidden">
                        <img
                            src="mypic.jpeg"
                            alt="Me"
                            className="absolute inset-0 w-full h-full md:h-150 md:aspect-square object-cover rounded-xl transition-opacity duration-500 opacity-100 hover:opacity-0"
                        />
                        <img
                            src="friends.jpeg"
                            alt="Me and Friends"
                            className="absolute inset-0 w-full h-full md:h-150 md:aspect-square object-cover rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-100"
                        />
                    </div>

                    <div className="flex flex-1 relative w-2/5 h-150 rounded-xl overflow-hidden">
                        <img
                            src="candypic.jpg"
                            alt="Candy"
                            className="absolute inset-0 w-full h-full md:h-150 md:aspect-square object-cover rounded-xl transition-opacity duration-500 opacity-100 hover:opacity-0"
                        />
                        <img
                            src="candysleep.JPG"
                            alt="Candy Sleep"
                            className="absolute inset-0 w-full h-full object-cover md:h-150 md:aspect-square rounded-xl transition-opacity duration-500 opacity-0 hover:opacity-100"
                        />
                    </div>
                </div>

                <h2 className="text-3xl font-bold mt-10 text-[#5D88AA] text-center
                after:block after:w-25 after:h-[3px] 
             after:bg-[#5D88AA] after:mx-auto after:mt-3">
                    Education
                </h2>

                <RevealOnScroll>
                    <div className="timeline mt-8 md:mx-auto">

                        <RevealOnScroll>
                            <div className="container left">
                                <img src="NU_logo.png"
                                    className="bg-white " />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Northeastern University</h2>
                                    <small className="text-[#344c67]">2024 - present, Boston/MA <br />
                                        Computer Science Major & Supply Chain Management Minor
                                    </small>
                                    <div className="text-[#344c67]">
                                        <p className="font-bold">Relevant Coursework: </p>
                                        <ul className="list-none list-inside space-y-1.5 columns-2">
                                            <li className="before:content-['▹']"> Algorithms and Data</li>
                                            <li className="before:content-['▹']"> Object Oriented Design</li>
                                            <li className="before:content-['▹']"> Global Supply Chain Strategy</li>
                                            <li className="before:content-['▹']"> Foundations of Data Science</li>
                                            <li className="before:content-['▹']"> Advanced Linear Algebra</li>
                                            <li className="before:content-['▹']"> Advanced Mathematical Reasoning</li>
                                            <li className="before:content-['▹']"> Discrete Structures</li>
                                            <li className="before:content-['▹']"> Fundamentals of Computer Science I/II</li>
                                            <li className="before:content-['▹']"> Introduction to Cybersecurity</li>
                                            <li className="before:content-['▹']"> Supply Chain and Operation Management</li>
                                        </ul>
                                    </div>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container left">
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <p className="text-black font-bold">Extracurriculars: </p>
                                    <ul className="text-[#344c67]">
                                        <li className="flex items-start">
                                            <div className="flex flex-col">
                                                <span>♣️ Kaleidoscope (Khoury's Club Council)</span>
                                                <span className="pl-6 text-sm">- Event Coordinator</span>
                                            </div>
                                            <span className="ml-auto">2025 – Present</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex flex-col">
                                                <span>♣️ NU Supply Chain Management Club</span>
                                            </div>
                                            <span className="ml-auto">2025 - Present</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex flex-col">
                                                <span>♣️ OASIS</span>
                                                <span className="pl-6 text-sm">- Web Developer</span>
                                            </div>
                                            <span className="ml-auto">Jan - Mar, 2025</span>
                                        </li>
                                    </ul>
                                    <span className="arrow-top"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container right">
                                <img src="hebron_logo.png"
                                    className="bg-white " />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Hebron High School</h2>
                                    <small className="text-[#344c67]">2020 - 2024, Carrollton/TX <br />GPA: 3.86/4.0</small>
                                    <div className="text-[#344c67]">
                                        <p className="font-bold">AP Courses Taken: </p>
                                        <ul className="list-none list-inside space-y-1.5 columns-2">
                                            <li className="before:content-['▹']"> Calculus BC</li>
                                            <li className="before:content-['▹']"> Computer Science A</li>
                                            <li className="before:content-['▹']"> Macroeconomics</li>
                                            <li className="before:content-['▹']"> US Government</li>
                                            <li className="before:content-['▹']"> Physics 1</li>
                                            <li className="before:content-['▹']"> Physics C</li>
                                            <li className="before:content-['▹']"> World History</li>
                                            <li className="before:content-['▹']"> Human Geography</li>
                                            <li className="before:content-['▹']"> Psychology</li>
                                            <li className="before:content-['▹']"> Chinese</li>
                                        </ul>
                                    </div>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container right">
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <p className="text-black font-bold">Extracurriculars: </p>
                                    <ul className="text-[#344c67]">
                                        <li className="flex items-start">
                                            <div className="flex flex-col">
                                                <span>♣️ Family, Career, and Community Leaders of America</span>
                                                <span className="pl-6 text-sm">- President</span>
                                            </div>
                                            <span className="ml-auto">2021 – 2024</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex flex-col">
                                                <span>👩🏻‍💻 Girls Who Code</span>
                                                <span className="pl-6 text-sm">- Founder/President</span>
                                            </div>
                                            <span className="ml-auto">2023 - 2024</span>
                                        </li>
                                        <li className="flex items-center">
                                            <div className="flex flex-col">
                                                <span>⚙️ VEX Robotics Team 87867D/V</span>
                                                <span className="pl-6 text-sm">- Captain/Engineering Notebook Manager</span>
                                            </div>
                                            <span className="ml-auto">2023 - 2024</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span>🌟 Rays Of Light Volunteer</span>
                                            <span className="ml-auto">2020 - 2024</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span>🧗 Team Texas Rock Climbing</span>
                                            <span className="ml-auto">2021 – 2023</span>
                                        </li>
                                        <li className="flex items-center">
                                            <span>🧗 Team Lone Star Rock Climbing</span>
                                            <span className="ml-auto">2019 - 2021</span>
                                        </li>
                                    </ul>
                                    <span className="arrow-top"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container left">
                                <img src="pca.png"
                                    className="bg-white " />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">Prestonwood Christian Academy</h2>
                                    <small className="text-[#344c67]">2018 - 2020, Frisco/TX</small>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                        <RevealOnScroll>
                            <div className="container right">
                                <img src="bjdl.jpeg"
                                    className="bg-white " />
                                <div className="text-box shadow-xl shadow-blue-100">
                                    <h2 className="text-black font-bold text-lg">East Beijing Road Primary School</h2>
                                    <small className="text-[#344c67]">2012 - 2018, Nanjing/China</small>
                                    <span className="arrow"></span>
                                </div>
                            </div>
                        </RevealOnScroll>

                    </div>
                </RevealOnScroll>



            </div>
        </section>
    )

}