import { useEffect, useRef, useState } from "react";

export const XiaoHei = () => {
    const elRef = useRef(null);
    const dragRef = useRef({ active: false, dx: 0, dy: 0, moved: false });
    const [pos, setPos] = useState({ x: 16, y: 600 });

    // set initial bottom-left position after mount (when window dims are known)
    useEffect(() => {
        const el = elRef.current;
        const h = el ? el.offsetHeight : 80;
        setPos({ x: 16, y: window.innerHeight - h - 16 });
    }, []);

    // global pointermove / pointerup for dragging
    useEffect(() => {
        const onMove = (e) => {
            if (!dragRef.current.active) return;
            const el = elRef.current;
            if (!el) return;
            dragRef.current.moved = true;
            const w = el.offsetWidth;
            const h = el.offsetHeight;
            const x = e.clientX - dragRef.current.dx;
            const y = e.clientY - dragRef.current.dy;
            setPos({
                x: Math.max(0, Math.min(window.innerWidth - w, x)),
                y: Math.max(0, Math.min(window.innerHeight - h, y)),
            });
        };
        const onEnd = () => {
            dragRef.current.active = false;
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
        };
        window.addEventListener('pointermove', onMove);
        window.addEventListener('pointerup', onEnd);
        window.addEventListener('pointercancel', onEnd);
        return () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onEnd);
            window.removeEventListener('pointercancel', onEnd);
        };
    }, []);

    // clamp inside viewport on resize
    useEffect(() => {
        const onResize = () => {
            const el = elRef.current;
            if (!el) return;
            const w = el.offsetWidth;
            const h = el.offsetHeight;
            setPos((p) => ({
                x: Math.max(0, Math.min(window.innerWidth - w, p.x)),
                y: Math.max(0, Math.min(window.innerHeight - h, p.y)),
            }));
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const onPointerDown = (e) => {
        dragRef.current.active = true;
        dragRef.current.moved = false;
        dragRef.current.dx = e.clientX - pos.x;
        dragRef.current.dy = e.clientY - pos.y;
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
        try { e.currentTarget.setPointerCapture(e.pointerId); } catch {}
        e.preventDefault();
    };

    return (
        <div
            ref={elRef}
            className="fixed z-30 select-none cursor-grab active:cursor-grabbing touch-none transition-transform duration-300 hover:scale-105"
            style={{
                left: pos.x + 'px',
                top: pos.y + 'px',
            }}
            onPointerDown={onPointerDown}
            aria-hidden="true"
        >
            <img
                src="小黑waving.gif"
                alt=""
                className="w-16 h-16 md:w-20 md:h-20"
                draggable={false}
            />
        </div>
    );
};
