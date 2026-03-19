"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Our Team", href: "/team" },
  { name: "Founder", href: "/founder" },
];

const WHATSAPP_URL = "https://wa.me/917719902074";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = ["services", "why-us", "portfolio", "testimonials"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(current || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl bg-slate-950/95 border-b border-slate-800/50 ${
          scrolled
            ? "shadow-lg shadow-black/20"
            : ""
        }`}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="group flex items-center relative z-10"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative">
                <img
                src="/logo1.svg"
                 alt="Arc Digital Logo"
                 style={{ height: "250px", width: "auto" , marginTop:"15px" }}
                />
                {/* Glow effect on logo */}
                <div className="absolute inset-0 bg-[#FFD400]/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>
              
              <span className="text-2xl font-bold text-white ml-[-12px] relative top-[9px] group-hover:text-[#FFD400] transition-colors duration-300">
                
              </span>
              
              {/* Sparkle effect */}
              <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-[#FFD400] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center lg:gap-1">
              {navigation.map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                      isActive
                        ? "text-[#FFD400]"
                        : "text-slate-300 hover:text-[#FFD400]"
                    }`}
                  >
                    {/* Hover background */}
                    <div className={`absolute inset-0 rounded-lg bg-[#FFD400]/10 transition-all duration-300 ${
                      isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100"
                    }`} />
                    
                    {/* Text */}
                    <span className="relative">{item.name}</span>
                    
                    {/* Active indicator dot */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#FFD400] animate-pulse" />
                    )}
                    
                    {/* Hover underline */}
                    <div className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-[#FFD400] transition-all duration-300 ${
                      isActive ? "w-0" : "w-0 group-hover:w-3/4"
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex lg:items-center lg:gap-4">
              <Button
                asChild
                className="group relative bg-[#FFD400] text-slate-900 hover:bg-[#FFC700] font-semibold px-6 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD400]/50 hover:scale-105 overflow-hidden"
              >
                <Link href={WHATSAPP_URL} target="_blank">
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <span className="relative flex items-center gap-2">
                    Get a Quote
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative group"
              >
                <div className={`transition-all duration-300 ${mobileMenuOpen ? "rotate-90" : "rotate-0"}`}>
                  {mobileMenuOpen ? (
                    <X className="h-6 w-6 text-slate-300" />
                  ) : (
                    <Menu className="h-6 w-6 text-slate-300" />
                  )}
                </div>
                {/* Pulse ring on mobile menu */}
                <div className="absolute inset-0 rounded-lg border-2 border-[#FFD400] opacity-0 group-hover:opacity-100 animate-ping" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-6 border-t border-slate-800 animate-slide-down">
              <div className="flex flex-col gap-2">
                {navigation.map((item, index) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`group px-4 py-3 text-base font-semibold rounded-xl transition-all duration-300 animate-fade-in ${
                        isActive
                          ? "text-[#FFD400] bg-[#FFD400]/10"
                          : "text-slate-300 hover:text-[#FFD400] hover:bg-slate-800/50"
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.name}</span>
                        {isActive && (
                          <div className="w-2 h-2 rounded-full bg-[#FFD400] animate-pulse" />
                        )}
                      </div>
                    </Link>
                  );
                })}
                
                {/* Mobile CTA */}
                <Button
                  asChild
                  className="mt-4 bg-[#FFD400] text-slate-900 hover:bg-[#FFC700] font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#FFD400]/50 animate-fade-in"
                  style={{ animationDelay: "250ms" }}
                >
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Get a Quote
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Spacer to prevent content jump */}
      <div className="h-20" />

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out both;
        }
      `}</style>
    </>
  );
}