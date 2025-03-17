import './footer.css'
import { footerSocialAnime } from './footerGSAP'
import { useEffect } from 'react'
export function Footer() {
    useEffect(()=>{
        const ctx= footerSocialAnime()
        return(()=>{
            ctx.revert()
        })
    },[])
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Al Saim</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="footer__link">Contact Me</a>
                    </li>
                </ul>


                <div className="footer__social">
                    <a href="https://www.instagram.com/al_saim7?igsh=MXE5dG5zaW9idGxqeA==" className="footer__social-link footerSocial" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-instagram' ></i>
                    </a>
                    <a href="https://github.com/alsaim7" className="footer__social-link footerSocial" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/alsaimshakeel7/" className="footer__social-link footerSocial" target="_blank" rel="noopener noreferrer">
                        <i className='bx bxl-linkedin' ></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; 2025 Al Saim Shakeel.</span>
            </div>
        </footer>
    )
}