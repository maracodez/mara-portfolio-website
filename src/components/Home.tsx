import Navbar from "../layouts/navbar"
import Intro from "../layouts/intro"
import About from "../layouts/about"
import Skills from "../layouts/skills"
import Service from "../layouts/service"
import Portfolio from "../layouts/portfolio"
import Contact from "../layouts/Contact"
import Timer from "../layouts/timer"
import FloatingContact from "./FloatingContact"
import FloatingThemeToggle from "./ThemeToggle"
import FloatingWhatsApp from "./FloatingWhatsApp"

const Home = () => {
  return (
    <div>
        <Navbar />
		<section id="home" > <Intro /></section>
		<section id="about"><About /></section>
		<FloatingContact />
		
		<FloatingThemeToggle />
		
		<FloatingWhatsApp />
		<Skills />
		<section id="service"><Service /></section>
		<section id="portfolio"><Portfolio /></section>
		<section id="contact"><Contact /></section>
		<Timer />
    </div>
  )
}

export default Home
