import { RevealOnScroll } from '../RevealOnScroll';
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

    const inputClass = "w-full bg-white border border-[#8BB1D1]/60 rounded-xl px-4 py-3 text-[#344c67] placeholder-[#8BB1D1] transition focus:outline-none focus:border-[#5D88AA] focus:shadow-[0_0_0_3px_rgba(93,136,170,0.15)]";

    return (
        <section
            id="contact"
            className="bg-[#F7FAFF] min-h-screen flex items-center justify-center py-20"
        >
            <div className="w-full max-w-2xl px-4">
            <RevealOnScroll>
                <div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-3 text-[#5D88AA] text-center
                        after:content-[''] after:block after:w-32 after:h-[3px]
                        after:bg-[#5D88AA] after:mx-auto after:mt-3">
                        Get In Touch
                    </h2>
                    <p className="text-center text-[#344c67] mb-10 mt-6">
                        Have a question or want to connect? Feel free to reach out!
                    </p>

                    <div className="bg-white rounded-3xl shadow-md shadow-blue-100 border border-[#8BB1D1]/30 p-8">
                        <form className="space-y-5" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-sm font-medium text-[#5D88AA] mb-1.5">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    className={inputClass}
                                    placeholder="Your name"
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-[#5D88AA] mb-1.5">Email</label>
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
                                <label className="block text-sm font-medium text-[#5D88AA] mb-1.5">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    className={inputClass}
                                    placeholder="Your message..."
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#5D88AA] text-white py-3 px-6 rounded-xl font-medium transition
                                hover:-translate-y-0.5 hover:bg-[#4a7393] hover:shadow-[0_4px_20px_rgba(93,136,170,0.4)]">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="mt-8 flex justify-center gap-8">
                        <a href="https://github.com/ezixuan27"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="opacity-70 transition hover:opacity-100 hover:-translate-y-0.5">
                            <img src="github.svg" className="h-9 w-9" />
                        </a>
                        <a href="https://www.linkedin.com/in/zixuan-zou"
                            target="_blank" rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="opacity-70 transition hover:opacity-100 hover:-translate-y-0.5">
                            <img src="linkedin.svg" className="h-9 w-9" />
                        </a>
                        <a href="mailto:zou.zix@northeastern.edu"
                            aria-label="Email"
                            className="opacity-70 transition hover:opacity-100 hover:-translate-y-0.5">
                            <img src="email.png" className="h-9 w-9" />
                        </a>
                    </div>

                </div>
            </RevealOnScroll>
            </div>
        </section>
    );
};
