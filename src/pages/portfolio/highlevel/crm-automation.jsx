import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

function CRMAutomation() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-primary-50">
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
                Highlevel
              </Link>
              <span>→</span>
              <span className="text-navy-900 font-medium">
                CRM Automation Setup
              </span>
            </div>
          </nav>

          {/* Project Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">
                  Highlevel
                </span>
                <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full font-medium">
                  Automation
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-navy-900 mb-6">
                CRM Automation Setup
              </h1>
              <p className="text-xl text-navy-700 mb-8">
                Complete CRM automation system designed to nurture leads and
                streamline customer journey from initial contact to conversion.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                  View Live Demo
                </button>
                <button className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <img
                  src="/images/GHL Automation Walkthrough Thumbnail.webp"
                  alt="CRM Automation Setup"
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
                  This comprehensive CRM automation system was built using
                  Highlevel to create a seamless customer journey from lead
                  capture to conversion. The system includes automated follow-up
                  sequences, lead scoring, and personalized communication
                  workflows.
                </p>
                <p>
                  The automation handles multiple touchpoints including email
                  sequences, SMS follow-ups, task assignments, and lead routing
                  based on behavior and engagement levels. This ensures no leads
                  fall through the cracks and every prospect receives timely,
                  relevant communication.
                </p>

                <h3 className="text-2xl font-semibold text-navy-900 mt-8 mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Automated lead nurturing sequences with 7+ touchpoints
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Dynamic lead scoring based on engagement and behavior
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Multi-channel communication (Email, SMS, Calls)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Automated task creation and assignment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      Integration with calendar booking and form submissions
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
                      Highlevel Administration
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <span className="ml-2 text-navy-900 font-medium">
                      2 weeks
                    </span>
                  </div>
                  <div>
                    <span className="text-gray-600">Client:</span>
                    <span className="ml-2 text-navy-900 font-medium">
                      Marketing Agency
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">
                    Highlevel
                  </span>
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm rounded-full">
                    Automation
                  </span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 text-sm rounded-full">
                    CRM
                  </span>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                    Email Marketing
                  </span>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">
                  Results
                </h3>
                <div className="space-y-3">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      300%
                    </div>
                    <div className="text-sm text-green-700">
                      Increase in Lead Response
                    </div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">85%</div>
                    <div className="text-sm text-blue-700">
                      Automation Efficiency
                    </div>
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
              <Link to="/portfolio/highlevel/pipeline-system" className="group">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Pipeline Management System
                  </h3>
                  <p className="text-navy-700">
                    Custom pipeline setup for lead management and conversion
                    optimization.
                  </p>
                </div>
              </Link>
              <Link to="/portfolio/highlevel/email-templates" className="group">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-purple-600 transition-colors">
                    Email Template Library
                  </h3>
                  <p className="text-navy-700">
                    Professional email templates for different stages of
                    customer journey.
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

export default CRMAutomation;
