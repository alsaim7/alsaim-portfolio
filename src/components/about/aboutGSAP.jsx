import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export const aboutAnime = () => {
    const mm = gsap.matchMedia()
    mm.add("(min-width: 576px)", () => {
        gsap.from('.gsap-left', {
            x: 40,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".gsap-left",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play none none reverse",
            },
        })

        gsap.from('.gsap-right', {
            x: -40,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".gsap-right",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play none none reverse",
            },
        })
    })

    // breakpoint 

    mm.add("(max-width: 576px)", () => {
        gsap.from('.gsap-left', {
            x: 22,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".gsap-left",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play none none reverse",
            },
        })

        gsap.from('.gsap-right', {
            x: -22,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".gsap-right",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play none none reverse",
            },
        })
    })
    return mm
} 