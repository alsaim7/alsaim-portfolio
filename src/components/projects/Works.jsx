import { projectsData } from "./Data"
import { projectsNav } from "./Data"
import { WorkItems } from "./WorkItems"
import { useState, useEffect } from "react"
import { projectCardAnime } from "./projectsGSAP";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export function Works() {
    const [item, setItem] = useState({ name: 'All' })
    const [projects, setProjects] = useState([])
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (item.name === 'All') {
            setProjects(projectsData)
        } else {
            const newProjects = projectsData.filter((project) => {
                return (
                    project.category === item.name
                )
            })
            setProjects(newProjects)
        }
    }, [item])

    const handleClick= (e,index)=>{
        setItem({name: e.target.textContent})
        setActive(index)
    }

    useEffect(()=>{
        const ctx = projectCardAnime()
        setTimeout(()=>{
            ScrollTrigger.refresh()
        }, 100)
        return (() => {
            ctx.revert()
        })
    },[projects])
    
    return (
        <div>
            <div className="work__filters">
                {projectsNav.map((item, index) => {
                    return (
                        <span className={active===index? 'work__item work__item-active' : 'work__item'} key={index} onClick={(e)=>{
                            handleClick(e,index)
                        }}>{item.name}</span>
                    )
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item, index) => {
                    return (
                        <WorkItems item={item} key={item.id}/>
                    )
                })}
            </div>
        </div>
    )
}