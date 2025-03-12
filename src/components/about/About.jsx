import './about.css'
import { useState } from 'react'

export function About() {
    const [toggleState, setToggleState]= useState(1)
    const toggleTab=(i)=>{
        setToggleState(i)
    }
    return (
        <section className="qualification section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">

                <div className="qualification__tabs">
                    <div className={toggleState===1? 'qualification__button button--flex qualification__active': 'qualification__button button--flex'} onClick={()=>toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i> Education
                    </div>
                    <div className={toggleState===2? 'qualification__button button--flex qualification__active': 'qualification__button button--flex'} onClick={()=>toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification__icon"></i> Experience
                    </div>
                </div>


                {/* this is for qualification tab */}
                <div className="qualification__sections">
                    <div className={toggleState===1? 'qualification__content qualification__content-active': 'qualification__content'}>
                        {/* qualification one */}
                        <div className="qualification__data right-align">
                            <div>
                                <h3 className="qualification__title">B.Tech in Computer Science Engineering</h3>
                                <span className="qualification__subtitle">
                                    Integral University, Lucknow (NAAC A+)
                                </span>
                                <div className="qualifcation__calender">
                                    <i className="uil uil-calendar-alt"></i> 2021 -2024
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* qualification two */}
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Diploma in Automobile Engineering</h3>
                                <span className="qualification__subtitle">
                                    Integral University, Lucknow (NAAC A+)
                                </span>
                                <div className="qualifcation__calender">
                                    <i className="uil uil-calendar-alt"></i> 2018 -2021
                                </div>
                            </div>
                        </div>


                        {/* qualification three */}
                        <div className="qualification__data right-align">
                            <div>
                                <h3 className="qualification__title">ICSE (Indian Certificate of Secondary Education)</h3>
                                <span className="qualification__subtitle">
                                    City Montessori School- CMS
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



                {/* this is for experience tab */}
                <div className="qualification__sections">
                    <div className={toggleState===2? 'qualification__content qualification__content-active': 'qualification__content'}>
                        {/* qualification one */}
                        <div className="qualification__data right-align">
                            <div>
                                <h3 className="qualification__title">Freelancer</h3>
                                <span className="qualification__subtitle">
                                    Web Devlopment
                                </span>
                                <div className="qualifcation__calender">
                                    <i className="uil uil-calendar-alt"></i> 2025 - Present
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
        </section>
    )
}