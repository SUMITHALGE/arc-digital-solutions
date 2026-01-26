import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section";
import { WhyUsSection } from "./components/why-us-section";
import { PortfolioSection } from "./components/portfolio-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </>
  );
}
