"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  Code,
  Cloud,
  Palette,
  Headphones,
  Quote,
  Sparkles,
  Linkedin,
  Instagram,
} from "lucide-react";

const services = [
  {
    title: "Website & Web App Development",
    description:
      "Custom-built, high-performance websites and web applications using React, Next.js, and Java Spring Boot.",
    icon: Globe,
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tailored software built to solve unique business challenges — from MVPs for startups to enterprise-grade systems.",
    icon: Code,
  },
  {
    title: "Hosting & Deployment",
    description:
      "Reliable hosting and seamless deployment on AWS and modern cloud platforms with 99.9% uptime guarantee.",
    icon: Cloud,
  },
  {
    title: "UI/UX Optimization",
    description:
      "User-centered design that maximizes engagement, conversions, and overall digital experience quality.",
    icon: Palette,
  },
  {
    title: "Ongoing Support & Maintenance",
    description:
      "Continuous monitoring, updates, security patches, and performance tuning to keep your products running flawlessly.",
    icon: Headphones,
  },
];

export default function FounderPage() {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-section");
            if (id === "hero") setIsHeroVisible(true);
            if (id === "about") setIsAboutVisible(true);
            if (id === "services") setIsServicesVisible(true);
            if (id === "mission") setIsMissionVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    [heroRef, aboutRef, servicesRef, missionRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="bg-slate-950">
        {/* ─── HERO / FOUNDER SECTION ─── */}
        <section
          ref={heroRef}
          data-section="hero"
          className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
        >
          {/* Decorative Orbs */}
          <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#FFD400]/10 rounded-full blur-[100px] animate-pulse" />
          <div
            className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "2s" }}
          />

          {/* Grid Background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#FFD400 1px, transparent 1px), linear-gradient(90deg, #FFD400 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left — Text */}
              <div
                className={`text-center lg:text-left transition-all duration-1000 ${isHeroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
              >
                <div className="inline-block mb-4">
                  <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
                    Founder
                  </span>
                </div>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter text-white mb-6">
                  Sumit{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD400] via-[#FFB800] to-[#FF8A00] animate-gradient-x">
                    Halge
                  </span>
                </h1>

                <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
                  Building scalable digital solutions for modern businesses
                </p>

                <p className="text-base text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
                  Sumit Halge is the Founder of Arc Digital Solution, a
                  results-driven digital agency focused on helping startups and
                  small businesses grow online with powerful, scalable technology
                  solutions.
                </p>

                <Button
                  size="lg"
                  asChild
                  className="group relative gap-2 bg-[#FFD400] text-slate-950 font-bold hover:bg-[#FFC700] hover:scale-105 transition-all duration-300 px-8 py-6 rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,212,0,0.3)] border-0"
                >
                  <Link
                    href="https://sumithalge.online"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative flex items-center gap-2">
                      Visit My Portfolio
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>

                {/* Social Links */}
                <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
                  <a
                    href="https://www.linkedin.com/in/sumithalge7/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative h-12 w-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-[#FFD400] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FFD400]/30"
                    aria-label="LinkedIn"
                  >
                    <div className="absolute inset-0 rounded-xl bg-[#FFD400]/10 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                    <Linkedin className="relative w-5 h-5 text-slate-400 group-hover/social:text-[#FFD400] transition-all duration-300 group-hover/social:scale-110" />
                  </a>
                  <a
                    href="https://www.instagram.com/definitely_not__72/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social relative h-12 w-12 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-[#FFD400] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FFD400]/30"
                    aria-label="Instagram"
                  >
                    <div className="absolute inset-0 rounded-xl bg-[#FFD400]/10 opacity-0 group-hover/social:opacity-100 transition-opacity duration-300" />
                    <Instagram className="relative w-5 h-5 text-slate-400 group-hover/social:text-[#FFD400] transition-all duration-300 group-hover/social:scale-110" />
                  </a>
                </div>
              </div>

              {/* Right — Image */}
              <div
                className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isHeroVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                  }`}
              >
                <div className="relative group">
                  {/* Ambient glow behind the card */}
                  <div className="absolute -inset-6 bg-gradient-to-br from-[#FFD400]/15 via-transparent to-[#FF8A00]/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

                  {/* Gold accent bar on the left */}
                  <div className="absolute -left-1 top-8 bottom-8 w-1 bg-gradient-to-b from-[#FFD400] via-[#FFB800] to-[#FF8A00] rounded-full opacity-80 group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(255,212,0,0.5)] transition-all duration-500" />

                  {/* Main image card */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-800 group-hover:border-[#FFD400]/40 transition-all duration-500 shadow-2xl shadow-black/40 group-hover:shadow-[#FFD400]/10">
                    <Image
                      src="/team/sumit.png"
                      alt="Sumit Halge — Founder of Arc Digital Solution"
                      width={480}
                      height={600}
                      className="object-cover object-top w-[300px] h-[380px] sm:w-[380px] sm:h-[480px] lg:w-[440px] lg:h-[540px] group-hover:scale-[1.03] transition-transform duration-700"
                      priority
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                    {/* Bottom name badge */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#FFD400] animate-pulse" />
                        <span className="text-sm font-semibold text-[#FFD400] tracking-wide uppercase">
                          Founder & CEO
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Golden balls on hover */}
                  <div className="absolute -top-2 -left-2 w-3 h-3 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 shadow-lg shadow-[#FFD400]/50" />
                  <div className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 delay-75 shadow-lg shadow-[#FFD400]/50" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 delay-150 shadow-lg shadow-[#FFD400]/50" />
                  <div className="absolute -bottom-2 -right-2 w-3 h-3 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500 delay-200 shadow-lg shadow-[#FFD400]/50" />
                  <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500 delay-100 shadow-lg shadow-[#FFD400]/50" />
                  <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-80 group-hover:scale-125 transition-all duration-500 delay-175 shadow-lg shadow-[#FFD400]/50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT SECTION ─── */}
        <section
          ref={aboutRef}
          data-section="about"
          className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
        >
          {/* Dot grid */}
          <div className="absolute inset-0 opacity-[0.02]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, #FFD400 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div
              className={`transition-all duration-1000 ${isAboutVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
                }`}
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-[#FFD400] animate-spin-slow" />
                <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
                  About
                </span>
                <Sparkles className="w-5 h-5 text-[#FFD400] animate-spin-slow" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
                Technical{" "}
                <span className="text-[#FFD400]">Expertise</span>
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-slate-300 leading-relaxed">
                  With a strong foundation in{" "}
                  <span className="text-[#FFD400] font-semibold">
                    Java (Spring Boot)
                  </span>{" "}
                  and{" "}
                  <span className="text-[#FFD400] font-semibold">React.js</span>
                  , he specializes in building high-performance web applications,
                  modern user interfaces, and reliable backend systems.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  He combines technical expertise with a deep understanding of
                  business needs to deliver solutions that are not just
                  functional—but growth-oriented.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SERVICES SECTION ─── */}
        <section
          ref={servicesRef}
          data-section="services"
          className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
        >
          {/* Grid background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(#FFD400 1px, transparent 1px), linear-gradient(90deg, #FFD400 1px, transparent 1px)`,
                backgroundSize: "50px 50px",
                animation: "gridMove 20s linear infinite",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isServicesVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
                }`}
            >
              <div className="inline-block mb-4">
                <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
                  What I Offer
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Core{" "}
                <span className="text-[#FFD400] inline-block hover:scale-110 transition-transform duration-300">
                  Services
                </span>
              </h2>
              <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                End-to-end digital solutions to help your business thrive
                online.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className={`group relative transition-all duration-700 ${isServicesVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                      }`}
                    style={{
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:border-[#FFD400]/50 hover:shadow-2xl hover:shadow-[#FFD400]/10 hover:-translate-y-2 hover:scale-[1.02]">
                      {/* Top Accent Line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />

                      {/* Icon */}
                      <div className="mb-6 relative">
                        <div className="w-14 h-14 rounded-xl bg-[#FFD400]/10 border-2 border-[#FFD400]/30 flex items-center justify-center group-hover:bg-[#FFD400] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="w-7 h-7 text-[#FFD400] group-hover:text-slate-900 transition-all duration-300" />
                        </div>
                        <div className="absolute inset-0 w-14 h-14 rounded-xl bg-[#FFD400]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD400] transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                        {service.description}
                      </p>

                      {/* Bottom Gradient Accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD400]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Corner Accent */}
                      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── MISSION SECTION ─── */}
        <section
          ref={missionRef}
          data-section="mission"
          className="relative py-20 lg:py-28 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
        >
          {/* Floating Orbs */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#FFD400]/5 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFD400]/3 rounded-full blur-[120px] animate-float-delayed" />

          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div
              className={`transition-all duration-1000 ${isMissionVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
                }`}
            >
              <div className="relative bg-slate-900/50 border border-slate-800 backdrop-blur-xl rounded-3xl p-10 lg:p-16 overflow-hidden group hover:border-[#FFD400]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFD400]/20 text-center">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD400]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Quote Icon */}
                <div className="relative flex justify-center mb-8">
                  <Quote className="h-16 w-16 text-[#FFD400]/20 group-hover:text-[#FFD400]/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                  <div className="absolute inset-0 h-16 w-16 mx-auto bg-[#FFD400]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="inline-block mb-6">
                  <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full">
                    Mission
                  </span>
                </div>

                <p className="relative text-2xl lg:text-3xl text-slate-200 leading-relaxed font-light group-hover:text-white transition-colors duration-500">
                  &ldquo;To empower businesses with digital tools that drive
                  real results.&rdquo;
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />

                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div
                  className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(50px);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-30px) translateX(-15px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
}
