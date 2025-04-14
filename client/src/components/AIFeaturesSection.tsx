import { Bot, Zap, Brain, EyeIcon, Bug, Wand2, FileText, CheckCircle2, Database } from "lucide-react";

const features = [
  {
    icon: <FileText className="h-6 w-6 text-white" />,
    title: "Intelligent Test Results Summary",
    description: "Automatically generate simplified summaries from complex test execution results for quick analysis.",
  },
  {
    icon: <CheckCircle2 className="h-6 w-6 text-white" />,
    title: "Intelligent Test Case Validation",
    description: "AI-driven validation of test cases to ensure comprehensive coverage and reliability.",
  },
  {
    icon: <Database className="h-6 w-6 text-white" />,
    title: "Intelligent Test Data Recommendation",
    description: "Smart suggestions for test data based on application behavior and patterns.",
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

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 border-t-4 border-primary hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-slate-700/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;