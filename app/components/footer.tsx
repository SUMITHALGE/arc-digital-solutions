import Link from "next/link";

const footerLinks = {
  services: [
    { name: "Web Development", href: "#services" },
    { name: "Maintenance", href: "#services" },
    { name: "SEO Optimization", href: "#services" },
    { name: "Hosting & Support", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Team", href: "/team" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Blog", href: "#" },
    { name: "Case Studies", href: "#portfolio" },
    { name: "Documentation", href: "#" },
    { name: "Support", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AD</span>
              </div>
              <span className="text-xl font-bold">Arc Digital</span>
            </Link>
            <p className="mt-4 text-background/70 max-w-sm">
              Transforming businesses through innovative IT solutions. Your trusted partner for digital excellence.
            </p>
            <div className="mt-6 flex gap-4">
              {["X", "LI", "GH", "IG"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="h-10 w-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors text-sm font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-background transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/70">
            &copy; {new Date().getFullYear()} Arc Digital Solution. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-background/70 hover:text-background transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
