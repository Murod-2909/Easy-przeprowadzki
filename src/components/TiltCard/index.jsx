import React, {useCallback, useRef} from "react";

// Sichqoncha harakatiga qarab kartani 3D fazoda egadi (sof CSS transform, kutubxonasiz).
// Touch qurilmalarida va prefers-reduced-motion rejimida hech narsa qilmaydi.
const TiltCard = ({children, className, max = 9, ...rest}) => {
    const ref = useRef(null);

    const handleMove = useCallback((e) => {
        const el = ref.current;
        if (!el) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        // AOS hali kirish animatsiyasini tugatmagan bo'lsa, aralashmaymiz
        if (el.dataset.aos && !el.classList.contains("aos-animate")) return;
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transition = "transform 0.15s ease-out";
        el.style.willChange = "transform";
        el.style.transform =
            `perspective(900px) rotateY(${(x * max).toFixed(2)}deg) rotateX(${(-y * max).toFixed(2)}deg)`;
    }, [max]);

    const handleLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transition = "transform 0.4s ease-out";
        el.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg)";
        el.style.willChange = "";
    }, []);

    return (
        <div ref={ref} className={className} onMouseMove={handleMove} onMouseLeave={handleLeave} {...rest}>
            {children}
        </div>
    );
};

export default TiltCard;
