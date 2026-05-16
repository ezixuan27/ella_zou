import { useMemo } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

const SNOW_COUNT = 50;

export const Home = ({ setPage }) => {
    // generate randomized snowflakes once per mount
    const snowflakes = useMemo(() =>
        Array.from({ length: SNOW_COUNT }, () => {
            const size = 2 + Math.random() * 4;       // 2 – 6 px
            const drift = (Math.random() - 0.5) * 60; // -30 to +30 vw drift
            return {
                left: Math.random() * 100,            // 0 – 100 %
                size,
                duration: 12 + Math.random() * 18,    // 12 – 30s fall
                delay: -Math.random() * 25,           // negative = start mid-animation
                opacity: 0.4 + Math.random() * 0.5,   // 0.4 – 0.9
                drift,
            };
        }),
    []);

    return (
        <section
            id="home"
            className="relative min-h-screen w-full bg-abyss overflow-hidden grain"
        >
            {/* CSS snow particles — true transparency, no bg wash */}
            <div className="snow" aria-hidden="true">
                {snowflakes.map((s, i) => (
                    <span
                        key={i}
                        style={{
                            left: `${s.left}%`,
                            width: `${s.size}px`,
                            height: `${s.size}px`,
                            animationDuration: `${s.duration}s`,
                            animationDelay: `${s.delay}s`,
                            '--op': s.opacity,
                            '--drift': `${s.drift}vw`,
                        }}
                    />
                ))}
            </div>

            {/* Content frame */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 md:pt-32 pb-12">

                {/* Hero title block */}
                <RevealOnScroll>
                    <div className="mt-12 md:mt-0">
                        <span className="block font-sans text-[10px] md:text-xs tracking-[0.4em] uppercase text-paper/55 mb-6 md:mb-8">
                            Hi, I'm —
                        </span>
                        <h1
                            className="font-display font-light text-paper leading-[0.88] tracking-[-0.04em]"
                            style={{ fontSize: 'clamp(72px, 14vw, 220px)', fontVariationSettings: '"opsz" 144' }}
                        >
                            Zixuan <span className="italic font-normal text-lava">Zou.</span>
                        </h1>
                    </div>
                </RevealOnScroll>

                {/* Bottom row — tagline + CTAs */}
                <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-12">
                    <RevealOnScroll>
                        <p className="max-w-xl font-display font-light italic text-paper/85 text-lg md:text-2xl leading-snug">
                            I usually go by <span className="text-lava not-italic font-normal">Ella</span> — a second-year CS student at Northeastern in Boston, MA, with a minor in Supply Chain Management. <span className="not-italic font-normal text-paper">Nice to meet you. 很高兴认识你。</span>
                        </p>
                    </RevealOnScroll>

                    <RevealOnScroll>
                        <div className="flex gap-3 md:gap-4 flex-shrink-0">
                            <button
                                type="button"
                                onClick={() => setPage('projects')}
                                className="cta primary"
                            >
                                View Work <span className="arrow">→</span>
                            </button>
                            <a href="#contact" className="cta">
                                Contact
                            </a>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
        </section>
    );
}
