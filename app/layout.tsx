import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.arcdigitalsolution.in"),
  title: "Arc Digital Solutions | Best Web Dev Company Pune",
  description: "Arc Digital Solutions — Pune's most trusted web development company. Fast, reliable website development, React, Java Spring Boot, SEO & UI/UX design for startups and businesses in Maharashtra.",
  keywords: "best web development company in Pune, trusted web development company Pune, fast website development services Pune, website design company Pune, affordable web development Pune, React development company Pune, Java Spring Boot development Pune, UI UX design Pune, SEO optimization Pune, landing page development Pune, web application development Pune, e-commerce development Pune, IT company Pune, custom web applications Pune, responsive websites Pune, Maharashtra web development",
  authors: [{ name: "Arc Digital Solutions" }],
  creator: "Arc Digital Solutions",
  publisher: "Arc Digital Solutions",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.arcdigitalsolution.in",
    siteName: "Arc Digital Solutions — Pune",
    title: "Arc Digital Solutions | Trusted Web Development Company in Pune",
    description: "Pune's most trusted and fast web development company. Expert React, Java Spring Boot, UI/UX design, SEO optimization & scalable web applications for startups and businesses across Maharashtra.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arc Digital Solutions — Best Web Development Company in Pune, Maharashtra",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arc Digital Solutions | Best Web Dev Company in Pune",
    description: "Trusted web development company in Pune. React, Java Spring Boot, SEO, UI/UX design — modern, fast & scalable digital solutions.",
    images: ["/twitter-image.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "technology",
  alternates: {
    canonical: "https://www.arcdigitalsolution.in",
  },

  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.5204;73.8567",
    "ICBM": "18.5204, 73.8567",
  },
};

/* ── JSON-LD Schema Data ── */

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  "@id": "https://www.arcdigitalsolution.in/#organization",
  "name": "Arc Digital Solutions",
  "alternateName": "Arc Digital Solution",
  "description": "Arc Digital Solutions is Pune's most trusted and fast web development company, delivering modern, scalable, and SEO-optimized websites for startups, businesses, and entrepreneurs across Maharashtra, India.",
  "url": "https://www.arcdigitalsolution.in",
  "logo": "https://www.arcdigitalsolution.in/logo1.svg",
  "image": "https://www.arcdigitalsolution.in/og-image.png",
  "telephone": "+91-7719902074",
  "email": "contact@arcdigitalsolution.com",
  "priceRange": "₹₹",
  "currenciesAccepted": "INR",
  "paymentAccepted": "Cash, UPI, Bank Transfer",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pune",
    "addressLocality": "Pune",
    "addressRegion": "Maharashtra",
    "postalCode": "411001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 18.5204,
    "longitude": 73.8567
  },
  "areaServed": [
    { "@type": "City", "name": "Pune" },
    { "@type": "State", "name": "Maharashtra" },
    { "@type": "Country", "name": "India" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-7719902074",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi", "Marathi"],
    "areaServed": "IN"
  },
  "founder": {
    "@type": "Person",
    "name": "Arc Digital Solutions Team"
  },
  "knowsAbout": [
    "Website Development", "Web Application Development", "React Development",
    "Java Spring Boot Development", "UI/UX Design", "SEO Optimization",
    "Website Maintenance", "Landing Page Development", "E-Commerce Development"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Web Development Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "React Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Java Spring Boot Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UI/UX Design" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Optimization" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Maintenance" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing Page Development" } }
    ]
  },
  "sameAs": [
    "https://www.linkedin.com/company/arc-digital-solutions",
    "https://www.instagram.com/arcdigitalsolutions"
  ]
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Arc Digital Solutions",
  "url": "https://www.arcdigitalsolution.in",
  "description": "Best web development company in Pune, Maharashtra",
  "publisher": { "@id": "https://www.arcdigitalsolution.in/#organization" },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.arcdigitalsolution.in/?s={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best web development company in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arc Digital Solutions is widely recognized as one of the best web development companies in Pune, Maharashtra. We specialize in modern, scalable web development using React, Java Spring Boot, and cutting-edge technologies — delivering fast, SEO-optimized, and responsive websites for startups and businesses."
      }
    },
    {
      "@type": "Question",
      "name": "How much does website development cost in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website development costs in Pune vary depending on the project scope. At Arc Digital Solutions, starter websites begin at ₹14,999, business websites from ₹29,999, and premium custom web applications from ₹49,999. We offer affordable, transparent pricing with no hidden charges."
      }
    },
    {
      "@type": "Question",
      "name": "Why choose Arc Digital Solutions for web development?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Arc Digital Solutions is trusted by 50+ businesses for fast delivery, modern technology (React, Next.js, Java Spring Boot), 24/7 support, and SEO-optimized websites. Based in Pune, we provide a client-centric approach with agile development and long-term partnership support."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At Arc Digital Solutions, a standard business website typically takes 1–2 weeks, while complex web applications may take 4–8 weeks. Our agile methodology ensures 5x faster delivery compared to traditional development approaches."
      }
    },
    {
      "@type": "Question",
      "name": "Do you offer SEO services in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, Arc Digital Solutions provides comprehensive SEO optimization services in Pune including technical SEO, keyword research, on-page optimization, local SEO for Pune businesses, and performance analytics to boost your Google rankings."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies does Arc Digital Solutions use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We use modern, industry-leading technologies including React, Next.js, Java Spring Boot, TypeScript, Node.js, PostgreSQL, MongoDB, and cloud platforms like AWS and Vercel. Our tech stack ensures fast, scalable, and secure web solutions."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide website maintenance and support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we offer 24/7 website maintenance and support services including security updates, performance optimization, content updates, bug fixes, and monitoring — ensuring your website runs at peak performance with 99.9% uptime."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build e-commerce websites in Pune?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Arc Digital Solutions builds custom e-commerce platforms with secure payment integration, inventory management, responsive design, and SEO optimization — helping Pune businesses sell online and grow their revenue."
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* LocalBusiness Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* WebSite Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        {/* FAQPage Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
