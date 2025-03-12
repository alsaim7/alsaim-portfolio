import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export const aboutAnime = () => {
    const mm = gsap.matchMedia()
    mm.add("(min-width: 576px)", () => {
        gsap.from('.gsap-left', {
            x: 40,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".gsap-left",
                start: "top 90%",
                end: "top 10%",
                // scrub: true,
                // markers: true,
            },
        })

        gsap.from('.gsap-right', {
            x: -40,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".gsap-right",
                start: "top 90%",
                end: "top 10%",
                // scrub: true,
                // markers: true,
            },
        })
    })

    // breakpoint 

    mm.add("(max-width: 576px)", () => {
        gsap.from('.gsap-left', {
            x: 25,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".gsap-left",
                start: "top 90%",
                end: "top 10%",
                // scrub: true,
                // markers: true,
            },
        })

        gsap.from('.gsap-right', {
            x: -25,
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: ".gsap-right",
                start: "top 90%",
                end: "top 10%",
                // scrub: true,
                // markers: true,
            },
        })
    })
    return mm
} 