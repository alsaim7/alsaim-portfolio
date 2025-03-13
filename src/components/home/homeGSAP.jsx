import { gsap } from "gsap";

export const socialAnime=()=>{
    return gsap.context(()=>{
        gsap.from('.social', {
            x:-20,
            opacity:0,
            duration:1,
            stagger: 0.5
        })
    })
}


export function myimgAnime(){
    return gsap.context(()=>{
        gsap.from('.myimg', {
            scale: 0.2,
            duration: 1
        })
    })
}


export function buttonAnime(){
    return gsap.context(()=>{
        gsap.from('.button',{
            y: -25,
            opacity: 0,
            duration:0.5,
        })
    })
}