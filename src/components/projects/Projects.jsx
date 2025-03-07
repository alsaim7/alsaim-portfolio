import './projects.css'
import { Works } from './Works'
export function Projects() {
    return (
        <section className="projects section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">My Work</span>

            <Works/>
        </section>
    )
}