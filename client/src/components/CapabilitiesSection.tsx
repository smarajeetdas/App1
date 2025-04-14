import { Check } from "lucide-react";
import { useToggle } from "@/hooks/useToggle";

const CapabilitiesSection = () => {
  const [functionalDetailsOpen, toggleFunctionalDetails] = useToggle(false);
  const [performanceDetailsOpen, togglePerformanceDetails] = useToggle(false);
  const [mobileDetailsOpen, toggleMobileDetails] = useToggle(false);
  const [desktopDetailsOpen, toggleDesktopDetails] = useToggle(false);
  const [chaosDetailsOpen, toggleChaosDetails] = useToggle(false);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Capabilities</h2>

        {/* Functional Automation */}
        <div id="functional" className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Functional Automation
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                End to End Automation Framework
              </h3>
              <p className="text-slate-700/80 mb-6">
                Orchestrate test flows effortlessly with a few clicks – no code needed
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Automate execution using Selenium and Playwright frameworks</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Import APIs using Swagger for quick and structured test setups</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>
                    Test dynamic elements, apply validations, add custom JS, and auto-sync feature
                    across linked testcases
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>
                    Integrate Vault configs, CI/CD pipelines, and JIRA for streamlined workflows
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>
                    Create and organize filter, clone test cases, suites, and master suites with full
                    flexibility
                  </p>
                </div>
              </div>

              <button
                onClick={toggleFunctionalDetails}
                className="flex items-center text-primary font-medium hover:underline"
              >
                <span>{functionalDetailsOpen ? "Show Less" : "Learn More"}</span>
                <svg
                  className={`h-4 w-4 ml-2 transition-transform ${
                    functionalDetailsOpen ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Functional Automation Interface"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {functionalDetailsOpen && (
            <div className="mt-8 p-6 bg-slate-700/5 rounded-lg animate-in fade-in duration-300">
              <h4 className="font-semibold text-lg mb-4">Additional Features</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Trigger tests across multiple browsers for wide coverage</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>
                    Track test history, analyze failures, and receive alerts via Slack and email
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Reuse test components across multiple test scenarios to save time</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Support for parameterization and data-driven testing</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Performance Lab */}
        <div id="performance" className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Performance Lab Dashboard"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                Performance Lab
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                Real-World Performance Testing
              </h3>
              <p className="text-slate-700/80 mb-6">
                Reuse functional test cases to execute multi-region, scalable, real-world scenarios
                that evaluate application performance under diverse load conditions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Design load configuration based on user traffic & request volume</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Simulate load from multiple geo-locations</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Visualize test progress with live monitoring of KPIs</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Identify Runtime bottlenecks for efficient root cause analysis</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Analyze performance trends across historical test runs</p>
                </div>
              </div>

              <button
                onClick={togglePerformanceDetails}
                className="flex items-center text-blue-500 font-medium hover:underline"
              >
                <span>{performanceDetailsOpen ? "Show Less" : "Learn More"}</span>
                <svg
                  className={`h-4 w-4 ml-2 transition-transform ${
                    performanceDetailsOpen ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {performanceDetailsOpen && (
            <div className="mt-8 p-6 bg-slate-700/5 rounded-lg animate-in fade-in duration-300">
              <h4 className="font-semibold text-lg mb-4">Performance Metrics</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <LineChart className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Response Time Analysis with percentile breakdowns</p>
                </div>
                <div className="flex items-start">
                  <LineChart className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Throughput measurement under varying load conditions</p>
                </div>
                <div className="flex items-start">
                  <LineChart className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Error rate monitoring with threshold alerts</p>
                </div>
                <div className="flex items-start">
                  <LineChart className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Resource utilization tracking (CPU, memory, network)</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Automation */}
        <div id="mobile" className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Mobile Automation
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                Comprehensive Mobile Testing
              </h3>
              <p className="text-slate-700/80 mb-6">
                Conduct seamless mobile application tests on physical (Android, iOS) and cloud-based
                devices (Sauce Labs).
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Executions can be done on SauceLab & Physical Device</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Real time capabilities of localization, language and scale</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Run sequential and parallel tests across iOS and Android</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Automatically capture screenshots or videos of the tests for analysis</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Conduct manual testing on real browsers to identify UI/UX issues</p>
                </div>
              </div>

              <button
                onClick={toggleMobileDetails}
                className="flex items-center text-primary font-medium hover:underline"
              >
                <span>{mobileDetailsOpen ? "Show Less" : "Learn More"}</span>
                <svg
                  className={`h-4 w-4 ml-2 transition-transform ${
                    mobileDetailsOpen ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Mobile Testing Platforms"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {mobileDetailsOpen && (
            <div className="mt-8 p-6 bg-slate-700/5 rounded-lg animate-in fade-in duration-300">
              <h4 className="font-semibold text-lg mb-4">Device Coverage</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Smartphone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Test on latest iOS and Android devices</p>
                </div>
                <div className="flex items-start">
                  <Smartphone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Support for legacy versions to ensure backward compatibility</p>
                </div>
                <div className="flex items-start">
                  <Smartphone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Different screen sizes and resolutions for UI testing</p>
                </div>
                <div className="flex items-start">
                  <Smartphone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Testing across different network conditions (4G, 5G, Wi-Fi)</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Desktop Automation */}
        <div id="desktop" className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Desktop Testing Environment"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>

            <div>
              <span className="text-sm font-semibold text-blue-500 uppercase tracking-wider">
                Desktop Automation
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                Cross-Platform Desktop Testing
              </h3>
              <p className="text-slate-700/80 mb-6">
                Unified testing across Windows and macOS with enhanced data-driven test cases that
                support validation and reporting.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Robust, script-free test creation and maintenance with improved accuracy</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Compatible with Windows and MAC OS Applications</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Smarter automation with both text and image-based locating strategies</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Data-driven tests with validations, reports, recordings, and notifications</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Parallel execution runs multiple test suites quickly</p>
                </div>
              </div>

              <button
                onClick={toggleDesktopDetails}
                className="flex items-center text-blue-500 font-medium hover:underline"
              >
                <span>{desktopDetailsOpen ? "Show Less" : "Learn More"}</span>
                <svg
                  className={`h-4 w-4 ml-2 transition-transform ${
                    desktopDetailsOpen ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {desktopDetailsOpen && (
            <div className="mt-8 p-6 bg-slate-700/5 rounded-lg animate-in fade-in duration-300">
              <h4 className="font-semibold text-lg mb-4">Advanced Features</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Monitor className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Desktop application object recognition and interaction</p>
                </div>
                <div className="flex items-start">
                  <Monitor className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Support for complex UI elements like custom controls</p>
                </div>
                <div className="flex items-start">
                  <Monitor className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Automatic recovery mechanisms for test resilience</p>
                </div>
                <div className="flex items-start">
                  <Monitor className="h-5 w-5 text-blue-500 mt-1 mr-3 flex-shrink-0" />
                  <p>Integration with system events and OS-level commands</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Chaos Simulator */}
        <div id="chaos" className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Chaos Simulator
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                Controlled Chaos Engineering
              </h3>
              <p className="text-slate-700/80 mb-6">
                Introduce failure. Build confidence. Empower your teams with controlled chaos
                engineering to uncover system weaknesses before your customers do.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Test Failure, uncover system weakness and build resilient apps</p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>
                    Simulate real-world infrastructure issues—Infra, Latency and ALFI—in a safe,
                    targeted, and repeatable way
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>
                    Launch fault experiments without engineering overhead using tools like Gremlin,
                    AWS FIS, and Chaos Mesh
                  </p>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>
                    From VMs to Kubernetes, from Ethos to Multi-cloud environments, bring chaos to
                    where your applications live
                  </p>
                </div>
              </div>

              <button
                onClick={toggleChaosDetails}
                className="flex items-center text-primary font-medium hover:underline"
              >
                <span>{chaosDetailsOpen ? "Show Less" : "Learn More"}</span>
                <svg
                  className={`h-4 w-4 ml-2 transition-transform ${
                    chaosDetailsOpen ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Chaos Engineering Visualization"
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>

          {chaosDetailsOpen && (
            <div className="mt-8 p-6 bg-slate-700/5 rounded-lg animate-in fade-in duration-300">
              <h4 className="font-semibold text-lg mb-4">Chaos Experiment Types</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Network failure and degradation simulations</p>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Resource exhaustion tests (CPU, memory, disk)</p>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Process and service crashes</p>
                </div>
                <div className="flex items-start">
                  <Zap className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
                  <p>Dependency outages and latency injections</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const LineChart = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </svg>
);

const Monitor = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="14" x="2" y="3" rx="2" />
    <line x1="8" x2="16" y1="21" y2="21" />
    <line x1="12" x2="12" y1="17" y2="21" />
  </svg>
);

const Smartphone = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const Zap = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export default CapabilitiesSection;
