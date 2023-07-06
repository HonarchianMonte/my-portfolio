import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Social from "./components/Social";

export default function App() {
  return (
    <div className= "text-gray-400 bg-gray-900">
      <Navbar/>
      <div className="bg-gray-900">
        <Social/>
        <About />
        <Education/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}