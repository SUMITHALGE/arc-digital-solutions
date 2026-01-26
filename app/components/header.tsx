"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Our Team", href: "/team" }, // 👈 real team page
  { name: "Contact", href: "https://wa.me/917719902074" }, // 👈 WhatsApp
];

const WHATSAPP_URL = "https://wa.me/917719902074";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{ backgroundColor: "#FFFFFF" }}
    >
     <nav className="w-full px-6">

        <div className="flex h-16 items-center justify-between">
          <div className="flex items-start">
           <Link href="/" className="flex items-center">
  <img
    src="/logo.svg"
    alt="Arc Digital Logo"
    style={{ height: "165px", width: "auto" }}
  />
  <span className="text-2xl font-bold text-foreground ml-[-12px] relative top-[9px]">
    Digital Solution
  </span>
</Link>



          </div>

          <div className="hidden md:flex md:items-center md:gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : "_self"}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:gap-4">
            <Button asChild>
              <Link href={WHATSAPP_URL} target="_blank">
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : "_self"}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-2">
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
