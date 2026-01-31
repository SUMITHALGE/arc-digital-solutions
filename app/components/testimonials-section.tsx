"use client";

import { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  BadgeCheck,
  Sparkles,
  TrendingUp,
  Award,
  Zap,
  Shield,
} from "lucide-react";

const testimonials = [
  {
    content:
      "Arc Digital Solution transformed our e-commerce platform completely. Sales increased by 200% within two months. Highly professional team!",
    author: "Rajesh Kumar",
    role: "CEO, Mumbai Electronics",
    company: "Mumbai Electronics",
    avatar: "RK",
    rating: 5,
    icon: TrendingUp,
    color: "#FFD400",
  },
  {
    content:
      "Their SEO services helped us reach the top of search results. Our online visibility has improved dramatically. Excellent work!",
    author: "Priya Sharma",
    role: "Marketing Head, Bangalore Tech Solutions",
    company: "Bangalore Tech",
    avatar: "PS",
    rating: 5,
    icon: Award,
    color: "#FFD400",
  },
  {
    content:
      "Outstanding web development and support. They delivered our project on time and within budget. Very responsive team!",
    author: "Amit Patel",
    role: "Founder, Gujarat Digital Services",
    company: "Gujarat Digital",
    avatar: "AP",
    rating: 5,
    icon: Zap,
    color: "#FFD400",
  },
  {
    content:
      "The custom application they built streamlined our entire business process. Saved us hours of manual work every day!",
    author: "Sneha Reddy",
    role: "Operations Manager, Hyderabad Logistics",
    company: "Hyderabad Logistics",
    avatar: "SR",
    rating: 5,
    icon: Sparkles,
    color: "#FFD400",
  },
  {
    content:
      "Professional, reliable, and innovative. Their hosting and maintenance service kept our website running flawlessly for 2 years without any downtime.",
    author: "Vikram Singh",
    role: "CTO, Delhi FinTech",
    company: "Delhi FinTech",
    avatar: "VS",
    rating: 5,
    icon: Shield,
    color: "#FFD400",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];
  const Icon = currentTestimonial.icon;

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
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
      <div className="absolute top-20 left-20 w-96 h-96 bg-[#FFD400]/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFD400]/3 rounded-full blur-[120px] animate-float-delayed" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#FFD400] rounded-full animate-particle-1" />
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#FFD400] rounded-full animate-particle-2" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#FFD400] rounded-full animate-particle-3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#FFD400] animate-spin-slow" />
            <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
              Testimonials
            </span>
            <Sparkles className="w-5 h-5 text-[#FFD400] animate-spin-slow" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="text-[#FFD400]">Clients</span> Say
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from businesses we've helped transform.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative">
            {/* 3D Card with Perspective */}
            <div 
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{
                transform: `rotateY(${direction * 2}deg)`,
                transition: 'transform 0.7s ease-out, opacity 0.7s ease-out',
              }}
            >
              <div className="relative bg-slate-900/50 border border-slate-800 backdrop-blur-xl rounded-3xl p-8 lg:p-12 overflow-hidden group hover:border-[#FFD400]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFD400]/20">
                
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD400]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border Glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#FFD400]/20 via-transparent to-[#FFD400]/20 animate-border-flow" />
                </div>

                {/* Top Section - Quote Icon & Company Icon */}
                <div className="relative flex items-start justify-between mb-8">
                  {/* Quote Icon */}
                  <div className="relative">
                    <div className="relative">
                      <Quote className="h-16 w-16 text-[#FFD400]/20 group-hover:text-[#FFD400]/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                      <div className="absolute inset-0 h-16 w-16 bg-[#FFD400]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                    </div>
                  </div>

                  {/* Company Icon */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-xl bg-[#FFD400]/10 border-2 border-[#FFD400]/30 flex items-center justify-center group-hover:bg-[#FFD400] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-8 h-8 text-[#FFD400] group-hover:text-slate-900 transition-all duration-300 icon-bounce" />
                    </div>
                    <div className="absolute inset-0 w-16 h-16 rounded-xl bg-[#FFD400]/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="relative flex justify-center gap-2 mb-8">
                  {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                    <div key={i} className="relative">
                      <Star
                        className="h-6 w-6 text-[#FFD400] fill-[#FFD400] group-hover:scale-125 transition-all duration-300 star-twinkle"
                        style={{ 
                          transitionDelay: `${i * 100}ms`,
                          animation: `twinkle 2s ease-in-out ${i * 0.2}s infinite`
                        }}
                      />
                    </div>
                  ))}
                </div>

                {/* Testimonial Content */}
                <div className="relative text-center mb-10">
                  <p className="text-2xl lg:text-3xl text-slate-200 leading-relaxed font-light group-hover:text-white transition-colors duration-500">
                    "{currentTestimonial.content}"
                  </p>
                </div>

                {/* Author Section */}
                <div className="relative flex items-center justify-center gap-6">
                  {/* Animated Avatar */}
                  <div className="relative">
                    {/* Avatar Rings */}
                    <div className="absolute inset-0 rounded-full">
                      <div className="absolute inset-0 rounded-full border-2 border-[#FFD400]/30 animate-ping-slow" />
                      <div className="absolute inset-0 rounded-full border-2 border-[#FFD400]/20 animate-ping-slower" style={{ animationDelay: '1s' }} />
                    </div>

                    {/* Avatar Circle */}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#FFD400] to-[#FFA500] p-1 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-[#FFD400]/50">
                      <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                        <span className="text-2xl font-bold text-[#FFD400] group-hover:scale-110 transition-transform duration-300">
                          {currentTestimonial.avatar}
                        </span>
                      </div>
                    </div>

                    {/* Orbiting Dots */}
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FFD400] animate-orbit shadow-lg shadow-[#FFD400]/50" />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-[#FFD400] animate-orbit-reverse shadow-lg shadow-[#FFD400]/50" />
                  </div>

                  {/* Author Info */}
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-xl font-bold text-white group-hover:text-[#FFD400] transition-colors duration-300">
                        {currentTestimonial.author}
                      </h4>
                      <BadgeCheck className="w-5 h-5 text-[#FFD400] group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {currentTestimonial.role}
                    </p>
                    <p className="text-xs text-[#FFD400]/60 mt-1">
                      {currentTestimonial.company}
                    </p>
                  </div>
                </div>

                {/* Bottom Accent Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
                
                {/* Corner Accents */}
                <div className="absolute top-4 left-4 w-3 h-3 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="absolute bottom-4 right-4 w-3 h-3 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-8 mt-12">
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="group relative w-14 h-14 rounded-full bg-slate-900/80 border-2 border-slate-700 hover:border-[#FFD400] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#FFD400]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#FFD400]/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              <ChevronLeft className="relative w-6 h-6 text-slate-400 group-hover:text-[#FFD400] transition-colors duration-300 group-hover:-translate-x-1" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`relative transition-all duration-300 ${
                    index === currentIndex
                      ? "w-12 h-3"
                      : "w-3 h-3 hover:scale-125"
                  }`}
                >
                  <div className={`w-full h-full rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-[#FFD400] shadow-lg shadow-[#FFD400]/50"
                      : "bg-slate-700 hover:bg-slate-600"
                  }`} />
                  {index === currentIndex && (
                    <div className="absolute inset-0 rounded-full bg-[#FFD400] animate-pulse" />
                  )}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="group relative w-14 h-14 rounded-full bg-slate-900/80 border-2 border-slate-700 hover:border-[#FFD400] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#FFD400]/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#FFD400]/10 translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300" />
              <ChevronRight className="relative w-6 h-6 text-slate-400 group-hover:text-[#FFD400] transition-colors duration-300 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Small Testimonial Previews */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 justify-between pointer-events-none">
            {/* Previous Preview */}
            <div className="w-20 h-20 -translate-x-32 opacity-30 hover:opacity-50 transition-opacity duration-300">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFD400]/20 to-[#FFA500]/20 border border-[#FFD400]/30 flex items-center justify-center">
                <span className="text-sm font-bold text-[#FFD400]">
                  {testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length].avatar}
                </span>
              </div>
            </div>

            {/* Next Preview */}
            <div className="w-20 h-20 translate-x-32 opacity-30 hover:opacity-50 transition-opacity duration-300">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FFD400]/20 to-[#FFA500]/20 border border-[#FFD400]/30 flex items-center justify-center">
                <span className="text-sm font-bold text-[#FFD400]">
                  {testimonials[(currentIndex + 1) % testimonials.length].avatar}
                </span>
              </div>
            </div>
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

        @keyframes particle-1 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(100px, -100px); opacity: 1; }
        }

        @keyframes particle-2 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(-80px, 120px); opacity: 1; }
        }

        @keyframes particle-3 {
          0%, 100% { transform: translate(0, 0); opacity: 0; }
          50% { transform: translate(60px, -80px); opacity: 1; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(45px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(45px) rotate(-360deg); }
        }

        @keyframes orbit-reverse {
          0% { transform: rotate(0deg) translateX(45px) rotate(0deg); }
          100% { transform: rotate(-360deg) translateX(45px) rotate(360deg); }
        }

        @keyframes border-flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.3); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }

        @keyframes ping-slower {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.5); opacity: 0; }
          100% { transform: scale(1); opacity: 0; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
        }

        .animate-particle-1 {
          animation: particle-1 8s ease-in-out infinite;
        }

        .animate-particle-2 {
          animation: particle-2 10s ease-in-out infinite;
        }

        .animate-particle-3 {
          animation: particle-3 12s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .icon-bounce {
          animation: icon-bounce 2s ease-in-out infinite;
        }

        .animate-orbit {
          animation: orbit 4s linear infinite;
        }

        .animate-orbit-reverse {
          animation: orbit-reverse 5s linear infinite;
        }

        .animate-border-flow {
          animation: border-flow 3s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s ease-in-out infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .star-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}