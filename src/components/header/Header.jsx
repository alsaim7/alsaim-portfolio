import './header.css'
import { useState, useEffect } from 'react'
import { useTheme } from '../../context/ThemeContext'

export function Header() {
    const [toggle, setToggle] = useState(false)
    const { isDarkMode, toggleTheme } = useTheme()

    const openToggleMenu = () => {
        setToggle(!toggle)
    }
    const closeToggleMenu = () => {
        setToggle(!toggle)
    }

    // for active links
    const [activeNav, setActiveNav] = useState('#home')


    // change background header
    useEffect(() => {

        const handleScroll = () => {

            const sections = document.querySelectorAll('section')
            let currentSection = '#home'
            sections.forEach((section) => {
                const sectionTop = section.offsetTop
                const sectionHeight = section.offsetHeight

                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    currentSection = `#${section.id}`
                }
            })

            setActiveNav(currentSection)

            const header = document.querySelector('.header')
            if (window.scrollY >= 80) {
                header.classList.add('scroll-header')
            } else {
                header.classList.remove('scroll-header')
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])






    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Al Saim</a>

                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'nav__link active-link navHome' : 'nav__link'}>
                                <i className="uil uil-estate nav__icon"></i> Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'nav__link active-link navAbout' : 'nav__link'}>
                                <i className="uil uil-user nav__icon"></i> About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'nav__link active-link navSkills' : 'nav__link'}>
                                <i className="uil uil-file-alt nav__icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'nav__link active-link navProjects' : 'nav__link'}>
                                <i className="uil uil-scenery nav__icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'nav__link active-link navContact' : 'nav__link'}>
                                <i className="uil uil-message nav__icon"></i> Contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={closeToggleMenu}></i>
                </div>

                <div className="nav__toggle" onClick={openToggleMenu}><i className="uil uil-apps"></i></div>

                <button className="theme__toggle" onClick={toggleTheme} title="Toggle dark mode">
                    <i className={isDarkMode ? "uil uil-sun" : "uil uil-moon"}></i>
                </button>
            </nav>
        </header>
    )
}