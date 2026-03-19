"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onLoadedMetadata={(e) => {
          const video = e.target as HTMLVideoElement;
          video.playbackRate = 2; // Adjust speed: 1.5 = 50% faster, 2.0 = 2x speed
        }}
      >
        <source src="/office.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay for more depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-900/30 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-[#FFD400]/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }}></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white text-sm font-medium mb-8 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-default shadow-[0_0_15px_rgba(255,212,0,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD400] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD400]"></span>
                </span>
                Trusted Web Development Company in Pune
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tighter">
                Transform Your Idea's &nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD400] via-[#FFB800] to-[#FF8A00] animate-gradient-x">
                  Into Digital Excellence
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
                Arc Digital Solutions builds fast, modern, and SEO-optimized websites using React, Java Spring Boot, and cutting-edge technologies. Your trusted partner for scalable web applications, UI/UX design, and digital growth in Pune, Maharashtra.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  size="lg"
                  asChild
                  className="group relative gap-2 bg-[#FFD400] text-slate-950 font-bold hover:bg-[#FFC700] hover:scale-105 transition-all duration-300 px-8 py-6 rounded-full overflow-hidden shadow-[0_0_30px_rgba(255,212,0,0.3)] border-0"
                >
                  <Link href="#contact">
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    <span className="relative flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Button>

                <Button
                  size="lg"
                  asChild
                  className="gap-2 border border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/40 transition-all duration-300 px-8 py-6 rounded-full"
                >
                  <Link href="#portfolio">View Our Work</Link>
                </Button>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row items-center gap-x-8 gap-y-4 justify-center lg:justify-start pt-8 border-t border-white/10">
                {["24/7 Premium Support", "99.9% Uptime", "Agile Delivery"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                    <CheckCircle className="h-4 w-4 text-[#FFD400]" />
                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}