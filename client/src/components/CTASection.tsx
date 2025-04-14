import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-blue-500 opacity-90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Testing Strategy?
          </h2>
          <p className="text-lg mb-8 text-white/90">
            Join the Adobe Engineering Teams already using Relay to build reliable, robust, and
            user-friendly applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="gradient"
              size="lg"
              className="text-center font-medium px-8"
            >
              Request a Demo
            </Button>
            <Button
              variant="whiteOutline"
              size="lg"
              className="text-center font-medium px-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
