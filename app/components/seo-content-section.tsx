"use client";

import { useEffect, useRef, useState } from "react";
import {
  Zap,
  Shield,
  Handshake,
  Rocket,
  Code,
  Globe,
  Search,
  Palette,
  Server,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function SEOContentSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about-arc"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#FFD400 1px, transparent 1px), linear-gradient(90deg, #FFD400 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Main Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full">
            About Us
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Why Arc Digital Solutions Is the{" "}
            <span className="text-[#FFD400]">
              Best Web Development Company in Pune
            </span>
          </h2>
        </div>

        {/* Content Blocks */}
        <div className="space-y-16">
          {/* Block 1: Introduction */}
          <div
            className={`transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed">
                In today&apos;s fast-paced digital landscape, having a strong
                online presence is no longer optional — it&apos;s essential.{" "}
                <strong className="text-white">Arc Digital Solutions</strong>,
                based in{" "}
                <strong className="text-white">Pune, Maharashtra</strong>, is a
                trusted web development company that helps startups, SMEs, and
                enterprises build modern, scalable, and high-performance websites
                and web applications. Whether you need a stunning landing page, a
                complex e-commerce platform, or a custom SaaS application, our
                team delivers results that drive business growth.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mt-4">
                We combine expert knowledge in{" "}
                <strong className="text-white">
                  React, Next.js, Java Spring Boot, TypeScript
                </strong>
                , and modern cloud infrastructure to build websites that are not
                only visually stunning but also lightning-fast, secure, and
                optimized for search engines. Our commitment to quality,
                transparency, and client success has made us one of the most
                trusted and reliable web development companies in Pune.
              </p>
            </div>
          </div>

          {/* Block 2: Services Grid */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              Comprehensive Web Development Services in{" "}
              <span className="text-[#FFD400]">Pune</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: Code, label: "Website Development" },
                { icon: Globe, label: "Web Application Development" },
                { icon: Rocket, label: "React & Next.js Development" },
                { icon: Server, label: "Java Spring Boot APIs" },
                { icon: Palette, label: "UI/UX Design" },
                { icon: Search, label: "SEO Optimization" },
                { icon: Shield, label: "Website Maintenance" },
                { icon: Zap, label: "Landing Page Development" },
              ].map((service, index) => (
                <div
                  key={service.label}
                  className="group flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-[#FFD400]/50 hover:bg-slate-800/50 transition-all duration-300"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <service.icon className="w-5 h-5 text-[#FFD400] flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 3: Fast Delivery */}
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-[#FFD400]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Fast Project Delivery
                </h3>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6">
                Time is money, and we understand that. Arc Digital Solutions
                employs agile development methodologies and modern tooling to
                deliver projects{" "}
                <strong className="text-white">
                  5x faster than traditional agencies
                </strong>{" "}
                in Pune. Our streamlined development process — from requirement
                gathering to deployment — ensures your website or application is
                live in the shortest possible time without compromising on
                quality.
              </p>
              <p className="text-slate-300 leading-relaxed">
                A standard business website is delivered in just{" "}
                <strong className="text-white">1–2 weeks</strong>, while complex
                web applications and e-commerce platforms are completed within{" "}
                <strong className="text-white">4–8 weeks</strong>. We use
                continuous integration, automated testing, and cloud deployment
                pipelines to accelerate delivery while maintaining production-grade
                code quality.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Agile sprints with weekly deliverables",
                "Rapid prototyping and iterative feedback",
                "CI/CD pipelines for automated deployment",
                "Code reviews and quality assurance at every stage",
                "Same-day communication and progress updates",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/50"
                >
                  <CheckCircle className="w-5 h-5 text-[#FFD400] flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Block 4: Trust & Partnership */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFD400]/10 flex items-center justify-center">
                <Handshake className="w-6 h-6 text-[#FFD400]" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Trusted Support & Long-Term Partnership
              </h3>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <p className="text-slate-300 leading-relaxed">
                At Arc Digital Solutions, we don&apos;t just build websites — we
                build{" "}
                <strong className="text-white">lasting partnerships</strong>.
                Our relationship with clients extends far beyond the project
                launch. We provide dedicated post-launch support, proactive
                performance monitoring, and strategic guidance to ensure your
                digital platform continues to grow and evolve with your business
                needs. Pune businesses trust us because we&apos;re transparent,
                responsive, and genuinely invested in their success.
              </p>
              <p className="text-slate-300 leading-relaxed">
                Every project begins with a deep understanding of your business
                goals, target audience, and competitive landscape in Pune and
                beyond. Our team of experienced developers, designers, and SEO
                strategists work together to create a{" "}
                <strong className="text-white">
                  comprehensive digital strategy
                </strong>{" "}
                that aligns with your brand vision. With{" "}
                <strong className="text-white">24/7 support</strong>, 99.9%
                uptime guarantee, and a client satisfaction rate of 99%, we are
                the web development partner that businesses in Maharashtra trust
                for long-term digital growth.
              </p>
            </div>
          </div>

          {/* Block 5: Local SEO Content */}
          <div
            className={`p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Serving Businesses Across{" "}
              <span className="text-[#FFD400]">Pune & Maharashtra</span>
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              As a Pune-based web development company, we understand the unique
              needs of local businesses and the Maharashtra market. From
              Hinjawadi&apos;s IT corridor to Kothrud&apos;s vibrant startup
              ecosystem, Koregaon Park&apos;s creative agencies to Baner&apos;s
              growing enterprise hub — we serve businesses across every corner of
              Pune. Our local expertise combined with global technology standards
              makes us the ideal choice for businesses looking for{" "}
              <strong className="text-white">
                affordable yet world-class web development in Pune
              </strong>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFD400] text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFC700] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD400]/50 hover:scale-105"
              >
                Start Your Project Today
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
