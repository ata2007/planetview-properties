import DemoRibbon from './components/DemoRibbon.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import SearchBar from './components/SearchBar.jsx'
import FeaturedProperties from './components/FeaturedProperties.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-700 antialiased">
      <DemoRibbon />
      <Navbar />
      <main>
        <Hero />
        <SearchBar />
        <FeaturedProperties />
        <About />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
