"use client";

import { useEffect, useRef, useState } from "react";
import {
  Users,
  Zap,
  Shield,
  HeadphonesIcon,
  Award,
  Target,
  TrendingUp,
  Clock,
  Check,
  Star,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import styles from "./why-us.module.css";

const mainFeatures = [
  {
    title: "Expert Team",
    description: "Our team of certified professionals brings years of industry experience to every project we undertake.",
    icon: Users,
    stat: "10+",
    statLabel: "Experts",
  },
  {
    title: "Fast Delivery",
    description: "We use agile methodologies to deliver projects on time without compromising on quality or performance.",
    icon: Zap,
    stat: "5x",
    statLabel: "Faster",
  },
  {
    title: "Secure Solutions",
    description: "Security is built into everything we do. Your data and applications are protected with industry-leading practices.",
    icon: Shield,
    stat: "100%",
    statLabel: "Secure",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support ensures your systems are always running smoothly. We're here whenever you need us.",
    icon: HeadphonesIcon,
    stat: "24/7",
    statLabel: "Available",
  },
];

const additionalBenefits = [
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing protocols ensure flawless delivery every time.",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "We focus on delivering measurable ROI and business growth.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Built to grow with your business from startup to enterprise.",
  },
  {
    icon: Clock,
    title: "Agile Methodology",
    description: "Flexible and adaptive approach to project management.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered", description: "Successful projects across industries" },
  { value: "99%", label: "Client Satisfaction", description: "Clients rate us 5 stars" },
  { value: "5+", label: "Years Experience", description: "In digital solutions" },
  { value: "10+", label: "Team Members", description: "Expert professionals" },
];

const whyChoosePoints = [
  "Proven track record of successful project delivery",
  "Cutting-edge technology stack and tools",
  "Transparent communication throughout the project",
  "Competitive pricing with no hidden costs",
  "Post-launch support and maintenance",
  "Dedicated account manager for each project",
];

export default function WhyUsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animated counter effect
  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const targets = [500, 98, 10, 50];
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounters(targets.map(target =>
          Math.floor(target * easeOutQuart(progress))
        ));

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounters(targets);
        }
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const easeOutQuart = (x: number): number => {
    return 1 - Math.pow(1 - x, 4);
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Background Effects */}
        <div className={styles.heroBg}>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #FFD400 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className={styles.heroFloat1} />
        <div className={styles.heroFloat2} />

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className="inline-block mb-4">
              <span className={styles.badge}>
                Why Choose Us
              </span>
            </div>

            <h1 className={styles.title}>
              We Build Digital Solutions That Drive{" "}
              <span className={styles.highlight}>
                Results
              </span>
            </h1>

            <p className={styles.subtitle}>
              With over a decade of experience in delivering IT solutions, we understand what it takes
              to build successful digital products. Our client-first approach ensures your vision becomes reality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section
        ref={sectionRef}
        className={styles.statsSection}
      >
        <div className={styles.heroContent}>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group ${styles.statItem} ${isVisible ? styles.statItemVisible : styles.statItemHidden
                  }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={styles.statValueContainer}>
                  <p className={styles.statValue}>
                    {index === 0 ? `${counters[index]}+` :
                      index === 1 ? `${counters[index]}%` :
                        index === 2 ? `${counters[index]}+` :
                          `${counters[index]}+`}
                  </p>
                  <div className={styles.statGlow} />
                </div>
                <p className={styles.statLabel}>
                  {stat.label}
                </p>
                <p className={styles.statDesc}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className={styles.featuresSection}>
        <div className={styles.heroContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Core <span className="text-[#FFD400]">Strengths</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Four pillars that make us the preferred choice for businesses worldwide.
            </p>
          </div>

          <div className={styles.featuresGrid}>
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`group ${styles.featureCardWrapper}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={styles.featureCard}>

                  <div className={styles.featureBgGrad} />
                  <div className={styles.featureTopLine} />

                  <div className={styles.featureHeader}>
                    <div className="relative">
                      <div className={styles.featureIconWrapper}>
                        <feature.icon className={styles.featureIcon} />
                      </div>
                      <div className={styles.featureIconGlow} />
                    </div>

                    <div className="text-right">
                      <p className={styles.featureStatVal}>
                        {feature.stat}
                      </p>
                      <p className={styles.featureStatLabel}>
                        {feature.statLabel}
                      </p>
                    </div>
                  </div>

                  <h3 className={styles.featureTitle}>
                    {feature.title}
                  </h3>
                  <p className={styles.featureDesc}>
                    {feature.description}
                  </p>

                  <div className={styles.featureBottomLine} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className={styles.benefitsSection}>
        <div className={styles.heroContent}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Additional <span className="text-[#FFD400]">Benefits</span>
            </h2>
          </div>

          <div className={styles.benefitsGrid}>
            {additionalBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`group ${styles.benefitCard}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={styles.benefitIconWrapper}>
                  <benefit.icon className={styles.benefitIcon} />
                </div>
                <h3 className={styles.benefitTitle}>
                  {benefit.title}
                </h3>
                <p className={styles.benefitDesc}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Points */}
      <section className={styles.reasonsSection}>
        <div className={styles.reasonsContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              More Reasons to <span className="text-[#FFD400]">Choose Us</span>
            </h2>
          </div>

          <div className={styles.reasonsGrid}>
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className={styles.reasonCard}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={styles.reasonIconWrapper}>
                  <Check className={styles.reasonIcon} />
                </div>
                <p className={styles.reasonText}>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.reasonsContainer}>
          <div className={styles.ctaWrapper}>
            <div className={styles.ctaBgGrad} />

            <div className="relative">
              <h2 className={styles.ctaTitle}>
                Ready to Transform Your Business?
              </h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how our team can help you achieve your digital goals.
              </p>

              <div className={styles.ctaButtons}>
                <Link
                  href="#contact"
                  className={styles.ctaPrimary}
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/portfolio"
                  className={styles.ctaSecondary}
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}