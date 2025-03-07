import './scrollup.css'
import { useEffect } from 'react'
export function ScrollUp() {

    useEffect(() => {

        const scrollUp = () => {
            const scrollUp = document.querySelector('.scrollup')
            if (window.scrollY >= 560) {
                scrollUp.classList.add('show-scroll')
            } else {
                scrollUp.classList.remove('show-scroll')
            }
        }

        window.addEventListener('scroll', scrollUp)

        return()=>{
        window.removeEventListener('scroll', scrollUp)
        }

    })

    return (
        <a href="#home" className="scrollup">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}