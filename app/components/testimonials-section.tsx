"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    content: "Arc Digital Solution transformed our outdated website into a modern, high-performing platform. Our conversions increased by 150% within the first month. Their team is incredibly professional and responsive.",
    author: "Sarah Mitchell",
    role: "CEO, TechVentures Inc.",
    avatar: "SM",
  },
  {
    content: "The SEO optimization service delivered exceptional results. We went from page 5 to page 1 for our main keywords. Their data-driven approach and transparent reporting made all the difference.",
    author: "James Rodriguez",
    role: "Marketing Director, GrowthLabs",
    avatar: "JR",
  },
  {
    content: "Outstanding support and maintenance service. They've been managing our infrastructure for 3 years now, and we've had zero downtime. Their proactive approach to security gives us peace of mind.",
    author: "Emily Chen",
    role: "CTO, DataFlow Systems",
    avatar: "EC",
  },
  {
    content: "From initial concept to final deployment, the team exceeded our expectations. The custom web application they built has streamlined our operations and saved us countless hours every week.",
    author: "Michael Thompson",
    role: "Operations Manager, LogiPro",
    avatar: "MT",
  },
  {
    content: "Best decision we made was partnering with Arc Digital Solution. They don't just deliver projects; they become true partners in your success. Highly recommend for any business serious about digital growth.",
    author: "Amanda Foster",
    role: "Founder, BrightPath Consulting",
    avatar: "AF",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="min-w-full border-none shadow-none bg-transparent"
                >
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                        <Quote className="h-6 w-6 text-primary" />
                      </div>
                      <blockquote className="text-xl sm:text-2xl font-medium text-foreground max-w-3xl text-balance leading-relaxed">
                        &ldquo;{testimonial.content}&rdquo;
                      </blockquote>
                      <div className="mt-8 flex items-center gap-4">
                        <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                          {testimonial.avatar}
                        </div>
                        <div className="text-left">
                          <p className="font-semibold text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full bg-transparent"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-muted hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full bg-transparent"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
