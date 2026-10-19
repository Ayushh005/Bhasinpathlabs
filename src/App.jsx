import { useEffect } from 'react'
import Navbar from './components/Navbar'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Journey from './components/Journey'
import Accreditation from './components/Accreditation'
import Values from './components/Values'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WhyUs />
        <Journey />
        <Accreditation />
        <Values />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
