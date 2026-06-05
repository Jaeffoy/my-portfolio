import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { Education } from './components/Education'
import { AboutSection } from './components/AboutSection'
import { Experience } from './components/Experience'
import { ContactSection } from './components/ContactSection'

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div className='bg-[#111827] min-h-screen'>
      <Header/>
      <HeroSection/>
      <Education/>
      <AboutSection/>
      <Experience />
      <ContactSection />
    </div>
  )
}

export default App