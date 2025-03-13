import './home.css'
import { Social } from './Social'
import { Data } from './Data'
import { Scroll } from './Scroll'
import { useEffect } from 'react'
import { myimgAnime } from './homeGSAP'
export function Home(){
     useEffect(()=>{
            const ctx= myimgAnime()
            return(()=>{
                ctx.revert()
            })
        })
    return(
            <section className="heom section" id="home">
                <div className="home__container grid container">
                    <div className="home__content grid">
                        <Social/>

                        <div className="home__img myimg">

                        </div>

                        <Data/>
                    </div>
                    <Scroll/>
                </div>
            </section>
    )
}