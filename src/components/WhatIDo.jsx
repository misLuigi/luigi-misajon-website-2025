import { FadeInUp } from "./MotionWrapper";

function WhatIDo() {
  const services = [
    {
      title: "GoHighLevel Automation",
      subtitle: "Smart CRM",
      description:
        "Workflows. Lead nurture. Pipeline systems. And client onboarding that run smoothly in an outstanding automation.",
      image: "/images/ghl-automation-graphics.webp",
      align: "right",
    },
    {
      title: "AI & Custom Automation",
      subtitle: "Intelligent Systems",
      description:
        "Intelligent workflows powered by AI. Streamlined processes. Data-driven decision making. Automation that learns and adapts to your business.",
      image: "/images/custom-ai-automation-graphics.webp",
      align: "left",
    },
    {
      title: "N8n Integration",
      subtitle: "Advanced Automation",
      description:
        "Complex workflow automation. API integrations. Multi-step processes. Connect your tools and automate everything end-to-end.",
      image: "/images/n8n-automation-graphics.webp",
      align: "right",
    },
  ];

  return (
    <div className="bg-[#FCF7FF] dark:bg-[#0a1e3f] py-20 lg:py-32 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp delay={0.2}>
          <div className="flex flex-col text-right mb-20 ml-auto max-w-3xl">
            <h2 className="text-5xl md:text-6xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-6">
              What I Do
            </h2>
            <p className="text-xl text-[#6D6D6D] dark:text-[#C1CBF8]">
              I help businesses streamline their operations and achieve more
              with less effort.
            </p>
            <p className="text-xl text-[#6D6D6D] dark:text-[#C1CBF8]">
              I specialize in a few key areas:
            </p>
          </div>
        </FadeInUp>

        {/* Services Grid */}
        <div className="space-y-20">
          {services.map((service, index) => (
            <FadeInUp key={index} delay={0.3 + index * 0.1}>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Image Column */}
                <div
                  className={`flex justify-center ${
                    service.align === "right" ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="w-full max-w-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    />
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`flex flex-col justify-center ${
                    service.align === "right" ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm font-bold text-[#AFA8BA] dark:text-[#AFA8BA] uppercase tracking-widest mb-2">
                        {service.subtitle}
                      </p>
                      <h3 className="text-4xl md:text-5xl font-bold text-[#000080] dark:text-[#C1CBF8]">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-lg text-[#6D6D6D] dark:text-[#C1CBF8] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>

        {/* CTA Section */}
        <FadeInUp delay={0.8}>
          <div className="mt-20 pt-20 border-t border-[#AFA8BA] dark:border-[#AFA8BA] text-center">
            <p className="text-xl text-[#6D6D6D] dark:text-[#C1CBF8] mb-8">
              Ready to automate your business?
            </p>
            <a
              href="https://api.leadconnectorhq.com/widget/booking/QEeSb9cOesZn5Ia2Q89P"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#000080] hover:bg-[#00005F] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              Book A Discovery Call
            </a>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}

export default WhatIDo;
