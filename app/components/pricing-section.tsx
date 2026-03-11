"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

const PAYMENT_FREQUENCIES = ["monthly", "yearly"] as const;

type Frequency = (typeof PAYMENT_FREQUENCIES)[number];

interface Tier {
    name: string;
    price: Record<Frequency, number>;
    description: string;
    features: string[];
    cta: string;
    popular?: boolean;
    highlighted?: boolean;
}

const TIERS: Tier[] = [
    {
        name: "Starter",
        price: {
            monthly: 9999,
            yearly: 8999,
        },
        description:
            "Perfect for startups and small businesses launching their first website.",
        features: [
            "Up to 5 Pages Website",
            "Mobile Responsive Design",
            "Contact Form Integration",
            "Basic SEO Setup",
            "WhatsApp Chat Integration",
            "7 Days Delivery",
            "1 Month Free Support",
        ],
        cta: "Get Started",
    },
    {
        name: "Business",
        price: {
            monthly: 19999,
            yearly: 17999,
        },
        description:
            "Ideal for growing businesses that need a professional online presence.",
        features: [
            "Up to 10 Pages Website",
            "Custom UI Design",
            "Mobile Responsive",
            "Advanced SEO Setup",
            "Blog / CMS Integration",
            "Google Analytics Setup",
            "WhatsApp & Email Integration",
            "3 Months Support",
        ],
        cta: "Get Started",
        popular: true,
    },
    {
        name: "Premium",
        price: {
            monthly: 39999,
            yearly: 34999,
        },
        description:
            "Best for businesses that require advanced features and scalability.",
        features: [
            "Up to 20 Pages Website",
            "Custom UI/UX Design",
            "CMS Integration",
            "Advanced SEO Optimization",
            "Performance Optimization",
            "Speed Optimization",
            "Security Setup",
            "6 Months Support",
        ],
        cta: "Contact Us",
        highlighted: true,
    },
];

