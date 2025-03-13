import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
import { projectsData } from "./Data";


export function projectCardAnime() {
    return gsap.context(() => {
        projectsData.forEach(item => {
            gsap.from(`.class${item.id}`, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: `.class${item.id}`,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        });
    })
}