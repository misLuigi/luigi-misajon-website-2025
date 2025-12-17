import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

function PortfolioWebsite() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-navy-600">
              <Link
                to="/portfolio"
                className="hover:text-primary-600 transition-colors"
              >
                Portfolio
              </Link>
              <span>→</span>
              <Link
                to="/portfolio"
                className="hover:text-primary-600 transition-colors"
              >
                Development
              </Link>
              <span>→</span>
              <span className="text-navy-900 font-medium">
                Portfolio Website
              </span>
            </div>
          </nav>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                  Development
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                  React
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
                Portfolio Website
              </h1>
              <p className="text-xl text-navy-700 mb-8">
                Modern, responsive portfolio website built with React and
                Tailwind CSS, featuring glassmorphic design and smooth
                animations.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://luigi-misajon.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  View Live Site
                </a>
                <a
                  href="https://github.com/luigimisajon/luigi-website-2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary-500 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <img
                  src="/images/website-ss.png"
                  alt="Portfolio Website"
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-navy-900 mb-6">
                Project Overview
              </h2>
              <div className="prose prose-lg text-navy-700 space-y-6">
                <p>
                  This is my personal portfolio website showcasing my skills in
                  web development, social media management, and Highlevel
                  administration. Built with modern technologies and featuring a
                  sleek, professional design that reflects my brand and
                  capabilities.
                </p>
                <p>
                  The website features a responsive design that works seamlessly
                  across all devices, from mobile phones to desktop computers.
                  It includes multiple sections highlighting my services,
                  portfolio projects, blog content, and contact information.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Fully responsive design with mobile-first approach
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Glassmorphic design elements with backdrop blur effects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      React Router for seamless navigation between pages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Custom color palette and design system</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Interactive hover effects and smooth animations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Portfolio filtering system with category-based
                      organization
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Project Info
                </h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-gray-600">Category:</span>
                    <span className="ml-2 text-navy-900 font-medium">
                      Web Development
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <span className="ml-2 text-navy-900 font-medium">
                      1 week
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Status:</span>
                    <span className="ml-2 text-green-600 font-medium">
                      Live
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    Tailwind CSS
                  </span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full">
                    Vite
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    React Router
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Performance
                </h3>
                <div className="space-y-3">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">98</div>
                    <div className="text-sm text-green-700">
                      Lighthouse Score
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">1.2s</div>
                    <div className="text-sm text-blue-700">Load Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/portfolio/development/ecommerce-platform"
                className="group"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                    E-commerce Platform
                  </h3>
                  <p className="text-navy-700">
                    Full-stack e-commerce solution with modern UI and payment
                    integration.
                  </p>
                </div>
              </Link>
              <Link to="/portfolio/development/mobile-app" className="group">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Mobile App Development
                  </h3>
                  <p className="text-navy-700">
                    Cross-platform mobile application with native performance.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          {/* Back to Portfolio */}
          <div className="text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-300"
            >
              ← Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PortfolioWebsite;
