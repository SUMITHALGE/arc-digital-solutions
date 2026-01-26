"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value;
    const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement).value;
    const service = (form.elements.namedItem("service") as HTMLSelectElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const whatsappMessage = `Hello Arc Digital Solution 👋

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Service: ${service}

Message:
${message}
`;

    const phoneNumber = "917719902074"; // Your WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(url, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let’s discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Mail, label: "Email", value: "contact@arcdigital.com" },
              { icon: Phone, label: "Phone", value: "+91 7719902074" },
              { icon: MapPin, label: "Office", value: "India" },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <item.icon className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 sm:p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold">WhatsApp Opened</h3>
                    <p className="text-muted-foreground">
                      Please send the message in WhatsApp to complete.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label>First Name</Label>
                        <Input name="firstName" required />
                      </div>
                      <div>
                        <Label>Last Name</Label>
                        <Input name="lastName" required />
                      </div>
                    </div>

                    <div>
                      <Label>Email</Label>
                      <Input name="email" type="email" required />
                    </div>

                    <div>
                      <Label>Company</Label>
                      <Input name="company" />
                    </div>

                    <div>
                      <Label>Service</Label>
                      <select
                        name="service"
                        className="w-full h-10 border rounded px-3"
                        required
                      >
                        <option value="">Select a service</option>
                        <option>Website Development</option>
                        <option>SEO</option>
                        <option>Maintenance</option>
                        <option>Hosting</option>
                      </select>
                    </div>

                    <div>
                      <Label>Message</Label>
                      <Textarea name="message" rows={4} required />
                    </div>

                    <Button type="submit" className="w-full gap-2">
                      Get a Quote on WhatsApp
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
