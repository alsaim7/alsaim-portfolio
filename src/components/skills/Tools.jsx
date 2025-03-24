import { skillsAnimeTools } from "./skillsGSAP"
import { useEffect } from "react"
export function Tools() {
    useEffect(()=>{
            const ctx= skillsAnimeTools()
            return(()=>{
                ctx.revert()
            })
        },[])
    return (
        <div className="skills__content">
            <h3 className="skills__title">Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="tools">
                            <h3 className="skills__name">VS Code</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="tools">
                            <h3 className="skills__name">Bash Terminal</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div>

                </div>



                <div className="skills__group">

                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="tools">
                            <h3 className="skills__name">Jupyter</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div>


                    <div className="skills__data">
                        <i className='bx bx-badge-check' ></i>

                        <div className="tools">
                            <h3 className="skills__name">Git Hub</h3>
                            {/* <span className="skills__level">
                            </span> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}