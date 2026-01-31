"use client";

import Link from "next/link";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  Heart
} from "lucide-react";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Website Maintenance", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
    { name: "Hosting & Support", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "/team" },
    { name: "Why Choose Us", href: "/why-us" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Portfolio", href: "#portfolio" },
    { name: "Case Studies", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Get a Quote", href: "#contact" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#", color: "#1DA1F2" },
  { name: "LinkedIn", icon: Linkedin, href: "#", color: "#0A66C2" },
  { name: "GitHub", icon: Github, href: "#", color: "#FFD400" },
  { name: "Instagram", icon: Instagram, href: "#", color: "#E4405F" },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-slate-900 text-white overflow-hidden">
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

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD400] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3 mb-6">
              {/* Animated Logo */}
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#FFD400] to-[#FFA500] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#FFD400]/50">
                  <span className="text-slate-900 font-bold text-lg">AD</span>
                </div>
                {/* Orbiting Ring */}
                <div className="absolute inset-0 rounded-xl border-2 border-[#FFD400]/30 opacity-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
              </div>
              <div>
                <span className="text-2xl font-bold text-white group-hover:text-[#FFD400] transition-colors duration-300">
                  Arc Digital
                </span>
                <p className="text-xs text-slate-400">Digital Excellence</p>
              </div>
            </Link>

            <p className="text-slate-400 leading-relaxed mb-6 max-w-sm">
              Transforming businesses through innovative IT solutions. Your trusted partner for digital excellence and growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:contact@arcdigital.com" className="group flex items-center gap-3 text-slate-400 hover:text-[#FFD400] transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#FFD400]/10 transition-colors duration-300">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm">contact@arcdigital.com</span>
              </a>

              <a href="tel:+917719902074" className="group flex items-center gap-3 text-slate-400 hover:text-[#FFD400] transition-colors duration-300">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-[#FFD400]/10 transition-colors duration-300">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm">+91 7719902074</span>
              </a>

              <div className="group flex items-center gap-3 text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Pune, Maharashtra, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group relative h-11 w-11 rounded-xl bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:border-[#FFD400] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FFD400]/30"
                    aria-label={social.name}
                  >
                    {/* Hover Background */}
                    <div className="absolute inset-0 rounded-xl bg-[#FFD400]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <Icon className="relative w-5 h-5 text-slate-400 group-hover:text-[#FFD400] transition-all duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services Links */}
          <div className="group">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFD400]" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li 
                  key={link.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    className="group/link flex items-center gap-2 text-slate-400 hover:text-[#FFD400] transition-all duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="group">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFD400]" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li 
                  key={link.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    className="group/link flex items-center gap-2 text-slate-400 hover:text-[#FFD400] transition-all duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="group">
            <h3 className="font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#FFD400]" />
              Resources
            </h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li 
                  key={link.name}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <Link
                    href={link.href}
                    className="group/link flex items-center gap-2 text-slate-400 hover:text-[#FFD400] transition-all duration-300 text-sm"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-900/50 border border-slate-700 hover:border-[#FFD400]/50 transition-all duration-500 group">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD400] transition-colors duration-300">
                Ready to Start Your Project?
              </h3>
              <p className="text-slate-400 text-sm">
                Get in touch with us today and let's build something amazing together.
              </p>
            </div>
            <Link
              href="#contact"
              className="px-8 py-4 bg-[#FFD400] text-slate-900 rounded-xl font-semibold hover:bg-[#FFC700] transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD400]/50 hover:scale-105 flex items-center gap-2 group/button whitespace-nowrap"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-slate-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Arc Digital Solution. All rights reserved. Made with{" "}
              <Heart className="inline w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              {" "}in India
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              <Link 
                href="#" 
                className="group text-sm text-slate-400 hover:text-[#FFD400] transition-colors duration-300 flex items-center gap-1"
              >
                <span>Privacy Policy</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
              <Link 
                href="#" 
                className="group text-sm text-slate-400 hover:text-[#FFD400] transition-colors duration-300 flex items-center gap-1"
              >
                <span>Terms of Service</span>
                <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-[#FFD400]/50 to-transparent" />

      {/* Keyframe Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out both;
        }
      `}</style>
    </footer>
  );
}