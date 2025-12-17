import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

function DevantProductDesign() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      id: 1,
      src: "/images/Devant Product Page 1.webp",
      alt: "Devant Product Page Design 1",
      description: "Landing Page Design",
    },
    {
      id: 2,
      src: "/images/Devant Product Page 2.webp",
      alt: "Devant Product Page Design 2",
      description: "Product Details Section",
    },
  ];

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
                Graphics Design
              </Link>
              <span>→</span>
              <span className="text-navy-900 font-medium">
                Devant Product Design
              </span>
            </div>
          </nav>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                  Graphics Design
                </span>
                <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full font-medium">
                  UI/UX
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
                Speaker Product Graphic Design
              </h1>

              <p className="text-xl text-navy-700 mb-8">
                The Devant Product Page was designed to create a compelling
                digital presence for the brand. The design focuses on showcasing
                product features in an intuitive and visually appealing manner.
              </p>

              <p className="text-xl text-navy-700 mb-8">
                The page features a modern layout with strategic use of fonts,
                colors, and product imagery to highlight key product benefits.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#gallery"
                  className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  View Gallery
                </a>
              </div>
            </div>
            <div className="relative">
              <div
                className="bg-white rounded-2xl shadow-xl p-6 cursor-pointer"
                onClick={() => setSelectedImage(images[0])}
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full rounded-xl"
                />
                <div className="absolute top-8 right-8 bg-white rounded-full p-2 shadow-lg">
                  <svg
                    className="w-5 h-5 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                    />
                  </svg>
                </div>
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
                <p className="text-xl text-navy-700 mb-8">
                  I have a brand new Devant Sonique Surf Portable Speaker laying
                  around my living room when the idea of making a product page
                  design for it struck me. The design focuses on showcasing the
                  speaker's features and benefits in a visually appealing way.
                </p>

                <p className="text-xl text-navy-700 mb-8">
                  I utilize AI such as Gemini's Nano Banana Model, Manus AI 1.5,
                  and Leonardo AI to help me craft the copies and images for
                  this project. Tools such as Canva and Affinity Version 3 by
                  Canva to compile all together the design assets.
                </p>

                <p className="text-xl text-navy-700 mb-8">
                  I made a case study of it where I made my brother to sell the
                  new speaker using the raw photos he took of it and postes it
                  on Facebook Marketplace. While I used my newly designed
                  product page to sell it. Amazingly I was able to get an
                  inquiry and made a 100% sale. Well, it's only one sale but
                  still, it's a sale!
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
                  Design Highlights
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Clean and minimal design with modern aesthetics</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Strategic use of color and typography for visual hierarchy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      AI utilized images from raw photos for enhanced visuals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Professional imagery and icon design for brand cohesion
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Conversion-optimized layout with strategic sections
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
                      Graphics Design
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Type:</span>
                    <span className="ml-2 text-navy-900 font-medium">
                      Product Page Design
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Status:</span>
                    <span className="ml-2 text-green-600 font-medium">
                      Completed
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    Canva
                  </span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full">
                    Generative AI
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                    Affinity
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Leonardo AI
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Results
                </h3>
                <div className="space-y-3">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-blue-700">Flip Sales</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      4.2/5
                    </div>
                    <div className="text-sm text-green-700">Design Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Section */}
          <div id="gallery" className="mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">
              Design Showcase
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {images.map((image) => (
                <div
                  key={image.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-2xl group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl flex items-center justify-center">
                      <div className="bg-white rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-6 h-6 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-center text-navy-700 font-medium">
                    {image.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Modal for Image Enlargement */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="relative max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-300 z-10"
                >
                  <svg
                    className="w-6 h-6 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="mt-4 text-center text-white">
                  <h3 className="text-2xl font-semibold">
                    {selectedImage.description}
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* Related Projects */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-8">
              Related Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/portfolio/development/portfolio-website"
                className="group h-full"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                    Portfolio Website
                  </h3>
                  <p className="text-navy-700 flex-grow">
                    Modern website design using Highlevel's website builder.
                  </p>
                </div>
              </Link>
              <Link
                to="/portfolio/highlevel/crm-automation"
                className="group h-full"
              >
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-primary-600 transition-colors">
                    CRM Automation Setup
                  </h3>
                  <p className="text-navy-700 flex-grow">
                    Complete CRM automation system designed to nurture leads and
                    streamline customer journey from initial contact to
                    conversion.
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

export default DevantProductDesign;
