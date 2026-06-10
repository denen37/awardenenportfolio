import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Services from "./components/sections/Services"
import Projects from "./components/sections/Projects"
import Skills from "./components/sections/Skills"
import Contact from "./components/sections/Contact"
import Footer from "./components/layout/Footer"

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
