import { Bot, Zap, Brain, EyeIcon, Bug, Wand2 } from "lucide-react";

const features = [
  {
    icon: <Bot className="text-primary" />,
    title: "AI Test Generation",
    description:
      "Automatically generate test cases from user stories, requirements, or application scanning.",
    launch: "Launching Q3 2023",
    color: "border-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: <Bug className="text-blue-500" />,
    title: "Smart Failure Analysis",
    description:
      "ML-powered root cause analysis that identifies patterns in test failures and suggests fixes.",
    launch: "Launching Q4 2023",
    color: "border-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Wand2 className="text-cyan-500" />,
    title: "Self-Healing Tests",
    description:
      "Automatically adapt tests to UI changes, reducing maintenance effort and test flakiness.",
    launch: "Launching Q1 2024",
    color: "border-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: <Zap className="text-primary" />,
    title: "Predictive Test Selection",
    description:
      "AI selects the most relevant tests to run based on code changes, maximizing coverage while minimizing execution time.",
    launch: "Launching Q2 2024",
    color: "border-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: <Brain className="text-blue-500" />,
    title: "Natural Language Test Creation",
    description:
      "Create test flows using plain English descriptions that are automatically converted to executable tests.",
    launch: "Launching Q3 2024",
    color: "border-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <EyeIcon className="text-cyan-500" />,
    title: "Visual Validation AI",
    description:
      "Intelligently detect visual regressions that matter while ignoring minor pixel differences and expected content changes.",
    launch: "Launching Q4 2024",
    color: "border-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
];

const AIFeaturesSection = () => {
  return (
    <section id="ai-features" className="py-16 bg-slate-700/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <span className="inline-block px-4 py-1 bg-slate-700/10 rounded-full text-sm font-semibold text-slate-700 mb-4">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">AI-Powered Features</h2>
          <p className="text-lg text-slate-700/80">
            The next generation of Relay brings cutting-edge artificial intelligence to revolutionize
            your testing workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-md p-6 border-t-4 ${feature.color} hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-center mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${feature.bgColor} flex items-center justify-center mr-3`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-slate-700/70 mb-4">{feature.description}</p>
              <div className="flex items-center text-xs text-slate-700/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <span>{feature.launch}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
