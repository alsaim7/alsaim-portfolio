import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { projectsData } from "./Data";

export function projectCardAnime() {
    const ctx = gsap.context(() => {  // Create GSAP context
        projectsData.forEach(item => {
            const target = document.querySelector(`.class${item.id}`);
            if (!target) return;  // Skip if target is not found

            gsap.from(target, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: target,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    });

    return ctx; // Return the GSAP context
}