"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
  {
    question: "What is the best web development company in Pune?",
    answer:
      "Arc Digital Solutions is widely recognized as one of the best web development companies in Pune, Maharashtra. We specialize in modern, scalable web development using React, Next.js, Java Spring Boot, and cutting-edge technologies — delivering fast, SEO-optimized, and responsive websites for startups and businesses across India.",
  },
  {
    question: "How much does website development cost in Pune?",
    answer:
      "Website development costs in Pune vary depending on the project scope and complexity. At Arc Digital Solutions, starter websites begin at ₹14,999, business websites from ₹29,999, and premium custom web applications from ₹49,999. We offer affordable, transparent pricing with no hidden charges — making quality web development accessible to startups and growing businesses in Maharashtra.",
  },
  {
    question: "Why choose Arc Digital Solutions for web development?",
    answer:
      "Arc Digital Solutions is trusted by 50+ businesses for fast delivery (5x faster than traditional agencies), modern technology stack (React, Next.js, Java Spring Boot, TypeScript), 24/7 dedicated support, and SEO-optimized websites. Based in Pune, we provide a client-centric approach with agile development methodologies and long-term partnership support to help your business grow.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "At Arc Digital Solutions, a standard business website typically takes 1–2 weeks, while complex web applications and e-commerce platforms may take 4–8 weeks. Our agile methodology and experienced team ensure 5x faster delivery compared to traditional development approaches — without compromising on quality or performance.",
  },
  {
    question: "Do you offer SEO services in Pune?",
    answer:
      "Yes, Arc Digital Solutions provides comprehensive SEO optimization services in Pune including technical SEO audits, keyword research, on-page and off-page optimization, local SEO for Pune and Maharashtra businesses, Google My Business optimization, and detailed performance analytics to boost your search engine rankings and drive organic traffic.",
  },
  {
    question: "What technologies does Arc Digital Solutions use?",
    answer:
      "We use modern, industry-leading technologies including React, Next.js, Java Spring Boot, TypeScript, Node.js, PostgreSQL, MongoDB, and cloud platforms like AWS and Vercel. Our tech stack ensures fast load times, scalable architectures, and secure web solutions that are built to grow with your business.",
  },
  {
    question: "Do you provide website maintenance and support?",
    answer:
      "Yes, we offer 24/7 website maintenance and support services including security updates, performance optimization, content updates, bug fixes, server monitoring, and regular backups — ensuring your website runs at peak performance with 99.9% uptime guarantee. Our support team is always available to help.",
  },
  {
    question: "Can you build e-commerce websites in Pune?",
    answer:
      "Absolutely. Arc Digital Solutions builds custom e-commerce platforms with secure payment gateway integration (Razorpay, Stripe, PayU), inventory management, responsive mobile-first design, product catalog systems, and SEO optimization — helping Pune businesses sell online effectively and grow their revenue.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, #FFD400 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFD400]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#FFD400]/3 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#FFD400]" />
            <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
              FAQ
            </span>
            <Sparkles className="w-5 h-5 text-[#FFD400]" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently Asked{" "}
            <span className="text-[#FFD400]">Questions</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our web development services in
            Pune. Can&apos;t find your answer?{" "}
            <a
              href="#contact"
              className="text-[#FFD400] hover:underline font-medium"
            >
              Contact us
            </a>
            .
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className={`group relative bg-slate-900/50 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD400]/5 ${
                  openIndex === index
                    ? "border-[#FFD400]/50"
                    : "border-slate-800 hover:border-[#FFD400]/30"
                }`}
              >
                {/* Top Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD400] to-transparent transition-opacity duration-300 ${
                    openIndex === index ? "opacity-100" : "opacity-0"
                  }`}
                />

                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        openIndex === index
                          ? "bg-[#FFD400] text-slate-900"
                          : "bg-[#FFD400]/10 text-[#FFD400]"
                      }`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h3
                      className={`text-base sm:text-lg font-semibold transition-colors duration-300 ${
                        openIndex === index ? "text-[#FFD400]" : "text-white"
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-all duration-300 flex-shrink-0 ml-4 ${
                      openIndex === index
                        ? "rotate-180 text-[#FFD400]"
                        : "rotate-0"
                    }`}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-20">
                    <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-slate-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FFD400] text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFC700] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD400]/50 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
