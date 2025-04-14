const testimonials = [
  {
    initials: "JD",
    name: "James Davidson",
    role: "Sr. QA Engineer, Adobe Creative Cloud",
    quote:
      "Relay has transformed our testing process. The no-code approach allows our entire team to create and maintain tests, not just those with programming skills. We've seen a 60% reduction in test maintenance time.",
    bgColor: "bg-primary/20",
    textColor: "text-primary",
  },
  {
    initials: "SL",
    name: "Sarah Liu",
    role: "Technical Lead, Adobe Document Cloud",
    quote:
      "The Chaos Simulator helped us identify critical weaknesses in our architecture before they impacted customers. With Relay, we've built more resilient systems that maintain performance even during unexpected events.",
    bgColor: "bg-blue-500/20",
    textColor: "text-blue-500",
  },
  {
    initials: "RM",
    name: "Rajesh Mehta",
    role: "DevOps Manager, Adobe Experience Cloud",
    quote:
      "Integrating Relay into our CI/CD pipeline has given us confidence in our releases. The Performance Lab component helped us identify bottlenecks early, resulting in a 40% improvement in application response times.",
    bgColor: "bg-cyan-500/20",
    textColor: "text-cyan-500",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Adobe Engineering Teams Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-700/5 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center mr-3`}
                >
                  <span className={`font-semibold ${testimonial.textColor}`}>
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-slate-700/70">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic text-slate-700/80">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
