import { Navbar } from '../components/Navbar'
import { HeroSlider } from '../components/HeroSlider'
import { AboutSection } from '../components/AboutSection'
import { ProjectShowcase } from '../components/ProjectShowcase'
import { WhyChooseUs } from '../components/WhyChooseUs'
import { CtaBanner } from '../components/CtaBanner'
import { ClientLogos } from '../components/ClientLogos'
import { Footer } from '../components/Footer'

export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSlider />
        <AboutSection />
        <ProjectShowcase />
        <WhyChooseUs />
        <CtaBanner />
        <ClientLogos />
      </main>
      <Footer />
    </>
  )
}

export default HomePage
