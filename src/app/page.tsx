import HeroSection from '../components/HeroSection/HeroSection';
import ServicesSection from '../components/ServicesSection/ServicesSection';
import AboutSection from '../components/AboutSection/AboutSection';
import BlogSection from '../components/BlogSection/BlogSection';
import ContactSection from '../components/ContactSection/ContactSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
