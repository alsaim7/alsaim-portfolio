import './home.css'
import { Social } from './Social'
import { Data } from './Data'
import { Scroll } from './Scroll'
export function Home(){
    return(
            <section className="heom section" id="home">
                <div className="home__container grid container">
                    <div className="home__content grid">
                        <Social/>

                        <div className="home__img">

                        </div>

                        <Data/>
                    </div>
                    <Scroll/>
                </div>
            </section>
    )
}