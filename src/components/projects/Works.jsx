import { projectsData, projectsNav } from "./Data";
import { WorkItems } from "./WorkItems";
import { useState, useEffect } from "react";
import { projectCardAnime } from "./projectsGSAP";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Works() {
    const [item, setItem] = useState({ name: 'All' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'All') setProjects(projectsData);
        else setProjects(projectsData.filter(p => p.category === item.name));
    }, [item]);

    useEffect(() => {
        const ctx = projectCardAnime();
        setTimeout(() => ScrollTrigger.refresh(), 100);
        return () => ctx.revert();
    }, [projects]);

    return (
        <>
            <div className="work__filters">
                {projectsNav.map((n, i) => (
                    <span
                        key={i}
                        className={active === i ? 'work__item work__item-active' : 'work__item'}
                        onClick={() => {
                            setItem({ name: n.name });
                            setActive(i);
                        }}
                    >
                        {n.name}
                    </span>
                ))}
            </div>

            <div className="work__container container grid">
                {projects.slice().reverse().map(p => (
                    <WorkItems key={p.id} item={p} />
                ))}
            </div>
        </>
    );
}
