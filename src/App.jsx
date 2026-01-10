import NavBar from './components/NavBar.jsx';
import AboutSection from './sections/AboutSection.jsx';
import CtaBannerSection from './sections/CtaBannerSection.jsx';
import CopyrightFooter from './sections/CopyrightFooter.jsx';
import HeroSection from './sections/HeroSection.jsx';
import PortfolioSection from './sections/PortfolioSection.jsx';
import ServicesSection from './sections/ServicesSection.jsx';
import WhyChooseMeSection from './sections/WhyChooseMeSection.jsx';

export default function App() {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <NavBar />

      <section id="about" className="app-section">
        <AboutSection />
      </section>

      <section id="services" className="app-section">
        <ServicesSection />
      </section>

      <section id="portfolio" className="app-section">
        <PortfolioSection />
      </section>

      <CtaBannerSection />

      <section className="app-section">
        <WhyChooseMeSection />
      </section>

      <CopyrightFooter />
    </>
  );
}
