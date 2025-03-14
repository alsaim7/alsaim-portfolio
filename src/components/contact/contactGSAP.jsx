import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export function contactAnime() {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 768px)', () => {
        gsap.from('.contactCards', {
            x: -40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".contactCards",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play none none reverse",
            },
        })

        gsap.from('.formFeild', {
            x: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".formFeild",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play none none reverse",
            },
        })
    })

    mm.add('(max-width: 768px)', () => {
        gsap.from('.contactCards', {
            y: 30,
            opacity: 0,
            duration: 1,
            // stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: ".contactCards",
                start: "top 80%",
                // scrub: true,
                // markers: true,
                toggleActions: "play none none reverse",
            },
        })

        gsap.from('.formFeild', {
            y: 30,
            opacity: 0,
            duration: 1,
            // stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: ".formFeild",
                start: "top 80%",
                // scrub: true,
                // markers: true,
                toggleActions: "play none none reverse",
            },
        })
    })

    return mm;
}