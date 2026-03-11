import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { ServicesSection } from "./components/services-section-upgraded";
import { PricingSection } from "./components/pricing-section";
import WhyUsSection from "./components/why-us-section";  // ← NO curly braces!
import { PortfolioSection } from "./components/portfolio-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { ContactSection } from "./components/contact-section";
import { Footer } from "./components/footer";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <WhyUsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}