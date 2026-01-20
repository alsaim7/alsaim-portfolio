import { useEffect } from "react"
import { buttonAnime } from "./homeGSAP"
import { SplitText } from "./SplitText"

export function Data() {

    // const handleAnimationComplete = () => {
    //     console.log("1")
    // }

    useEffect(() => {
        const ctx = buttonAnime()

        return (() => {
            ctx.revert()
        })
    }, [])

    return (
        <div className="home__data">
            <h1 className="home__title">
                <SplitText
                    text="Al Saim Shakeel"
                    className="text-4xl font-bold text-center"
                    delay={100}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,-40px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    // onLetterAnimationComplete={handleAnimationComplete}
                />
            </h1>
            <h3 className="home__subtitle">
                Software Engineer
            </h3>
            <p className="home__description">
                Full-Stack Developer capable of building complex web applications from the ground up. I manage the full technical stack—backend logic, database architecture, and user interfaces—ensuring seamless integration and a high-performance result for your business.
            </p>

            <a href="#projects" className="button button--flex buttonHello">
                View Projects
                <i className='bx bx-folder-open button__icon' style={{fontSize: '24px'}}></i>
            </a>
        </div>
    )
}


