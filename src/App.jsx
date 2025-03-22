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
    window.addEventListener("load", () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500); // Delay refresh slightly
    });

    return () => {
      window.removeEventListener("load", () => {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 500);
      });
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
