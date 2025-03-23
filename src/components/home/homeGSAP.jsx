import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export const socialAnime = () => {
    return gsap.context(() => {
        gsap.from('.social', {
            x: -20,
            opacity: 0,
            duration: 1,
            stagger: 0.4,
            scrollTrigger: {
                trigger: '.social',
                start: "top 70%",
                toggleActions: "play reverse play reverse"
            }
        })
    })
}


export function myimgAnime() {
    return gsap.context(() => {
        gsap.from('.myimg', {
            scale: 0.8,
            duration: 0.8,
            ease: "power2.out",
        })
    })
}


export function buttonAnime() {
    return gsap.context(() => {
        gsap.from('.buttonHello', {
            y: -25,
            autoAlpha: 0,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            delay: 0.3,
        })
    })
}