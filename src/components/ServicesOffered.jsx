import { FadeInUp } from "./MotionWrapper";
import { Link } from "react-router-dom";

function ServicesOffered() {
  const services = [
    {
      id: 1,
      tier: "Starter",
      title: `Starter Automation Package`,
      subtitle: "Small Businesses. Solo Founders. First Time Automators.",
      color: "sage",
      priceRange: "$1,500",
      slug: "starter-automation",
      features: [
        "One core workflow (lead capture, onboarding, or follow-up)",
        "Basic GoHighLevel (GHL) setup or pipeline cleanup",
        "One small integration via n8n or equivalent",
        "Form/calendar setup, simple triggers/notifications",
        "1 revision",
      ],
    },
    {
      id: 2,
      tier: "Premium",
      title: "Premium Automation Package",
      subtitle: "Clean up systems. Consolidate tools. Business growth.",
      color: "navy",
      priceRange: "$3,500 - $6,000",
      slug: "premium-automation",
      isPremium: true,
      features: [
        "Full GHL system build or optimization",
        "Multiple workflows (lead nurture, onboarding, sales funnel, internal ops)",
        "Multi-tool integrations + data flow via n8n",
        "Contact segmentation, tagging, automated follow-ups",
        "Custom dashboard & reporting",
        "CRM cleanup + logic mapping",
        "2 revision rounds + hand-off documentation",
      ],
    },
    {
      id: 3,
      tier: "Retainer",
      title: "Virtual Assistant / Retainer-Style Package",
      subtitle: "Ongoing Support. Monthly Optimization and Reporting.",
      color: "maroon",
      priceRange: "$1,500 a month or $25 an hour",
      slug: "retainer-support",
      features: [
        "Ongoing automation maintenance, updates and tweaks",
        "Monthly monitoring for errors or breakdowns",
        "Adding or adjusting small workflows",
        "Priority support (e.g. rushed fixes, small integrations)",
      ],
    },
  ];

  return (
    <div className="bg-[white] dark:bg-[#0a1e3f] py-20 transition-colors duration-300 border-t border-[#AFA8BA]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeInUp delay={0.2}>
          <div className="text-right mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-6">
              Services Offered
            </h2>
            <p className="text-lg text-[#6D6D6D] dark:text-[#C1CBF8] max-w-4xl ml-auto">
              A selection of my services tailored to businesses starting in
              social media to clients who want to scale their business and have
              a system laid out.
            </p>
          </div>
        </FadeInUp>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 group auto-rows-fr">
          {services.map((service) => (
            <FadeInUp key={service.id} delay={0.3 + service.id * 0.1}>
              <ServiceCard service={service} />
            </FadeInUp>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }) {
  const colorClasses = {
    navy: {
      header: "bg-[#000080]",
      accent: "#000080",
      accentLight: "bg-[#000080]/10",
      bullet: "bg-[#000080]",
      badge: "bg-[#6D0000]",
      border: "border-[#000080]/20",
    },
    sage: {
      header: "bg-[#AFA8BA]",
      accent: "#AFA8BA",
      accentLight: "bg-[#AFA8BA]/10",
      bullet: "bg-[#AFA8BA]",
      badge: "bg-[#6D0000]",
      border: "border-[#AFA8BA]/30",
    },
    maroon: {
      header: "bg-[#6D0000]",
      accent: "#6D0000",
      accentLight: "bg-[#6D0000]/10",
      bullet: "bg-[#6D0000]",
      badge: "bg-[#000080]",
      border: "border-[#6D0000]/20",
    },
  };

  const colors = colorClasses[service.color];

  return (
    <div
      className={`relative group overflow-hidden bg-white dark:bg-[#0a1e3f] rounded-2xl shadow-lg border border-[#AFA8BA] dark:border-[#AFA8BA]/30 transition-all duration-500 hover:shadow-2xl hover:border-opacity-100 flex flex-col h-full ${
        service.isPremium
          ? "ring-2 ring-offset-2 dark:ring-offset-[#0a1e3f] ring-[#AFA8BA]"
          : ""
      }`}
    >
      {/* Gradient Background Accent */}
      <div
        className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: colors.accent }}
      ></div>

      {/* Premium Badge */}
      {service.isPremium && (
        <div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r"
          style={{
            backgroundImage: `linear-gradient(to right, ${colors.accent}, transparent)`,
          }}
        ></div>
      )}

      {/* Header */}
      <div className={`${colors.header} p-8 text-white relative z-10`}>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1">
            <div className="text-xs font-semibold opacity-75 uppercase tracking-widest mb-2">
              {service.tier} Plan
            </div>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">
              {service.title}
            </h3>
          </div>
          {service.isPremium && (
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-star"
                >
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <p className="text-sm font-medium opacity-90 leading-relaxed">
          {service.subtitle}
        </p>
      </div>

      {/* Content */}
      <div className="p-8 relative z-10 flex flex-col h-full">
        {/* Features List */}
        <div className="space-y-4 mb-8 flex-1">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div
                className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.accentLight} border border-[#AFA8BA]/30 flex items-center justify-center mt-0.5`}
              >
                <div className={`w-2 h-2 ${colors.bullet} rounded-full`}></div>
              </div>
              <span className="text-sm md:text-base leading-relaxed text-[#6D6D6D] dark:text-[#C1CBF8]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Price and CTA */}
        <div className="space-y-4">
          <div className="pt-4 border-t border-[#AFA8BA]/20">
            <p className="text-center text-lg font-bold text-[#000080] dark:text-[#C1CBF8]">
              {service.priceRange}
            </p>
          </div>
          <Link
            to={`/services/${service.slug}`}
            className="block w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 text-white border border-transparent text-center hover:opacity-85"
            style={{
              backgroundColor: colors.accent,
            }}
          >
            Learn More
          </Link>
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundImage: `linear-gradient(to right, ${colors.accent}, transparent)`,
        }}
      ></div>
    </div>
  );
}

export default ServicesOffered;