export function PricingSection() {
    const [frequency, setFrequency] = useState<Frequency>("monthly");
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

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

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("en-IN").format(price);
    };

    return (
        <section
            ref={sectionRef}
            id="pricing"
            className="relative py-20 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-[0.03]">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `radial-gradient(circle, #FFD400 1px, transparent 1px)`,
                        backgroundSize: "60px 60px",
                    }}
                />
            </div>

            <div className="absolute top-20 right-10 w-72 h-72 bg-[#FFD400]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFD400]/3 rounded-full blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 -translate-y-10"
                        }`}
                >
                    <div className="inline-block mb-4">
                        <span className="text-[#FFD400] text-sm font-semibold tracking-[0.2em] uppercase border border-[#FFD400]/30 px-4 py-2 rounded-full hover:border-[#FFD400] hover:shadow-lg hover:shadow-[#FFD400]/20 transition-all duration-300">
                            Pricing
                        </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Affordable Pricing for Every{" "}
                        <span className="text-[#FFD400] inline-block hover:scale-110 transition-transform duration-300">
                            Business
                        </span>
                    </h2>
                    <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Choose the perfect plan for your website development needs
                    </p>
                </div>

                {/* Frequency Toggle */}
                <div
                    className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="relative inline-flex items-center bg-slate-800/60 backdrop-blur-sm border border-slate-700 rounded-full p-1">
                        {PAYMENT_FREQUENCIES.map((freq) => (
                            <button
                                key={freq}
                                onClick={() => setFrequency(freq)}
                                className={`relative px-6 py-2.5 text-sm font-semibold rounded-full transition-all duration-300 capitalize ${frequency === freq
                                        ? "bg-[#FFD400] text-slate-900 shadow-lg shadow-[#FFD400]/30"
                                        : "text-slate-400 hover:text-white"
                                    }`}
                            >
                                {freq}
                                {freq === "yearly" && (
                                    <span
                                        className={`ml-1.5 text-xs font-bold ${frequency === "yearly"
                                                ? "text-slate-900/70"
                                                : "text-[#FFD400]"
                                            }`}
                                    >
                                        (Save 10%)
                                    </span>
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {TIERS.map((tier, index) => (
                        <div
                            key={tier.name}
                            className={`group relative transition-all duration-700 ${isVisible
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 translate-y-20"
                                }`}
                            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                        >
                            {/* Popular Badge */}
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                    <div className="flex items-center gap-1.5 bg-[#FFD400] text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FFD400]/30">
                                        <Star className="w-3.5 h-3.5 fill-slate-900" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            {/* Card */}
                            <div
                                className={`relative h-full rounded-2xl p-8 transition-all duration-300 overflow-hidden ${tier.popular
                                        ? "bg-slate-900/80 backdrop-blur-sm border-2 border-[#FFD400]/60 shadow-xl shadow-[#FFD400]/10 hover:shadow-2xl hover:shadow-[#FFD400]/20 hover:-translate-y-3 scale-[1.02]"
                                        : tier.highlighted
                                            ? "bg-slate-900/50 backdrop-blur-sm border border-[#FFD400]/30 hover:border-[#FFD400]/50 hover:shadow-2xl hover:shadow-[#FFD400]/10 hover:-translate-y-2"
                                            : "bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-[#FFD400]/50 hover:shadow-2xl hover:shadow-[#FFD400]/10 hover:-translate-y-2"
                                    }`}
                            >
                                {/* Background Gradient */}
                                <div
                                    className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${tier.popular
                                            ? "from-[#FFD400]/10 via-transparent to-[#FFD400]/5"
                                            : "from-[#FFD400]/5 via-transparent to-transparent"
                                        }`}
                                />

                                {/* Top Accent Line */}
                                <div
                                    className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD400] to-transparent transition-opacity duration-500 rounded-t-2xl ${tier.popular
                                            ? "opacity-100"
                                            : "opacity-0 group-hover:opacity-100"
                                        }`}
                                />

                                <div className="relative">
                                    {/* Tier Name */}
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {tier.name}
                                    </h3>
                                    <p className="text-sm text-slate-400 mb-6 leading-relaxed">
                                        {tier.description}
                                    </p>

                                    {/* Price */}
                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-1">
                                            <span className="text-lg font-semibold text-[#FFD400]">
                                                ₹
                                            </span>
                                            <span className="text-5xl font-bold text-white group-hover:text-[#FFD400] transition-colors duration-300">
                                                {formatPrice(tier.price[frequency])}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-500 mt-1">
                                            per project
                                            {frequency === "yearly" && (
                                                <span className="ml-1 text-[#FFD400]/70">
                                                    · billed yearly
                                                </span>
                                            )}
                                        </p>
                                    </div>

                                    {/* Divider */}
                                    <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6" />

                                    {/* Features */}
                                    <ul className="space-y-3.5 mb-8">
                                        {tier.features.map((feature, idx) => (
                                            <li
                                                key={feature}
                                                className="flex items-start gap-3 text-sm text-slate-300"
                                            >
                                                <div
                                                    className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${tier.popular
                                                            ? "bg-[#FFD400]/20"
                                                            : "bg-[#FFD400]/10"
                                                        }`}
                                                >
                                                    <Check
                                                        className={`w-3 h-3 ${tier.popular
                                                                ? "text-[#FFD400]"
                                                                : "text-[#FFD400]/80"
                                                            }`}
                                                    />
                                                </div>
                                                <span className="group-hover:text-slate-200 transition-colors duration-300">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* CTA Button */}
                                    <Link
                                        href="#contact"
                                        className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full font-semibold transition-all duration-300 ${tier.popular
                                                ? "bg-[#FFD400] text-slate-900 hover:bg-[#FFC700] hover:shadow-xl hover:shadow-[#FFD400]/50 hover:scale-105"
                                                : tier.highlighted
                                                    ? "bg-[#FFD400]/10 text-[#FFD400] border border-[#FFD400]/40 hover:bg-[#FFD400] hover:text-slate-900 hover:scale-105"
                                                    : "bg-slate-800 text-white border border-slate-700 hover:border-[#FFD400]/50 hover:text-[#FFD400] hover:scale-105"
                                            }`}
                                    >
                                        {tier.cta}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>

                                {/* Bottom Gradient Line */}
                                <div
                                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFD400] to-transparent transition-opacity duration-500 rounded-b-2xl ${tier.popular
                                            ? "opacity-60"
                                            : "opacity-0 group-hover:opacity-100"
                                        }`}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
