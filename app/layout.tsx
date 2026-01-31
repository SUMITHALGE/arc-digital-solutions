import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://arcdigitalsolution.in"),

  title: {
    default: "Arc Digital Solution | Web Development & Digital Services",
    template: "%s | Arc Digital Solution",
  },

  description:
    "Arc Digital Solution helps businesses grow with high-performance websites, SEO, maintenance, and digital solutions. Transforming ideas into digital excellence.",

  keywords: [
    "Arc Digital Solution",
    "Web Development Company",
    "Website Design",
    "SEO Services",
    "IT Services",
    "Digital Agency",
    "Website Maintenance",
    "Next.js Agency",
  ],

  authors: [{ name: "Arc Digital Solution" }],
  creator: "Arc Digital Solution",

  icons: {
    icon: "/favicon.ico", // 👈 MUST exist in /public
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    title: "Arc Digital Solution | Digital Excellence",
    description:
      "We build modern, fast, and scalable websites with SEO and digital services that convert visitors into leads.",
    url: "https://arcdigitalsolution.in",
    siteName: "Arc Digital Solution",
    images: [
      {
        url: "/og-image.png", // optional but recommended
        width: 1200,
        height: 630,
        alt: "Arc Digital Solution",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Arc Digital Solution | Digital Excellence",
    description:
      "High-performance websites, SEO, and digital solutions for growing businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* ✅ Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Arc Digital Solution",
              url: "https://arcdigitalsolution.in",
              logo: "https://arcdigitalsolution.in/logo.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-7719902074",
                contactType: "customer support",
                areaServed: "IN",
                availableLanguage: ["English"],
              },
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}
