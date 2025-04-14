import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Automation technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/70"></div>
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Reliable, Robust & User-Friendly{" "}
            <span className="text-primary">Test Automation</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            A comprehensive quality-driven next-generation application offering exceptional user
            experience across functional (API, Web, Mobile & Desktop) and non-functional
            (Performance & Chaos) automation testing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#capabilities">
              <Button
                variant="default"
                className="text-center font-medium px-6 py-6 rounded-md shadow-lg hover:shadow-xl transition-shadow bg-primary hover:bg-primary/90"
              >
                Explore Capabilities
              </Button>
            </Link>
            <Button
              variant="outline"
              className="text-center font-medium px-6 py-6 rounded-md bg-white/20 text-white border-white hover:bg-white/30 transition-colors"
            >
              Request Demo
            </Button>
          </div>

          <div className="mt-12 text-white/80 flex items-center">
            <span className="mr-3">Trusted by:</span>
            <span className="font-semibold text-white">Adobe Engineering Teams</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
