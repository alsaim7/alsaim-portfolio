import { skillsAnimeLang } from "./skillsGSAP"
import { useEffect } from "react"
export function Lang() {
    useEffect(() => {
        const ctx = skillsAnimeLang()
        return (() => {
            ctx.revert()
        })
    }, [])
    return (
        <div className="skills__content">
            <h3 className="skills__title">Languages</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="languages">
                            <h3 className="skills__name">Javascript</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="languages">
                            <h3 className="skills__name">Python</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div>



                </div>




                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="languages">
                            <h3 className="skills__name">My SQL</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}