import React, {useEffect, useRef, useState} from "react";

// Element ekranga kirganda 0 dan `end` gacha sanaydigan yengil hisoblagich
// (react-countup o'rnini bosadi, qo'shimcha kutubxonasiz).
const Counter = ({end, duration = 2, suffix = ""}) => {
    const ref = useRef(null);
    const [value, setValue] = useState(0);
    const startedRef = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const start = () => {
            if (startedRef.current) return;
            startedRef.current = true;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                setValue(end);
                return;
            }
            const t0 = performance.now();
            const tick = (now) => {
                const progress = Math.min((now - t0) / (duration * 1000), 1);
                // ease-out: oxiriga borib sekinlashadi
                const eased = 1 - Math.pow(1 - progress, 3);
                setValue(Math.round(end * eased));
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };

        if (!("IntersectionObserver" in window)) {
            start();
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                start();
                observer.disconnect();
            }
        }, {threshold: 0.4});
        observer.observe(el);
        return () => observer.disconnect();
    }, [end, duration]);

    return <span ref={ref}>{value}{suffix}</span>;
};

export default Counter;
