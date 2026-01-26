import { Users, Zap, Shield, HeadphonesIcon } from "lucide-react";

const features = [
  {
    title: "Expert Team",
    description: "Our team of certified professionals brings years of industry experience to every project we undertake.",
    icon: Users,
    stat: "50+",
    statLabel: "Experts",
  },
  {
    title: "Fast Delivery",
    description: "We use agile methodologies to deliver projects on time without compromising on quality or performance.",
    icon: Zap,
    stat: "2x",
    statLabel: "Faster",
  },
  {
    title: "Secure Solutions",
    description: "Security is built into everything we do. Your data and applications are protected with industry-leading practices.",
    icon: Shield,
    stat: "100%",
    statLabel: "Secure",
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock support ensures your systems are always running smoothly. We're here whenever you need us.",
    icon: HeadphonesIcon,
    stat: "24/7",
    statLabel: "Available",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              We Build Digital Solutions That Drive Results
            </h2>
            <p className="mt-4 text-lg text-muted-foreground text-pretty">
              With over a decade of experience in delivering IT solutions, we understand what it takes to build successful digital products. Our client-first approach ensures your vision becomes reality.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-8">
              {[
                { value: "500+", label: "Projects Delivered" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "10+", label: "Years Experience" },
                { value: "50+", label: "Team Members" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`relative p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow ${
                  index % 2 === 1 ? "sm:mt-8" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-foreground">{feature.stat}</p>
                    <p className="text-xs text-muted-foreground">{feature.statLabel}</p>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
