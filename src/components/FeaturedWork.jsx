import { FadeInUp } from "./MotionWrapper";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio showcasing projects and services with smooth animations and dark mode support.",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/images/website-ss.png",
    link: "/portfolio/development/portfolio-website",
    external: false,
  },
  {
    id: 2,
    title: "Highlevel Services Automation",
    description:
      "Comprehensive CRM automation system that streamlines customer relationship management and workflow processes.",
    tags: ["Automation", "GHL", "CRM"],
    image: "/images/GHL Automation Walkthrough Thumbnail.webp",
    link: "/portfolio/highlevel/crm-automation",
    external: false,
  },
  {
    id: 3,
    title: "Devant Product Design",
    description:
      "Product design project showcasing UI/UX principles, user research, and design system implementation.",
    tags: ["Canva", "Graphics", "Affinity"],
    image: "/images/Devant Product Page 1.webp",
    link: "/portfolio/design/devant-product-design",
    external: false,
  },
];

const ProjectCard = ({ project }) => (
  <FadeInUp delay={project.id * 0.1}>
    <Link
      to={project.link}
      target={project.external ? "_blank" : undefined}
      rel={project.external ? "noopener noreferrer" : undefined}
      className="group block"
    >
      <div className="bg-[#FCF7FF] dark:bg-[#C1CBF8]/10 border-b border-[#AFA8BA] dark:border-[#AFA8BA] rounded-xl overflow-hidden hover:border-[#000080] dark:hover:border-[#C1CBF8] transition-all duration-300 shadow-md hover:shadow-lg h-full ">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 h-48">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
            />
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-3 group-hover:text-[#6D0000] transition-colors duration-300">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#6D6D6D] dark:text-[#C1CBF8] mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-[#AFA8BA]/20 dark:bg-[#AFA8BA]/20 text-[#6D6D6D] dark:text-[#C1CBF8] rounded-full transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Link */}
          <div className="flex items-center gap-2 text-[#000080] dark:text-[#C1CBF8] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
            {project.external ? "View Project" : "Learn More"}
            <ExternalLink className="w-4 h-4" />
          </div>
        </div>
      </div>
    </Link>
  </FadeInUp>
);

export default function FeaturedWork() {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-[#0a1e3f] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <FadeInUp delay={0.1}>
            <h2 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-4">
              Featured Work
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-[#6D6D6D] dark:text-[#C1CBF8] max-w-2xl">
              A selection of projects I'm proud of. Each represents my
              commitment to quality, innovation, and delivering real results.
            </p>
          </FadeInUp>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
