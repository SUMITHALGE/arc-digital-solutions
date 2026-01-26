import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Settings, Search, Server, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description: "Custom-built websites and web applications tailored to your business needs. From responsive landing pages to complex enterprise solutions.",
    icon: Code,
    features: ["Custom Design", "Responsive Layout", "Modern Stack"],
  },
  {
    title: "Website Maintenance",
    description: "Keep your website running smoothly with regular updates, security patches, and performance optimization to ensure peak performance.",
    icon: Settings,
    features: ["Security Updates", "Performance Tuning", "Content Updates"],
  },
  {
    title: "SEO Optimization",
    description: "Boost your online visibility and drive organic traffic with our data-driven SEO strategies and technical optimization services.",
    icon: Search,
    features: ["Keyword Research", "Technical SEO", "Analytics"],
  },
  {
    title: "Hosting & Support",
    description: "Reliable, secure hosting solutions with 24/7 support. We handle the infrastructure so you can focus on growing your business.",
    icon: Server,
    features: ["99.9% Uptime", "24/7 Support", "Auto Backups"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Comprehensive IT solutions designed to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="mb-4 h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
