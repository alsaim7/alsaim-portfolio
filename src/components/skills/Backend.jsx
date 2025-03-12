import { skillsAnimeBackend } from "./skillsGSAP"
import { useEffect } from "react"
export function Backend() {
    useEffect(()=>{
            const ctx= skillsAnimeBackend()
            return(()=>{
                ctx.revert()
            })
        },[])
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="backend">
                            <h3 className="skills__name">Node.js</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="backend">
                            <h3 className="skills__name">Express.js</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div> 
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="backend">
                            <h3 className="skills__name">MongoDB</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="backend">
                            <h3 className="skills__name">Rest API</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div> 
                </div>


            </div>
        </div>
    )
}