export const Footer = () => {
    return (
        <footer className="bg-abyss border-t" style={{ borderTopColor: 'var(--color-hairline)' }}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-6 text-mute">
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-center md:text-left">
                    © <span className="text-lava">Zixuan Zou</span>
                </div>
                <div className="text-[11px] leading-relaxed text-center md:text-right max-w-xl md:max-w-md font-sans">
                    All rights to "Luo Xiaohei" characters belong to MTJJ / HMCH Animation Technology Co., Ltd. This website is for personal and non-commercial use only.
                </div>
            </div>
        </footer>
    );
};
