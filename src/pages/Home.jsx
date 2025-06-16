import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import Navbar from '../components/navbar'

function Home() {
  return (
    <div className="font-sans">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home;
