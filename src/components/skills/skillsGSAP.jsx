import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export const skillsAnimeFrontend=()=>{
    return gsap.context(()=>{
        gsap.from('.frontend',{
            x: 30,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".frontend",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            },
        })
    })
}

export const skillsAnimeBackend=()=>{
    return gsap.context(()=>{
        gsap.from('.backend',{
            x: 30,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".backend",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            },
        })
    })
}

export const skillsAnimeDsml=()=>{
    return gsap.context(()=>{
        gsap.from('.dsml',{
            x: 30,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".dsml",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            },
        })
    })
}

export const skillsAnimeTools=()=>{
    return gsap.context(()=>{
        gsap.from('.tools',{
            x: 30,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".tools",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            },
        })
    })
}

export const skillsAnimeLang=()=>{
    return gsap.context(()=>{
        gsap.from('.languages',{
            x: 30,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ".languages",
                start: "top 90%",
                // scrub: true,
                // markers: true,
                toggleActions: "play reverse play reverse",
            },
        })
    })
}