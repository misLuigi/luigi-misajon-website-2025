import { useState } from "react";
import Footer from "../components/Footer";
import { FadeInUp, FadeInLeft, FadeInRight } from "../components/MotionWrapper";
import ContactForm from "../components/ContactForm";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#0a1e3f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <FadeInUp delay={0.1}>
            <div className="text-center mb-20">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-8">
                Let's Talk
              </h1>
              <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] max-w-3xl mx-auto leading-relaxed">
                Ready to automate your business or discuss your next project?
                Get in touch and let's create something amazing together.
              </p>
            </div>
          </FadeInUp>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* GoHighLevel Form */}
            <FadeInLeft delay={0.2}>
              <div className="bg-white dark:bg-[#0a1e3f] rounded-2xl shadow-lg border border-[#AFA8BA]/20 p-8 lg:p-10 hover:border-[#6D0000]/50 transition-all duration-300">
                <h2 className="text-3xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-2">
                  Send me a message
                </h2>
                <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-8">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
                {/* GoHighLevel Form Placeholder */}
                <div className="bg-[#FCF7FF] dark:bg-[#000080]/10 border-2 border-solid border-[#AFA8BA]/50 rounded-xl p-12 text-center min-h-96 flex flex-col items-center justify-center">
                  <ContactForm />
                  {/* <div className="text-5xl mb-4">📝</div>
                  <h3 className="text-xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-2">
                    GoHighLevel Form
                  </h3>
                  <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/70">
                    Embedded GoHighLevel contact form will be displayed here
                  </p>
                  <p className="text-sm text-[#6D6D6D] dark:text-[#C1CBF8]/60 mt-4">
                    This allows for better lead management and CRM integration
                  </p>{" "} */}
                </div>
              </div>
            </FadeInLeft>

            {/* Contact Info */}
            <FadeInRight delay={0.3}>
              <div className="space-y-6">
                {/* Get in Touch Card */}
                <div className="bg-white dark:bg-[#0a1e3f] rounded-2xl shadow-lg border border-[#AFA8BA]/20 p-8 hover:shadow-xl hover:border-[#6D0000]/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-8">
                    Get in Touch
                  </h3>
                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <svg
                          className="h-6 w-6 text-[#000080] dark:text-[#C1CBF8]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#000080] dark:text-[#C1CBF8] mb-1">
                          Email
                        </p>
                        <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80">
                          misluigiforwork@gmail.com
                        </p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <svg
                          className="h-6 w-6 text-[#000080] dark:text-[#C1CBF8]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#000080] dark:text-[#C1CBF8] mb-1">
                          Phone
                        </p>
                        <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <svg
                          className="h-6 w-6 text-[#000080] dark:text-[#C1CBF8]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-semibold text-[#000080] dark:text-[#C1CBF8] mb-1">
                          Location
                        </p>
                        <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80">
                          Chiba Prefecture, Japan
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Media Card */}
                <div className="bg-white dark:bg-[#0a1e3f] rounded-2xl shadow-lg border border-[#AFA8BA]/20 p-8 hover:shadow-xl hover:border-[#6D0000]/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-6">
                    Connect on Social
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Twitter */}
                    <a
                      href="https://x.com/theMis_Lui?t=1EvkadjLtPxNPT6VkbgJZA&s=09"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow on Twitter"
                      className="p-4 bg-[#FCF7FF] dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] rounded-lg hover:bg-[#000080] hover:text-[#C1CBF8] dark:hover:bg-[#000080] transition-all duration-300 border border-[#AFA8BA]/30 flex items-center justify-center"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href="https://www.linkedin.com/in/luigi-misajon-7a62042b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Connect on LinkedIn"
                      className="p-4 bg-[#FCF7FF] dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] rounded-lg hover:bg-[#000080] hover:text-[#C1CBF8] dark:hover:bg-[#000080] transition-all duration-300 border border-[#AFA8BA]/30 flex items-center justify-center"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    {/* GitHub */}
                    <a
                      href="https://github.com/misLuigi"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow on GitHub"
                      className="p-4 bg-[#FCF7FF] dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] rounded-lg hover:bg-[#000080] hover:text-[#C1CBF8] dark:hover:bg-[#000080] transition-all duration-300 border border-[#AFA8BA]/30 flex items-center justify-center"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/share/16EJk6TihL/"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow on Facebook"
                      className="p-4 bg-[#FCF7FF] dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] rounded-lg hover:bg-[#000080] hover:text-[#C1CBF8] dark:hover:bg-[#000080] transition-all duration-300 border border-[#AFA8BA]/30 flex items-center justify-center"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>

                    {/* YouTube */}
                    <a
                      href="http://www.youtube.com/@LuigiMisajon"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Subscribe on YouTube"
                      className="p-4 bg-[#FCF7FF] dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] rounded-lg hover:bg-[#000080] hover:text-[#C1CBF8] dark:hover:bg-[#000080] transition-all duration-300 border border-[#AFA8BA]/30 flex items-center justify-center"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/luigi_misajon?igsh=N3diOTR6aDIzd3Y="
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Follow on Instagram"
                      className="p-4 bg-[#FCF7FF] dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] rounded-lg hover:bg-[#000080] hover:text-[#C1CBF8] dark:hover:bg-[#000080] transition-all duration-300 border border-[#AFA8BA]/30 flex items-center justify-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram-icon lucide-instagram"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </FadeInRight>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
