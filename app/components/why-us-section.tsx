"use client";

import { Users, Zap, Shield, HeadphonesIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
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

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Team Members" },
];

export default function WhyUsSection() {
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
      { threshold: 0.2 }
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
      const targets = [50, 99, 5, 10];
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
    <section 
      ref={sectionRef}
      id="why-us" 
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Animated Background */}
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFD400]/5 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFD400]/3 rounded-full blur-[120px] animate-float-delayed" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="inline-block mb-4">
              <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
                Why Choose Us
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              We Build Digital Solutions That Drive{" "}
              <span className="text-[#FFD400] inline-block hover:scale-105 transition-transform duration-300">
                Results
              </span>
            </h2>
            
            <p className="text-lg text-slate-400 leading-relaxed">
              With over a 5+ years of experience in delivering IT solutions, we understand what it takes to build successful digital products. Our client-first approach ensures your vision becomes reality.
            </p>

            {/* Animated Stats Grid */}
            <div className="mt-10 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`group transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <p className="text-4xl font-bold text-[#FFD400] group-hover:scale-110 transition-transform duration-300">
                      {index === 0 ? `${counters[index]}+` :
                       index === 1 ? `${counters[index]}%` :
                       index === 2 ? `${counters[index]}+` :
                       `${counters[index]}+`}
                    </p>
                    <div className="absolute -inset-2 bg-[#FFD400]/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </div>
                  <p className="text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition-colors duration-300">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`relative group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${index % 2 === 1 ? "sm:mt-8" : ""}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="relative h-full p-6 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-[#FFD400]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFD400]/10 hover:-translate-y-1 overflow-hidden">
                  
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD400]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Top Glow Line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-center justify-between mb-4">
                    {/* Animated Icon Container */}
                    <div className="relative">
                      <div className="h-14 w-14 rounded-xl bg-[#FFD400]/10 flex items-center justify-center group-hover:bg-[#FFD400] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <feature.icon className="h-7 w-7 text-[#FFD400] group-hover:text-slate-900 transition-all duration-300 icon-float" />
                      </div>
                      
                      {/* Icon Glow Effect */}
                      <div className="absolute inset-0 h-14 w-14 rounded-xl bg-[#FFD400]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                      
                      {/* Orbiting Dots */}
                      <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-orbit" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-orbit-reverse" />
                    </div>

                    {/* Stat */}
                    <div className="text-right">
                      <p className="text-3xl font-bold text-white group-hover:text-[#FFD400] transition-colors duration-300 group-hover:scale-110 inline-block">
                        {feature.stat}
                      </p>
                      <p className="text-xs text-slate-400 group-hover:text-[#FFD400]/80 transition-colors duration-300">
                        {feature.statLabel}
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FFD400] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-30px) translateX(-15px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
        }

        @keyframes orbit-reverse {
          0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(30px) rotate(360deg); }
        }

        @keyframes icon-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 3s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 4s linear infinite;
        }

        .icon-float {
          animation: icon-float 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}