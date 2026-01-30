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
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, #FFD400 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFD400]/5 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFD400]/3 rounded-full blur-[120px] animate-float-delayed" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-block mb-4">
              <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
                Why Choose Us
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              We Build Digital Solutions That Drive{" "}
              <span className="text-[#FFD400] inline-block hover:scale-105 transition-transform duration-300">
                Results
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              With over a decade of experience in delivering IT solutions, we understand what it takes 
              to build successful digital products. Our client-first approach ensures your vision becomes reality.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={sectionRef}
        className="relative py-20 border-y border-slate-800"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`group text-center transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative inline-block">
                  <p className="text-5xl lg:text-6xl font-bold text-[#FFD400] group-hover:scale-110 transition-transform duration-300">
                    {index === 0 ? `${counters[index]}+` :
                     index === 1 ? `${counters[index]}%` :
                     index === 2 ? `${counters[index]}+` :
                     `${counters[index]}+`}
                  </p>
                  <div className="absolute -inset-4 bg-[#FFD400]/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
                <p className="text-lg font-semibold text-white mt-3">
                  {stat.label}
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="relative py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Our Core <span className="text-[#FFD400]">Strengths</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Four pillars that make us the preferred choice for businesses worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-full p-8 rounded-2xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:border-[#FFD400]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FFD400]/10 hover:-translate-y-2 overflow-hidden">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD400]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative flex items-start justify-between mb-6">
                    <div className="relative">
                      <div className="h-16 w-16 rounded-xl bg-[#FFD400]/10 flex items-center justify-center group-hover:bg-[#FFD400] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <feature.icon className="h-8 w-8 text-[#FFD400] group-hover:text-slate-900 transition-all duration-300 icon-float" />
                      </div>
                      <div className="absolute inset-0 h-16 w-16 rounded-xl bg-[#FFD400]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                    </div>

                    <div className="text-right">
                      <p className="text-4xl font-bold text-white group-hover:text-[#FFD400] transition-colors duration-300">
                        {feature.stat}
                      </p>
                      <p className="text-xs text-slate-400 group-hover:text-[#FFD400]/80 transition-colors duration-300">
                        {feature.statLabel}
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-[#FFD400] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="relative py-20 bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Additional <span className="text-[#FFD400]">Benefits</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group p-6 rounded-xl border border-slate-800 bg-slate-900/50 hover:border-[#FFD400]/50 transition-all duration-300 hover:-translate-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-[#FFD400]/10 flex items-center justify-center mb-4 group-hover:bg-[#FFD400] group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="w-6 h-6 text-[#FFD400] group-hover:text-slate-900 transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#FFD400] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Points */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              More Reasons to <span className="text-[#FFD400]">Choose Us</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {whyChoosePoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/30 border border-slate-800 hover:border-[#FFD400]/30 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#FFD400]/10 flex items-center justify-center mt-0.5">
                  <Check className="w-4 h-4 text-[#FFD400]" />
                </div>
                <p className="text-slate-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900/50 to-slate-800/50 backdrop-blur-sm border border-slate-700 p-12 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFD400]/5 to-transparent" />
            
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help you achieve your digital goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-[#FFD400] text-slate-900 px-8 py-4 rounded-full font-semibold hover:bg-[#FFC700] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD400]/50 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 bg-transparent border-2 border-[#FFD400] text-[#FFD400] px-8 py-4 rounded-full font-semibold hover:bg-[#FFD400] hover:text-slate-900 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
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

        @keyframes icon-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
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

        .icon-float {
          animation: icon-float 2s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out both;
        }
      `}</style>
    </main>
  );
}