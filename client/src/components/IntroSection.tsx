import { GitBranch, Laptop, Bot, RefreshCw, LineChart, ShieldAlert } from "lucide-react";

const features = [
  {
    icon: <GitBranch className="h-6 w-6 text-white" />,
    title: "No-Code Automation",
    description: "Build complex test flows with intuitive visual tools—no coding required.",
  },
  {
    icon: <Laptop className="h-6 w-6 text-white" />,
    title: "Cross-Platform Support",
    description: "Test across web, mobile, API, and desktop platforms with a unified framework.",
  },
  {
    icon: <Bot className="h-6 w-6 text-white" />,
    title: "AI-Enhanced Testing",
    description: "Leverage machine learning to optimize test creation, execution, and analysis.",
  },
  {
    icon: <RefreshCw className="h-6 w-6 text-white" />,
    title: "CI/CD Integration",
    description: "Seamlessly integrate with your existing development workflow and tools.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-white" />,
    title: "Advanced Analytics",
    description: "Gain insights with comprehensive reporting and visualization tools.",
  },
  {
    icon: <ShieldAlert className="h-6 w-6 text-white" />,
    title: "Resilience Testing",
    description: "Simulate real-world conditions to ensure your applications can withstand stress.",
  },
];

const IntroSection = () => {
  return (
    <section id="capabilities" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Quality Driven Next-Gen Automation</h2>
          <p className="text-lg text-slate-700/80">
            A comprehensive quality-driven next-generation application offering exceptional user
            experience in both automated functional testing (UI, API, Mobile & Desktop) and
            non-functional testing (Performance & Chaos). Our platform streamlines the testing process with no-code
            automation, allowing teams to focus on building great products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-blue-500 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-700/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroSection;