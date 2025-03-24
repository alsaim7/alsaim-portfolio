import './skills.css'
import { Frontend } from './Frontend'
import { Backend } from './Backend'
import { Dsml } from './Dsml'
import { Tools } from './Tools'
import { Lang } from './Lang'
export function Skills() {
    return (
        <section className="skills section" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">My technical level</span>

            <div className="skills__container container grid">
                <Lang/>
                <Dsml/>
                <Frontend/>
                <Backend/>
                <Tools/>
            </div>
        </section>
    )
}