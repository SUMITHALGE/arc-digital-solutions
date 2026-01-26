"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Web Development", "E-Commerce", "Enterprise"];

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Enterprise",
    description: "A comprehensive financial management platform with real-time analytics and reporting.",
    tags: ["React", "Node.js", "PostgreSQL"],
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "E-Commerce Platform",
    category: "E-Commerce",
    description: "Full-featured online store with inventory management and payment integration.",
    tags: ["Next.js", "Stripe", "MongoDB"],
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Healthcare Portal",
    category: "Web Development",
    description: "Patient management system with appointment scheduling and medical records.",
    tags: ["Vue.js", "Django", "AWS"],
    color: "from-violet-500/20 to-purple-500/20",
  },
  {
    title: "Real Estate App",
    category: "Web Development",
    description: "Property listing platform with virtual tours and agent matching system.",
    tags: ["React", "Firebase", "Maps API"],
    color: "from-orange-500/20 to-amber-500/20",
  },
  {
    title: "SaaS Analytics",
    category: "Enterprise",
    description: "Business intelligence tool with customizable dashboards and data visualization.",
    tags: ["Angular", "Python", "Redis"],
    color: "from-rose-500/20 to-pink-500/20",
  },
  {
    title: "Retail Management",
    category: "E-Commerce",
    description: "Complete retail solution with POS integration and multi-location inventory.",
    tags: ["Next.js", "GraphQL", "MySQL"],
    color: "from-indigo-500/20 to-blue-500/20",
  },
];

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore our portfolio of successful projects across various industries.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                <div className="relative z-10 text-4xl font-bold text-foreground/20 group-hover:scale-110 transition-transform">
                  {project.title.split(" ")[0]}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <button className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <ExternalLink className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
