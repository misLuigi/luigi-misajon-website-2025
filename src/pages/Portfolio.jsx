import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FadeInUp } from "../components/MotionWrapper";

function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    "All",
    "Highlevel",
    "Graphics Design",
    "Development",
    "Automation",
  ];

  const projects = [
    // Highlevel Projects
    {
      id: 1,
      title: "CRM Automation Setup",
      description:
        "Complete CRM automation system with lead nurturing and follow-up sequences",
      image: "/images/GHL Automation Walkthrough Thumbnail.webp",
      category: "Highlevel",
      tags: ["Highlevel", "Automation", "CRM"],
      route: "/portfolio/highlevel/crm-automation",
    },

    // Graphics Design Projects
    {
      id: 2,
      title: "Devant Product Page",
      description:
        "Modern product page design featuring clean layouts and intuitive navigation",
      image: "/images/Devant Product Page 1.webp",
      category: "Graphics Design",
      tags: ["UI/UX", "Product Design", "Canva"],
      route: "/portfolio/design/devant-product-design",
    },

    // Development Projects
    {
      id: 3,
      title: "Portfolio Website",
      description: "Modern portfolio website built with React and Tailwind CSS",
      image: "/images/website-ss.png",
      category: "Development",
      tags: ["React", "Tailwind CSS", "Vite"],
      route: "/portfolio/development/portfolio-website",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#0a1e3f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          {/* Header */}
          <FadeInUp delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-6">
                My Portfolio
              </h1>
              <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] max-w-3xl mx-auto leading-relaxed">
                Explore my work across different categories and see how I bring
                ideas to life with automation and other unique skills.
              </p>
            </div>
          </FadeInUp>

          {/* Category Filter */}
          <FadeInUp delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-[#000080] text-white shadow-lg"
                      : "bg-white dark:bg-[#C1CBF8]/10 text-[#000080] dark:text-[#C1CBF8] border border-[#AFA8BA] dark:border-[#AFA8BA]/30 hover:border-[#000080] dark:hover:border-[#C1CBF8]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeInUp>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((project, index) => (
              <FadeInUp key={project.id} delay={0.3 + index * 0.1}>
                <Link to={project.route}>
                  <div className="bg-white dark:bg-[#0a1e3f] rounded-2xl shadow-lg border border-[#AFA8BA] dark:border-[#AFA8BA]/30 overflow-hidden hover:shadow-2xl hover:border-[#000080] dark:hover:border-[#C1CBF8] transition-all duration-300 flex flex-col h-full group">
                    <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 h-56">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <span className="px-3 py-1.5 bg-[#000080]/10 dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] text-xs font-semibold rounded-full">
                          {project.category}
                        </span>
                        <svg
                          className="w-5 h-5 text-[#000080] dark:text-[#C1CBF8] group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-3 group-hover:text-[#6D0000] dark:group-hover:text-[#6D0000] transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-sm md:text-base text-[#6D6D6D] dark:text-[#C1CBF8] mb-5 line-clamp-2 flex-1">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#AFA8BA]/20">
                        {project.tags.slice(0, 3).map((tag, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-[#AFA8BA]/20 dark:bg-[#AFA8BA]/10 text-[#6D6D6D] dark:text-[#C1CBF8] text-xs rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeInUp>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <FadeInUp delay={0.3}>
              <div className="text-center py-20">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-3">
                  No projects found
                </h3>
                <p className="text-[#6D6D6D] dark:text-[#C1CBF8] text-lg">
                  Try selecting a different category to see more projects.
                </p>
              </div>
            </FadeInUp>
          )}
        </div>

        {/* Why Work With Me Section */}
        <div className="bg-white dark:bg-[#0a1e3f] relative py-20 lg:py-32 transition-colors duration-300 border-t border-[#AFA8BA]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FadeInUp delay={0.2}>
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Column - Image */}
                <FadeInUp delay={0.3}>
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="/images/Concept to reality.webp"
                      alt="A picture of Luigi."
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </FadeInUp>

                {/* Right Column - Content */}
                <FadeInUp delay={0.4}>
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-6 leading-tight">
                        Why Work With Me
                      </h2>
                      <div className="w-16 h-1 bg-[#6D0000]"></div>
                    </div>

                    <div className="space-y-6">
                      <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] leading-relaxed">
                        Your{" "}
                        <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                          operations deserve more
                        </span>{" "}
                        than patchwork{" "}
                        <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                          solutions
                        </span>
                        .
                      </p>

                      <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] leading-relaxed">
                        I'll map out your{" "}
                        <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                          customer journey
                        </span>{" "}
                        with my{" "}
                        <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                          Highlevel Administration Services
                        </span>{" "}
                        and layout the{" "}
                        <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                          Pipelines
                        </span>
                        ,{" "}
                        <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                          CRM
                        </span>
                        , and{" "}
                        <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                          Automation
                        </span>{" "}
                        needed for your business to run smoothly so no leads
                        fall into the cracks.
                      </p>

                      <div className="pt-8">
                        <p className="text-2xl md:text-3xl lg:text-4xl text-[#000080] dark:text-[#C1CBF8] leading-relaxed">
                          Hi! I'm{" "}
                          <span className="font-bold text-[#6D0000]">
                            LUIGI
                          </span>
                          , your automation specialist.
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInUp>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
