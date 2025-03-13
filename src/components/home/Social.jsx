import { useEffect } from "react"
import { socialAnime } from "./homeGSAP"
export function Social() {
    useEffect(()=>{
        const ctx= socialAnime()
        return(()=>{
            ctx.revert()
        })
    },[])
    return (
        <div className="home__social">
            <a href="https://github.com/alsaim7" className="home__social-icon social" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/alsaimshakeel7/" className="home__social-icon social" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://www.instagram.com/al_saim7?igsh=MXE5dG5zaW9idGxqeA==" className="home__social-icon social" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-instagram"></i>
            </a>

        </div>
    )
}