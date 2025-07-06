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
                Full Stack Web Developer
            </h3>
            <p className="home__description">
                Skilled in developing scalable and responsive web applications with a focus on performance and user experience. Proficient in both front-end and back-end technologies, creating efficient and dynamic solutions.
            </p>

            <a href="https://drive.google.com/drive/folders/1xZOpa9MfNqzXXxqk7NEgMgaGS8LeK2sl?usp=sharing" target="_blank" className="button button--flex buttonHello">
                View Resume
                <i className='bx bx-file button__icon' style={{fontSize: '24px'}}></i>
            </a>
        </div>
    )
}


