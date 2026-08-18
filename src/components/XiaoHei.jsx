import { useEffect, useRef } from "react";

// --- Tunables ------------------------------------------------------------
// Fraction of the remaining distance the cat covers each frame. Lower is
// slower and floatier; higher snaps to the cursor faster.
const FOLLOW_SPEED = 0.035;
// How far (px) the cat settles from the cursor, so it trails behind and
// never covers the pointer.
const REST_DISTANCE = 55;
// Resting inset from the screen edge when parked (static / no-mouse mode).
const MARGIN = 16;

export const XiaoHei = () => {
    const elRef = useRef(null);

    useEffect(() => {
        const el = elRef.current;
        if (!el) return;

        let w = el.offsetWidth;
        let h = el.offsetHeight;
        // Start bottom-left, matching where the cat used to rest.
        let x = MARGIN;
        let y = window.innerHeight - h - MARGIN;
        let facing = 1; // 1 = face right (gif default), -1 = mirrored to face left

        const apply = () => {
            el.style.transform = `translate3d(${x}px, ${y}px, 0) scaleX(${facing})`;
        };
        apply();

        // Only chase when there's a real hovering pointer and the visitor
        // hasn't asked to reduce motion. Otherwise the cat just sits parked.
        const wantsMotion =
            window.matchMedia("(pointer: fine)").matches &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!wantsMotion) {
            const onResize = () => {
                w = el.offsetWidth;
                h = el.offsetHeight;
                x = Math.max(0, Math.min(window.innerWidth - w, x));
                y = window.innerHeight - h - MARGIN;
                apply();
            };
            window.addEventListener("resize", onResize);
            return () => window.removeEventListener("resize", onResize);
        }

        // Target = cursor position. Element is position: fixed, so clientX/Y
        // (viewport coords) line up directly. Seed it at the cat's own center
        // so it doesn't lurch before the first mouse move.
        let targetX = x + w / 2;
        let targetY = y + h / 2;

        const onMove = (e) => {
            targetX = e.clientX;
            targetY = e.clientY;
        };
        const onResize = () => {
            w = el.offsetWidth;
            h = el.offsetHeight;
        };
        window.addEventListener("pointermove", onMove);
        window.addEventListener("resize", onResize);

        let raf = 0;
        const tick = () => {
            const cx = x + w / 2;
            const cy = y + h / 2;
            const dx = targetX - cx;
            const dy = targetY - cy;
            const dist = Math.hypot(dx, dy) || 1;

            // Chase only while farther than the rest gap, so the cat eases to
            // a stop a short distance from the cursor instead of on top of it.
            if (dist > REST_DISTANCE) {
                const desiredCx = targetX - (dx / dist) * REST_DISTANCE;
                const desiredCy = targetY - (dy / dist) * REST_DISTANCE;
                x += (desiredCx - w / 2 - x) * FOLLOW_SPEED;
                y += (desiredCy - h / 2 - y) * FOLLOW_SPEED;
                // Face the way it's travelling (ignore sub-pixel jitter).
                if (Math.abs(dx) > 2) facing = dx < 0 ? -1 : 1;
            }

            // Safety net: keep the cat inside the viewport.
            x = Math.max(0, Math.min(window.innerWidth - w, x));
            y = Math.max(0, Math.min(window.innerHeight - h, y));

            apply();
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    return (
        <div
            ref={elRef}
            className="fixed left-0 top-0 z-30 select-none pointer-events-none"
            style={{ willChange: "transform" }}
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
