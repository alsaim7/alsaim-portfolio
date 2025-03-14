import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

export const footerSocialAnime=()=>{
    return gsap.context(()=>{
        gsap.from('.footerSocial', {
            y:-20,
            opacity:0,
            duration:1,
            stagger:0.2,
            scrollTrigger:{
                trigger: '.footerSocial',
                start: "top 90%",
                toggleActions: "play none none reverse",
            }
        })
    })
}