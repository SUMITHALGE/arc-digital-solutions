import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const font = Outfit({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "1280",
};

export const metadata: Metadata = {
  title: "Arc Digital Solution | Best Web Development Company in Pune | Digital Services",
  description: "Best app and web development company in Pune, Maharashtra. Arc Digital Solution delivers expert web development, mobile apps, SEO, e-commerce, and digital solutions. Transform your business with Pune's leading IT services provider.",
  keywords: "web development company Pune, app development Pune, best web development Pune, digital marketing Pune, SEO services Pune, website design Pune, mobile app development Pune, e-commerce development Pune, software development Pune, IT company Pune, web agency Pune, custom web applications Pune, responsive websites Pune, Maharashtra",
  authors: [{ name: "Arc Digital Solution" }],
  creator: "Arc Digital Solution",
  publisher: "Arc Digital Solution",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.arcdigitalsolution.in",
    siteName: "Arc Digital Solution - Pune",
    title: "Arc Digital Solution | Best Web Development Company in Pune",
    description: "Pune's leading app and web development company. Expert web development, mobile apps, SEO, e-commerce solutions. 500+ successful projects delivered across Maharashtra and India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arc Digital Solution - Best Web Development Company in Pune",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Best Web Development Company in Pune | Arc Digital Solution",
    description: "Pune's top-rated app & web development company. Expert digital solutions, SEO, and custom web applications.",
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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Schema Markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Arc Digital Solution",
              "description": "Best web development company in Pune",
              "url": "https://www.arcdigitalsolution.in",
              "logo": "https://www.arcdigitalsolution.in/logo1.svg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-7719902074",
                "contactType": "customer service"
              }
            })
          }}
        />
      </head>
      <body className={font.className}>{children}</body>
    </html>
  );
}
