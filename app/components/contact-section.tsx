"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle,
  Sparkles,
  MessageCircle,
  Clock,
  Globe,
  ArrowRight,
  Zap
} from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const whatsappMessage = `Hello Arc Digital Solution 👋

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Service: ${service}

Message:
${message}
`;

    const phoneNumber = "917719902074";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
    setIsSubmitted(true);

    // Reset after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "contact@arcdigital.com",
      link: "mailto:contact@arcdigital.com",
      color: "#FFD400"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+91 7719902074",
      link: "tel:+917719902074",
      color: "#FFD400"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Pune, Maharashtra, India",
      link: null,
      color: "#FFD400"
    },
    { 
      icon: Clock, 
      label: "Working Hours", 
      value: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: null,
      color: "#FFD400"
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contact" 
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
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#FFD400]/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FFD400]/3 rounded-full blur-[120px] animate-float-delayed" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#FFD400] rounded-full animate-particle-1" />
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-[#FFD400] rounded-full animate-particle-2" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#FFD400] rounded-full animate-particle-3" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-[#FFD400] animate-spin-slow" />
            <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
              Get In Touch
            </span>
            <Sparkles className="w-5 h-5 text-[#FFD400] animate-spin-slow" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Start Your <span className="text-[#FFD400]">Project?</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your digital presence and grow your business.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className={`group relative transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="relative bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-2xl p-6 hover:border-[#FFD400]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD400]/10 overflow-hidden">
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD400]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative flex items-start gap-4">
                      {/* Animated Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center group-hover:bg-[#FFD400] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                          <Icon className="w-6 h-6 text-[#FFD400] group-hover:text-slate-900 transition-all duration-300 icon-float" />
                        </div>
                        <div className="absolute inset-0 w-14 h-14 rounded-xl bg-[#FFD400]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
                      </div>

                      <div className="flex-1">
                        <p className="text-sm font-semibold text-slate-400 mb-1 group-hover:text-[#FFD400] transition-colors duration-300">
                          {item.label}
                        </p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            className="text-white font-medium group-hover:text-[#FFD400] transition-colors duration-300 flex items-center gap-2"
                          >
                            {item.value}
                            <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                          </a>
                        ) : (
                          <p className="text-white font-medium group-hover:text-slate-200 transition-colors duration-300">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-2xl" />
                  </div>
                </div>
              );
            })}

            {/* WhatsApp Quick Link */}
            <div className={`transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <a
                href="https://wa.me/917719902074"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#25D366]/30 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <div className="relative flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-7 h-7 text-white animate-bounce" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Chat on WhatsApp</p>
                    <p className="text-white/80 text-sm">Get instant response</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white ml-auto group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative bg-slate-900/50 border border-slate-800 backdrop-blur-sm rounded-3xl p-8 lg:p-10 overflow-hidden group hover:border-[#FFD400]/50 transition-all duration-500">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFD400]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {isSubmitted ? (
                <div className="relative text-center py-16 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 border-4 border-green-500 rounded-full mb-6 animate-scale-in">
                    <CheckCircle className="w-10 h-10 text-green-500 animate-check" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">WhatsApp Opened!</h3>
                  <p className="text-slate-400 text-lg mb-6">
                    Please send the message in WhatsApp to complete your inquiry.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-[#FFD400]">
                    <Zap className="w-5 h-5 animate-pulse" />
                    <span className="text-sm font-semibold">We typically respond within 5 minutes</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="group/field">
                      <Label className="text-slate-300 mb-2 block group-focus-within/field:text-[#FFD400] transition-colors duration-300">
                        First Name
                      </Label>
                      <div className="relative">
                        <Input 
                          name="firstName" 
                          required 
                          onFocus={() => setFocusedField('firstName')}
                          onBlur={() => setFocusedField(null)}
                          className="bg-slate-800/50 border-slate-700 text-white focus:border-[#FFD400] focus:ring-[#FFD400]/20 transition-all duration-300 pr-10"
                        />
                        <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD400] transition-opacity duration-300 ${focusedField === 'firstName' ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
                      </div>
                    </div>

                    <div className="group/field">
                      <Label className="text-slate-300 mb-2 block group-focus-within/field:text-[#FFD400] transition-colors duration-300">
                        Last Name
                      </Label>
                      <div className="relative">
                        <Input 
                          name="lastName" 
                          required 
                          onFocus={() => setFocusedField('lastName')}
                          onBlur={() => setFocusedField(null)}
                          className="bg-slate-800/50 border-slate-700 text-white focus:border-[#FFD400] focus:ring-[#FFD400]/20 transition-all duration-300 pr-10"
                        />
                        <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#FFD400] transition-opacity duration-300 ${focusedField === 'lastName' ? 'opacity-100 animate-pulse' : 'opacity-0'}`} />
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group/field">
                    <Label className="text-slate-300 mb-2 block group-focus-within/field:text-[#FFD400] transition-colors duration-300">
                      Email Address
                    </Label>
                    <div className="relative">
                      <Input 
                        name="email" 
                        type="email" 
                        required 
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="bg-slate-800/50 border-slate-700 text-white focus:border-[#FFD400] focus:ring-[#FFD400]/20 transition-all duration-300 pr-10"
                      />
                      <Mail className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-300 ${focusedField === 'email' ? 'text-[#FFD400] scale-110' : 'text-slate-500'}`} />
                    </div>
                  </div>

                  {/* Company */}
                  <div className="group/field">
                    <Label className="text-slate-300 mb-2 block group-focus-within/field:text-[#FFD400] transition-colors duration-300">
                      Company Name (Optional)
                    </Label>
                    <div className="relative">
                      <Input 
                        name="company"
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className="bg-slate-800/50 border-slate-700 text-white focus:border-[#FFD400] focus:ring-[#FFD400]/20 transition-all duration-300 pr-10"
                      />
                      <Globe className={`absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-300 ${focusedField === 'company' ? 'text-[#FFD400] scale-110' : 'text-slate-500'}`} />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="group/field">
                    <Label className="text-slate-300 mb-2 block group-focus-within/field:text-[#FFD400] transition-colors duration-300">
                      Service Interested In
                    </Label>
                    <select
                      name="service"
                      required
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full h-11 bg-slate-800/50 border border-slate-700 text-white rounded-lg px-4 focus:border-[#FFD400] focus:ring-2 focus:ring-[#FFD400]/20 transition-all duration-300 outline-none"
                    >
                      <option value="">Select a service</option>
                      <option>Website Development</option>
                      <option>Website Maintenance</option>
                      <option>SEO Optimization</option>
                      <option>Hosting & Support</option>
                      <option>E-Commerce Solutions</option>
                      <option>Custom Web Applications</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="group/field">
                    <Label className="text-slate-300 mb-2 block group-focus-within/field:text-[#FFD400] transition-colors duration-300">
                      Your Message
                    </Label>
                    <Textarea 
                      name="message" 
                      rows={5} 
                      required
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className="bg-slate-800/50 border-slate-700 text-white focus:border-[#FFD400] focus:ring-[#FFD400]/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-[#FFD400] text-slate-900 hover:bg-[#FFC700] font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#FFD400]/50 hover:scale-105 group/button relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/button:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center justify-center gap-3">
                      Get a Quote on WhatsApp
                      <Send className="w-5 h-5 group-hover/button:translate-x-1 group-hover/button:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </Button>

                  <p className="text-center text-sm text-slate-400">
                    By submitting this form, you'll be redirected to WhatsApp to complete your inquiry.
                  </p>
                </form>
              )}

              {/* Top Border Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-3xl" />
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

        @keyframes icon-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scale-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes check {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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

        .icon-float {
          animation: icon-float 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-scale-in {
          animation: scale-in 0.6s ease-out;
        }

        .animate-check {
          animation: check 0.6s ease-out;
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </section>
  );
}