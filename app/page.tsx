import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ExperienceSection from "@/components/experience-section"
import PortfolioSection from "@/components/portfolio-section"
import CertificatesSection from "@/components/certificates-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ExperienceSection />
        <PortfolioSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
