import './App.css'
import { Header } from './components/header/Header'
import { Home } from './components/home/Home'
import { About } from './components/about/About'
import { Skills } from './components/skills/Skills'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'
import { Footer } from './components/footer/Footer'
import { ScrollUp } from './components/scrollup/ScrollUp'
import { useEffect } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function App() {

  useEffect(() => {
    // function refreshScrollTrigger() {
    //   setTimeout(() => {
    //     ScrollTrigger.refresh();
    //   }, 500);
    // }

    // window.addEventListener("load", refreshScrollTrigger);
    // document.addEventListener("DOMContentLoaded", refreshScrollTrigger);

    // 👇 Force refresh after first scroll/touch
    const handleInteraction = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 300);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("scroll", handleInteraction);
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      // window.removeEventListener("load", refreshScrollTrigger);
      // document.removeEventListener("DOMContentLoaded", refreshScrollTrigger);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default App
