import './about.css'
import { useState, useEffect } from 'react'
import { aboutAnime } from './aboutGSAP'
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function About() {
    const [toggleState, setToggleState] = useState(2)
    const toggleTab = (i) => {
        setToggleState(i)
    }

    useEffect(() => {
        const mm = aboutAnime()
        setTimeout(() => {
            ScrollTrigger.refresh()
        }, 100)
        return (() => {
            mm.revert()
        })
    }, [toggleState])

    return (
        <section className="qualification section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1
                            ? 'qualification__button button--flex qualification__active'
                            : 'qualification__button button--flex'}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>

                    <div
                        className={toggleState === 2
                            ? 'qualification__button button--flex qualification__active'
                            : 'qualification__button button--flex'}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>

                {/* ================= EDUCATION ================= */}
                <div className="qualification__sections">
                    <div className={toggleState === 1
                        ? 'qualification__content qualification__content-active'
                        : 'qualification__content'}
                    >
                        <div className="qualification__data right-align">
                            <div className='gsap-left'>
                                <h3 className="qualification__title">B.Tech in Computer Science Engineering</h3>
                                <span className="qualification__subtitle">
                                    Integral University, Lucknow (NAAC A+)
                                </span>
                                <div className="qualifcation__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div className='gsap-right'>
                                <h3 className="qualification__title">Diploma in Automobile Engineering</h3>
                                <span className="qualification__subtitle">
                                    Integral University, Lucknow (NAAC A+)
                                </span>
                                <div className="qualifcation__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2021
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data right-align">
                            <div className='gsap-left'>
                                <h3 className="qualification__title">ICSE (Indian Certificate of Secondary Education)</h3>
                                <span className="qualification__subtitle">
                                    City Montessori School - CMS
                                </span>
                                <div className="qualifcation__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= EXPERIENCE ================= */}
            <div className="qualification__sections">
                <div className={toggleState === 2
                    ? 'qualification__content qualification__content-active'
                    : 'qualification__content'}
                >

                    {/* Software Development Engineer */}
                    <div className="qualification__data right-align">
                        <div className='gsap-left'>
                            <h3 className="qualification__title">Software Development Engineer</h3>
                            <span className="qualification__subtitle">
                                Enterprise Application Development
                            </span>
                            <div className="qualifcation__calender">
                                <i className="uil uil-calendar-alt"></i> Nov 2025 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    {/* Software Development Intern */}
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div className='gsap-right'>
                            <h3 className="qualification__title">Software Development Intern</h3>
                            <span className="qualification__subtitle">
                                Web Platforms & APIs
                            </span>
                            <div className="qualifcation__calender">
                                <i className="uil uil-calendar-alt"></i> May 2025 - Nov 2025
                            </div>
                        </div>
                    </div>

                    {/* Freelancer */}
                    <div className="qualification__data right-align">
                        <div className='gsap-left'>
                            <h3 className="qualification__title">Freelancer</h3>
                            <span className="qualification__subtitle">
                                Full Stack Web Developer
                            </span>
                            <div className="qualifcation__calender">
                                <i className="uil uil-calendar-alt"></i> Dec 2024 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
