import Footer from "../components/Footer";
import { FadeInUp } from "../components/MotionWrapper";

function Freebies() {
  const freebies = [
    {
      id: 1,
      title: "React Component Library",
      description:
        "A collection of reusable React components with Tailwind CSS",
      downloadCount: "1.2k",
      category: "Frontend",
    },
    {
      id: 2,
      title: "Figma Design System",
      description:
        "Complete design system with components, colors, and typography",
      downloadCount: "856",
      category: "Design",
    },
    {
      id: 3,
      title: "Node.js Starter Template",
      description: "Production-ready Node.js API template with authentication",
      downloadCount: "634",
      category: "Backend",
    },
    {
      id: 4,
      title: "CSS Animation Pack",
      description:
        "Beautiful CSS animations and transitions for modern websites",
      downloadCount: "2.1k",
      category: "Frontend",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#0a1e3f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <FadeInUp delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-8">
                Free Resources
              </h1>
              <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] max-w-3xl mx-auto leading-relaxed">
                Free tools, templates, and resources to help you build amazing
                projects and streamline your workflow
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {freebies.map((item, index) => (
                <FadeInUp key={item.id} delay={0.3 + index * 0.1}>
                  <div className="bg-white dark:bg-[#0a1e3f] rounded-2xl shadow-lg border border-[#AFA8BA]/20 p-8 hover:shadow-2xl hover:border-[#6D0000]/50 transition-all duration-300 group">
                    <div className="flex justify-between items-start mb-6">
                      <span className="px-4 py-2 bg-[#FCF7FF] dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] text-sm font-semibold rounded-full border border-[#AFA8BA]/20">
                        {item.category}
                      </span>
                      <span className="text-sm font-medium text-[#6D6D6D] dark:text-[#C1CBF8]/70 bg-[#FCF7FF] dark:bg-[#000080]/10 px-3 py-1 rounded-full">
                        {item.downloadCount} downloads
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-4 group-hover:text-[#6D0000] transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-8 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex gap-3">
                      <button className="flex-1 bg-[#000080] hover:bg-[#6D0000] text-[#C1CBF8] px-6 py-3 rounded-lg font-bold transition-all duration-300">
                        Download Free
                      </button>
                      <button className="px-6 py-3 border-2 border-[#AFA8BA] text-[#000080] dark:text-[#C1CBF8] rounded-lg hover:bg-[#FCF7FF] dark:hover:bg-[#000080]/20 transition-colors duration-300 font-semibold">
                        Preview
                      </button>
                    </div>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <div className="bg-[#FCF7FF] dark:bg-[#000080]/10 rounded-2xl shadow-xl border border-[#AFA8BA]/30 p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-4">
                Want More Free Resources?
              </h2>
              <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-8 text-lg leading-relaxed">
                Subscribe to my newsletter and get notified when I release new
                freebies, templates, and tools
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-[#AFA8BA]/30 rounded-lg focus:ring-2 focus:ring-[#000080] focus:border-transparent dark:bg-[#0a1e3f] dark:text-[#C1CBF8] dark:border-[#AFA8BA]/20 text-[#6D6D6D]"
                />
                <button className="bg-[#000080] hover:bg-[#6D0000] text-[#C1CBF8] px-8 py-3 rounded-lg font-bold transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Freebies;
