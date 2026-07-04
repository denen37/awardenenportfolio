import {useEffect} from "react"
import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Services from "./components/sections/Services"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Certificates from "./components/sections/Certificates"

function App() {
   useEffect(() => {
          AOS.init({
            duration: 600,
            once: true
          });
    }, [])
    
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Projects/>
      <Skills/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
