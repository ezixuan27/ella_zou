import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <section
            id="home"
            className="min-h-screen max-w-full flex items-center justify-center relative mx-4 py-20 overflow-hidden"
        >
            <div className="absolute inset-0 w-full h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover mix-blend-screen opacity-80 pointer-events-none"
                >
                    <source src="Snow.mp4" type="video/mp4" />
                </video>
            </div>

            <RevealOnScroll>
                <div className="text-center max-w-full md:mx-auto z-10 px-4 mt-15 md:mt-45 relative">
                    <h1 className="font-['Josefin_Sans',_sans-serif] font-bold tracking-tight leading-tight text-4xl md:text-7xl">
                        <span className="text-[#395279]">Hi, I’m</span>
                        <span className="text-[#d1865e] ml-4">Zixuan Zou.</span>
                    </h1>

                    <p className="text-[#3e577b] text-xl md:text-2xl mt-8 md:mb-8 max-w-4xl mx-auto">
                        I usually go by Ella!
                        I'm currently a second-year student at Northeastern Univerisity in Boston, MA, pursuing a B.S. in Computer Science
                        with a minor in Supply Chain Management. Nice to meet you!
                    </p>

                    <div className="flex flex-col justify-center items-center space-y-20 py-10 md:py-20 md:flex-row md:space-x-20 md:space-y-0">
                        <a
                            href="#projects"
                            className="bg-[#3a537b] shadow-sm shadow-[#4E8EF7]/50 inline-flex items-center justify-center border border-[#4E8EF7] text-[#d0865e] px-6 rounded font-medium h-12
                        transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#4E8EF7]/90 hover:text-white
                        hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                            View Projects
                        </a>
                        <div className="relative">
                            <a
                                href="#contact"
                                className="bg-[#d0865e] shadow-sm shadow-[#E86D2E]/50 inline-flex items-center justify-center border border-[#E86D2E] text-[#FFFFF] px-6 rounded font-medium h-12
                            transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#E86D2E]/65 hover:text-white 
                            hover:shadow-[0_0_15px_rgba(232,109,46,0.4)]">
                                Contact Me
                            </a>
                            <img src="小黑waving.gif"
                                alt="someGif"
                                className="absolute -top-18 left-1/2 w-20 h-20 md:-top-28 md:left-1/3 md:w-30 md:h-30 pointer-events-none select-none z-10"
                            />
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
}