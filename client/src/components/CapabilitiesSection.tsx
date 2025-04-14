
import React, { useState } from "react";
import { Check, TestTube2, LineChart, Smartphone, Monitor, Bomb } from "lucide-react";
import { Button } from "./ui/button";

const CapabilitiesSection = () => {
  const [selectedCapability, setSelectedCapability] = useState<string | null>(null);

  const capabilityIcons = {
    functional: TestTube2,
    performance: LineChart,
    mobile: Smartphone,
    desktop: Monitor,
    chaos: Bomb
  };

  const capabilities = [
    {
      id: "functional",
      title: "Functional Automation",
      subtitle: "End to End Automation Framework",
      description: "Orchestrate test flows effortlessly with a few clicks – no code needed",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
      features: [
        "Automate execution using Selenium and Playwright frameworks",
        "Import APIs using Swagger for quick and structured test setups",
        "Test dynamic elements, apply validations, add custom JS",
        "Integrate Vault configs, CI/CD pipelines, and JIRA",
        "Create and organize filter, clone test cases, suites"
      ],
      learnMore: "Discover how our functional automation can streamline your testing process"
    },
    {
      id: "performance",
      title: "Performance Lab",
      subtitle: "Real-World Performance Testing",
      description: "Reuse functional test cases to execute multi-region, scalable scenarios",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
      features: [
        "Design load configuration based on user traffic",
        "Simulate load from multiple geo-locations",
        "Visualize test progress with live monitoring",
        "Identify Runtime bottlenecks",
        "Analyze performance trends"
      ],
      learnMore: "Learn about our advanced performance testing capabilities"
    },
    {
      id: "mobile",
      title: "Mobile Automation",
      subtitle: "Comprehensive Mobile Testing",
      description: "Conduct seamless mobile application tests on physical and cloud-based devices",
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80",
      features: [
        "Executions on SauceLab & Physical Device",
        "Real time capabilities of localization",
        "Run sequential and parallel tests",
        "Automatically capture screenshots",
        "Conduct manual testing on real browsers"
      ],
      learnMore: "Explore our mobile automation solutions"
    },
    {
      id: "desktop",
      title: "Desktop Automation",
      subtitle: "Cross-Platform Desktop Testing",
      description: "Unified testing across Windows and macOS platforms",
      image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?auto=format&fit=crop&w=800&q=80",
      features: [
        "Robust, script-free test creation",
        "Compatible with Windows and MAC OS",
        "Smarter automation with locating strategies",
        "Data-driven tests with validations",
        "Parallel execution runs"
      ],
      learnMore: "Discover desktop automation capabilities"
    },
    {
      id: "chaos",
      title: "Chaos Simulator",
      subtitle: "Controlled Chaos Engineering",
      description: "Introduce failure. Build confidence. Empower your teams",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      features: [
        "Test Failure and uncover system weakness",
        "Simulate real-world infrastructure issues",
        "Launch fault experiments without overhead",
        "Bring chaos to where applications live"
      ],
      learnMore: "Learn more about chaos engineering"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Capabilities</h2>

        <div className="relative overflow-hidden mb-16">
          <div className="flex animate-scroll space-x-8 py-4">
            {[...capabilities, ...capabilities].map((capability, index) => (
              <div
                key={`${capability.id}-${index}`}
                className={`flex-none w-72 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden border-2 ${
                  selectedCapability === capability.id
                    ? "bg-primary/10 border-primary shadow-lg scale-105"
                    : "bg-slate-50 hover:bg-slate-100 border-transparent"
                }`}
                onClick={() => setSelectedCapability(capability.id)}
              >
                <div className={`flex items-center p-4 ${
                  selectedCapability === capability.id
                    ? "bg-primary/5"
                    : "bg-slate-100"
                }`}>
                  <div className="flex-shrink-0">
                    {React.createElement(capabilityIcons[capability.id as keyof typeof capabilityIcons], {
                      className: `w-8 h-8 ${selectedCapability === capability.id ? "text-primary scale-110" : "text-primary/70"}`
                    })}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{capability.title}</h3>
                    <p className="text-xs opacity-80">{capability.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedCapability && (
          <div className="animate-fade-in">
            {capabilities.map((capability) => (
              capability.id === selectedCapability && (
                <div key={capability.id} className="max-w-5xl mx-auto">
                  <div className="flex gap-8 items-start">
                    <div className="w-1/2 overflow-hidden rounded-xl shadow-lg flex-shrink-0">
                      <img 
                        src={capability.image} 
                        alt={capability.title} 
                        className="w-full h-[400px] object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="w-1/2 pt-2">
                      <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                      <p className="text-lg mb-6">{capability.description}</p>
                      <div className="space-y-4">
                    {capability.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <p>{feature}</p>
                      </div>
                    ))}
                      </div>
                      <div className="mt-8 flex gap-4">
                        <Button className="w-full md:w-auto" onClick={() => window.location.href = "#get-started"}>
                          Get Started
                        </Button>
                        <Button variant="outline" className="w-full md:w-auto bg-white/10" onClick={() => window.location.href = "#get-started"}>
                          View Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
