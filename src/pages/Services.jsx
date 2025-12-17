import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Check } from "lucide-react";
import { FadeInUp } from "../components/MotionWrapper";
import Footer from "../components/Footer";

const serviceDetails = {
  "starter-automation": {
    id: 1,
    tier: "Starter",
    title: "Starter Automation Package",
    subtitle: "Small Businesses. Solo Founders. First Time Automators.",
    color: "sage",
    priceRange: "$1,200",
    description:
      "Perfect for businesses just starting their automation journey. This package includes one core workflow to streamline your most critical process.",
    fullDescription: `The Starter Automation Package is designed for small business owners and solo founders who want to implement their first automation without breaking the bank. Whether you're looking to capture leads more efficiently, streamline onboarding, or set up automated follow-ups, this package provides a solid foundation.

I will work with you to identify your most impactful workflow and build it out using GoHighLevel (GHL) and minimal integrations via n8n. By the end of this engagement, you'll have a working automation that saves you hours each month.`,
    features: [
      "One core workflow (lead capture, onboarding, or follow-up)",
      "Basic GoHighLevel (GHL) setup or pipeline cleanup",
      "One small integration via n8n or equivalent",
      "Form/calendar setup, simple triggers/notifications",
      "1 revision round",
    ],
    includes: [
      "Discovery call to understand your workflow",
      "System design and mapping",
      "Implementation and testing",
      "Training on basic usage",
      "Documentation of setup",
    ],
    timeline: "2-3 weeks",
    deliverables: [
      "Fully functional automation workflow",
      "User documentation",
      "Basic training session (30 mins)",
    ],
  },
  "premium-automation": {
    id: 2,
    tier: "Premium",
    title: "Premium Automation Package",
    subtitle: "Clean up systems. Consolidate tools. Business growth.",
    color: "navy",
    priceRange: "$3,500 - $6,000",
    description:
      "Comprehensive automation system for scaling businesses. Full GHL setup with multiple integrated workflows and advanced features.",
    fullDescription: `The Premium Automation Package is for businesses ready to consolidate their tools and build a sophisticated automation infrastructure. This includes a full GoHighLevel system build with multiple interconnected workflows, advanced data management, and custom reporting.

If you're juggling multiple tools, losing leads through cracks, or struggling to scale because of manual processes, this is the solution. I will design and implement a complete system that keeps your business running smoothly as you grow.`,
    features: [
      "Full GHL system build or comprehensive optimization",
      "Multiple workflows (lead nurture, onboarding, sales funnel, internal ops)",
      "Multi-tool integrations + intelligent data flow via n8n",
      "Contact segmentation, tagging, automated follow-ups",
      "Custom dashboard & reporting setup",
      "CRM cleanup + complete logic mapping",
      "2 revision rounds + comprehensive hand-off documentation",
    ],
    includes: [
      "Detailed discovery and audit of current systems",
      "Complete system design and process mapping",
      "Implementation of all workflows and integrations",
      "Data migration and cleanup",
      "Custom reporting dashboard setup",
      "Team training (2-3 sessions)",
      "Documentation and SOPs",
    ],
    timeline: "4-6 weeks",
    deliverables: [
      "Fully integrated automation system",
      "Custom reporting dashboard",
      "Detailed SOPs and documentation",
      "Team training materials",
      "Video walkthroughs of key processes",
    ],
  },
  "retainer-support": {
    id: 3,
    tier: "Retainer",
    title: "Virtual Assistant / Retainer-Style Package",
    subtitle: "Ongoing Support. Monthly Optimization and Reporting.",
    color: "maroon",
    priceRange: "$1,500 a month or $25 an hour",
    description:
      "Ongoing support and optimization of your automation systems. Perfect for businesses that want continuous improvement and priority support.",
    fullDescription: `The Retainer Package is ideal for businesses that want to maintain and continuously improve their automation systems without hiring a full-time employee. I will monitor your automations, fix issues quickly, add new workflows as your business evolves, and provide strategic optimization recommendations.

Think of me as your external ops/automation team. I handle the day-to-day maintenance so you can focus on growing your business.`,
    features: [
      "Ongoing automation maintenance, updates and tweaks",
      "Monthly monitoring for errors or breakdowns",
      "Adding or adjusting small workflows as needed",
      "Priority support (rushed fixes, small integrations)",
    ],
    includes: [
      "Monthly check-in call",
      "Performance monitoring and reporting",
      "Priority support for urgent issues",
      "Quarterly strategic optimization review",
    ],
    timeline: "Ongoing",
    deliverables: [
      "Monthly performance report",
      "Optimization recommendations",
      "New workflows as created",
      "Updated documentation as needed",
    ],
  },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = serviceDetails[slug];

  if (!service) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0a1e3f] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-4">
            Service not found
          </h2>
          <Link
            to="/"
            className="text-[#000080] dark:text-[#C1CBF8] hover:underline"
          >
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const colorClasses = {
    navy: {
      header: "bg-[#000080]",
      accent: "#000080",
    },
    sage: {
      header: "bg-[#AFA8BA]",
      accent: "#AFA8BA",
    },
    maroon: {
      header: "bg-[#6D0000]",
      accent: "#6D0000",
    },
  };

  const colors = colorClasses[service.color];

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1e3f] transition-colors duration-300">
      {/* Header */}
      <div className={`${colors.header} text-white py-12 md:py-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 mb-6 hover:opacity-80 transition-opacity"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          <FadeInUp delay={0.1}>
            <div className="text-xs font-semibold opacity-75 uppercase tracking-widest mb-3">
              {service.tier} Plan
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90">{service.subtitle}</p>
          </FadeInUp>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Price */}
        <FadeInUp delay={0.2}>
          <div
            className="inline-block px-6 py-3 rounded-lg text-white font-bold text-xl mb-12"
            style={{ backgroundColor: colors.accent }}
          >
            {service.priceRange}
          </div>
        </FadeInUp>

        {/* Description */}
        <FadeInUp delay={0.3}>
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-6">
              About This Service
            </h2>
            <p className="text-lg text-[#6D6D6D] dark:text-[#C1CBF8] leading-relaxed whitespace-pre-line mb-4">
              {service.fullDescription}
            </p>
          </div>
        </FadeInUp>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <FadeInUp delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-6">
                What's Included
              </h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: colors.accent }}
                    />
                    <span className="text-[#6D6D6D] dark:text-[#C1CBF8]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>

          {/* Details */}
          <FadeInUp delay={0.5}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-4">
                  Timeline
                </h3>
                <p className="text-[#6D6D6D] dark:text-[#C1CBF8] text-lg font-semibold">
                  {service.timeline}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-2">
                  {service.deliverables.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-[#6D6D6D] dark:text-[#C1CBF8]"
                    >
                      <span
                        className="w-2 h-2 rounded-full flex-shrink-0 mt-2"
                        style={{ backgroundColor: colors.accent }}
                      ></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Additional Includes */}
        <FadeInUp delay={0.6}>
          <div className="bg-white dark:bg-[#C1CBF8]/5 rounded-xl p-8 border border-[#AFA8BA]/30 mb-16">
            <h3 className="text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-6">
              This Package Includes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {service.includes.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    style={{ color: colors.accent }}
                  />
                  <span className="text-[#6D6D6D] dark:text-[#C1CBF8]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>

        {/* CTA Section */}
        <FadeInUp delay={0.7}>
          <div className="text-center">
            <a
              href="https://api.leadconnectorhq.com/widget/booking/QEeSb9cOesZn5Ia2Q89P"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 text-white font-bold rounded-lg transition-opacity hover:opacity-85"
              style={{ backgroundColor: colors.accent }}
            >
              Book a Discovery Call
            </a>
            <p className="mt-4 text-[#6D6D6D] dark:text-[#C1CBF8]">
              Let's discuss how this package can work for your business
            </p>
          </div>
        </FadeInUp>
      </div>

      <Footer />
    </div>
  );
}
