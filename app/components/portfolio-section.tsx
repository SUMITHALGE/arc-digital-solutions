"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, ShoppingCart, Briefcase, Layout } from "lucide-react";

const categories = ["All", "Web Development", "E-Commerce", "Enterprise"];

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Enterprise",
    description: "A comprehensive financial management platform with real-time analytics and reporting.",
    tags: ["React", "Node.js", "PostgreSQL"],
    icon: Layout,
    stats: { metric: "40%", label: "Efficiency Boost" },
  },
  {
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description: "Full-featured online store with inventory management and payment integration.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    icon: ShoppingCart,
    stats: { metric: "250%", label: "Sales Growth" },
  },
  {
    title: "Healthcare Portal",
    category: "Web Development",
    description: "Patient management system with appointment scheduling and medical records.",
    tags: ["Vue.js", "Django", "AWS"],
    icon: Code,
    stats: { metric: "10K+", label: "Active Users" },
  },
  {
    title: "Real Estate App",
    category: "Web Development",
    description: "Property listing platform with virtual tours and agent matching system.",
    tags: ["React", "Firebase", "Maps API"],
    icon: Briefcase,
    stats: { metric: "5K+", label: "Properties" },
  },
  {
    title: "SaaS Analytics",
    category: "Enterprise",
    description: "Business intelligence tool with customizable dashboards and data visualization.",
    tags: ["Angular", "Python", "Redis"],
    icon: Layout,
    stats: { metric: "99.9%", label: "Uptime" },
  },
  {
    title: "Retail Management",
    category: "E-Commerce",
    description: "Complete retail solution with POS integration and multi-location inventory.",
    tags: ["Next.js", "GraphQL", "MySQL"],
    icon: ShoppingCart,
    stats: { metric: "30+", label: "Locations" },
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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
      id="portfolio" 
      className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#FFD400 1px, transparent 1px), linear-gradient(90deg, #FFD400 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-2 h-2 bg-[#FFD400] rounded-full animate-particle-1" />
        <div className="absolute top-60 right-40 w-2 h-2 bg-[#FFD400] rounded-full animate-particle-2" />
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-[#FFD400] rounded-full animate-particle-3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-block mb-4">
            <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
              Our Work
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Featured <span className="text-[#FFD400] inline-block hover:scale-110 transition-transform duration-300">Projects</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects across various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}>
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#FFD400] text-slate-900 shadow-lg shadow-[#FFD400]/50 scale-105'
                  : 'bg-slate-800/50 text-slate-400 border border-slate-700 hover:border-[#FFD400]/50 hover:text-[#FFD400]'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative h-full bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl overflow-hidden hover:border-[#FFD400]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FFD400]/20 hover:-translate-y-2">
                
                {/* Image/Icon Container */}
                <div className="relative h-56 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
                  {/* Animated Icon Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="w-24 h-24 rounded-2xl bg-[#FFD400]/10 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#FFD400] transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                        <project.icon className="w-12 h-12 text-[#FFD400] group-hover:text-slate-900 transition-all duration-500 icon-bounce" />
                      </div>
                      
                      {/* Icon Glow */}
                      <div className="absolute inset-0 w-24 h-24 rounded-2xl bg-[#FFD400]/40 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                      
                      {/* Orbiting Rings */}
                      <div className="absolute inset-0 w-24 h-24 border-2 border-[#FFD400]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping-slow" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-slate-900/80 backdrop-blur-sm border border-[#FFD400]/30">
                    <span className="text-xs font-semibold text-[#FFD400] tracking-wide">
                      {project.category}
                    </span>
                  </div>

                  {/* Stat Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-[#FFD400]/10 backdrop-blur-sm border border-[#FFD400]/30 group-hover:bg-[#FFD400] transition-all duration-300">
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-bold text-[#FFD400] group-hover:text-slate-900 transition-colors duration-300">
                        {project.stats.metric}
                      </span>
                    </div>
                  </div>

                  {/* View Button */}
                  <button className="absolute bottom-4 right-4 h-10 w-10 rounded-full bg-slate-900/80 backdrop-blur-sm border border-[#FFD400]/30 flex items-center justify-center hover:bg-[#FFD400] transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:scale-110">
                    <ExternalLink className="h-5 w-5 text-[#FFD400] group-hover:text-slate-900 transition-colors duration-300" />
                  </button>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD400] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium text-slate-400 bg-slate-800/50 rounded-full border border-slate-700 group-hover:border-[#FFD400]/30 group-hover:text-[#FFD400] transition-all duration-300"
                        style={{
                          transitionDelay: `${tagIndex * 50}ms`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
                </div>

                {/* Corner Accent Dots */}
                <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframe Animations */}
      <style jsx>{`
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

        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
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

        .icon-bounce {
          animation: icon-bounce 2s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}