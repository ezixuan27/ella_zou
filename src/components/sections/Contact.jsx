import emailjs from '@emailjs/browser';
import { useState } from 'react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then(() => {
                alert("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => alert("Something went wrong."));
    };

    const inputClass =
        "w-full bg-transparent border-0 border-b border-paper/30 px-1 py-3 text-paper placeholder-paper/40 font-sans text-base transition focus:outline-none focus:border-lava";

    return (
        <>
            {/* section divider */}
            <div className="section-divider">
                <span className="num">03</span>
                <span>Contact</span>
                <span className="line"></span>
            </div>

            <section
                id="contact"
                className="bg-abyss text-paper relative grain"
            >
                <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 py-24 md:py-32">

                    <h2 className="font-display font-light text-paper leading-[0.95] tracking-[-0.02em] mb-14"
                        style={{ fontSize: 'clamp(56px, 9vw, 140px)' }}>
                        Let's <span className="italic text-lava">connect.</span>
                    </h2>

                    <form className="space-y-8" onSubmit={handleSubmit}>
                            <div>
                                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-lava mb-2 block">
                                    01 — Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className={inputClass}
                                    placeholder="your name"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-lava mb-2 block">
                                    02 — Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    className={inputClass}
                                    placeholder="example@gmail.com"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="font-mono text-[10px] tracking-[0.25em] uppercase text-lava mb-2 block">
                                    03 — Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    className={inputClass + " resize-none"}
                                    placeholder="your message..."
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <div className="pt-4">
                                <button type="submit" className="cta primary">
                                    Send Message <span className="arrow">→</span>
                                </button>
                            </div>
                        </form>

                    {/* social */}
                    <div className="mt-20 pt-10 border-t flex flex-wrap items-center gap-10"
                         style={{ borderColor: 'var(--color-hairline)' }}>
                        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute">Or find me at —</span>
                        <a href="https://github.com/ezixuan27"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/75 hover:text-lava transition-colors">
                            GitHub ↗
                        </a>
                        <a href="https://www.linkedin.com/in/zixuan-zou"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/75 hover:text-lava transition-colors">
                            LinkedIn ↗
                        </a>
                        <a href="mailto:zou.zix@northeastern.edu"
                            aria-label="Email"
                            className="font-mono text-[11px] tracking-[0.2em] uppercase text-paper/75 hover:text-lava transition-colors">
                            Email ↗
                        </a>
                    </div>

                </div>
            </section>
        </>
    );
};
