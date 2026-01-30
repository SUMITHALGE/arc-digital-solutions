"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Settings, Search, Server, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Website Development",
    description: "Custom-built websites and web applications tailored to your business needs. From responsive landing pages to complex enterprise solutions.",
    icon: Code,
    features: ["Custom Design", "Responsive Layout", "Modern Stack"],
  },
  {
    title: "Website Maintenance",
    description: "Keep your website running smoothly with regular updates, security patches, and performance optimization to ensure peak performance.",
    icon: Settings,
    features: ["Security Updates", "Performance Tuning", "Content Updates"],
  },
  {
    title: "SEO Optimization",
    description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies and technical optimization services.",
    icon: Search,
    features: ["Keyword Research", "Technical SEO", "Analytics"],
  },
  {
    title: "Hosting & Support",
    description: "Reliable, secure hosting solutions with 24/7 support. We handle the infrastructure so you can focus on growing your business.",
    icon: Server,
    features: ["99.9% Uptime", "24/7 Support", "Auto Backups"],
  },
];

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#FFD400 1px, transparent 1px), linear-gradient(90deg, #FFD400 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-block mb-4 animate-fade-in">
            <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
              What We Do
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-up">
            Our <span className="text-[#FFD400] inline-block hover:scale-110 transition-transform duration-300">Services</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed animate-slide-up-delayed">
            Comprehensive IT solutions designed to help your business thrive in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{
                transitionDelay: `${index * 150}ms`
              }}
            >
              {/* Card */}
              <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:border-[#FFD400]/50 hover:shadow-2xl hover:shadow-[#FFD400]/10 hover:-translate-y-2 hover:scale-[1.02]">
                
                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#FFD400]/20 via-transparent to-[#FFD400]/20 animate-border-flow" />
                </div>

                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-16 h-16 rounded-xl bg-[#FFD400]/10 flex items-center justify-center group-hover:bg-[#FFD400] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-[#FFD400]/50">
                    <service.icon className="h-8 w-8 text-[#FFD400] group-hover:text-slate-900 transition-all duration-300 group-hover:scale-110" />
                  </div>
                  {/* Icon Glow Effect */}
                  <div className="absolute inset-0 w-16 h-16 rounded-xl bg-[#FFD400]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFD400] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li 
                      key={feature} 
                      className="flex items-center gap-3 text-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1"
                      style={{
                        transitionDelay: `${idx * 50}ms`
                      }}
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-[#FFD400] group-hover:scale-150 transition-transform duration-300" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFD400] group-hover:gap-3 transition-all duration-300 hover:underline"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300 animate-bounce-right" />
                </Link>

                {/* Bottom Gradient Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD400]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FFD400] text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFC700] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD400]/50 hover:scale-105 animate-pulse-subtle"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5 animate-bounce-x" />
          </Link>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes border-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes bounce-right {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(4px); }
        }

        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-up {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-border-flow {
          animation: border-flow 3s linear infinite;
        }

        .animate-bounce-right {
          animation: bounce-right 1s ease-in-out infinite;
        }

        .animate-bounce-x {
          animation: bounce-x 1s ease-in-out infinite;
        }

        .animate-pulse-subtle {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }

        .animate-slide-up-delayed {
          animation: slide-up 0.8s ease-out 0.2s both;
        }
      `}</style>
    </section>
  );
}