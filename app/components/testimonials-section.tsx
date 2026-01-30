"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  BadgeCheck,
} from "lucide-react";

const testimonials = [
  {
    content:
      "Arc Digital Solution transformed our outdated website into a modern, high-performing platform. Our conversions increased by 150% within the first month.",
    author: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    avatar: "SM",
    rating: 5,
  },
  {
    content:
      "The SEO optimization service delivered exceptional results. We went from page 5 to page 1 for our main keywords.",
    author: "James Rodriguez",
    role: "Marketing Director, GrowthLabs",
    avatar: "JR",
    rating: 5,
  },
  {
    content:
      "Outstanding support and maintenance service. Zero downtime in 3 years. Their proactive security approach gives peace of mind.",
    author: "Emily Chen",
    role: "CTO, DataFlow Systems",
    avatar: "EC",
    rating: 5,
  },
  {
    content:
      "The custom application streamlined our operations and saved us countless hours every week.",
    author: "Michael Thompson",
    role: "Operations Manager, LogiPro",
    avatar: "MT",
    rating: 4,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Reveal animation (Why-Us style)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto play
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#FFD400]/5 blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="text-[#FFD400] uppercase tracking-widest text-sm border border-[#FFD400]/30 px-4 py-2 rounded-full">
            Testimonials
          </span>
          <h2 className="mt-6 text-4xl font-bold text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((t, index) => (
                <Card
                  key={index}
                  className="min-w-full bg-slate-900/60 border border-slate-800 backdrop-blur rounded-2xl"
                >
                  <CardContent className="p-10 text-center relative">
                    {/* Quote */}
                    <Quote className="h-10 w-10 text-[#FFD400]/30 mx-auto mb-6" />

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-[#FFD400] fill-[#FFD400]"
                        />
                      ))}
                    </div>

                    <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto">
                      “{t.content}”
                    </p>

                    {/* Author */}
                    <div className="mt-8 flex items-center justify-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-[#FFD400]/10 flex items-center justify-center text-[#FFD400] font-semibold">
                        {t.avatar}
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold flex items-center gap-1">
                          {t.author}
                          <BadgeCheck className="h-4 w-4 text-[#FFD400]" />
                        </p>
                        <p className="text-sm text-slate-400">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentIndex(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="rounded-full bg-transparent border-slate-700 hover:border-[#FFD400]"
            >
              <ChevronLeft />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="rounded-full bg-transparent border-slate-700 hover:border-[#FFD400]"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
