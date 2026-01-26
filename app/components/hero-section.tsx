import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/office.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left text-white">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                Trusted by 500+ Businesses
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transforming Ideas Into
                <span style={{ color: "#ffd400" }}> Digital Excellence</span>

              </h1>
              
              <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
                We deliver cutting-edge IT solutions that drive business growth. From custom web development to comprehensive digital strategies, we&apos;re your partner in innovation.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
              size="lg"
              asChild
              className="gap-2 border-2 border-[#FFD400] text-[#FFD400] bg-transparent hover:bg-[#FFD400] hover:text-black transition-all duration-300"
              >
              <Link href="#contact">
              Get a Quote
              <ArrowRight className="h-4 w-4" />
              </Link>
              </Button>


              <Button
              size="lg"
              asChild
              className="border-2 border-[#FFD400] text-[#FFD400] bg-transparent hover:bg-[#FFD400] hover:text-black transition-all duration-300"
              >
              <Link href="#portfolio">View Our Work</Link>
              </Button>


              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                {["24/7 Support", "99.9% Uptime", "Fast Delivery"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle className="h-4 w-4" style={{ color: "#FFD400" }} />

                    {item}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
