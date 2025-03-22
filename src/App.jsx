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
    function refreshScrollTrigger() {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500); // Delay to ensure proper calculations
    }

    window.addEventListener("load", refreshScrollTrigger);
    document.addEventListener("DOMContentLoaded", refreshScrollTrigger);

    return () => {
      window.removeEventListener("load", refreshScrollTrigger);
      document.removeEventListener("DOMContentLoaded", refreshScrollTrigger);
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
