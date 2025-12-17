import { Link } from "react-router-dom";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github,
  Mail,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#cccce6] dark:bg-[#0a1e3f] text-[#000080] dark:text-[#C1CBF8] transition-colors duration-300 mt-20">
      {/* Call to Action Section */}
      <div className="bg-[#FCF7FF] dark:bg-[#374469] py-16 border-t border-[#AFA8BA] relative overflow-hidden transition-colors duration-300">
        {/* Background Pattern - Masked */}
        <div
          className="absolute inset-0 opacity-100 dark:opacity-100 pointer-events-none"
          style={{
            backgroundImage: "url('/images/axiom-pattern.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "auto",
            maskImage:
              "radial-gradient(ellipse 70% 85% at 80% 80%, black, transparent)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 85% at 80% 80%, black, transparent)",
          }}
        ></div>

        {/* Content - Positioned Above Background */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#000080] dark:text-[#C1CBF8]">
            Ready to Start Your Next Project?
          </h2>
          <p className="text-xl text-[#6D6D6D] dark:text-[#C1CBF8] mb-8 max-w-3xl mx-auto">
            I know you have so much envisioned for your business. Let's
            collaborate and bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#000080] hover:bg-[#00005F] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
          >
            Let's Talk
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16 border-t border-[#AFA8BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Portfolio Section */}
            <div className="flex flex-col justify-start gap-4">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex-shrink-0 flex items-center"
              >
                <img
                  className="h-8 w-auto cursor-pointer dark:invert transition-all duration-300"
                  src="/icon/wordmark-landscape-white-bg-1920-by-1080-px.png"
                  alt="Luigi Misajon Logo"
                />
              </Link>
              <p className="text-[#6D6D6D] dark:text-[#C1CBF8] leading-relaxed text-sm">
                Helping businesses grow through effective automation and
                high-level administration services.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#000080] dark:text-[#C1CBF8]">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                  >
                    About Me
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/freebies"
                    className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                  >
                    Freebies
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-[#000080] dark:text-[#C1CBF8]">
                Connect
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/luigi-misajon-7a62042b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                >
                  <Linkedin size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="https://x.com/theMis_Lui?t=1EvkadjLtPxNPT6VkbgJZA&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter / X"
                  className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                >
                  <Twitter size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.facebook.com/share/16EJk6TihL/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                >
                  <Facebook size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.instagram.com/luigi_misajon?igsh=N3diOTR6aDIzd3Y="
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                >
                  <Instagram size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="http://www.youtube.com/@LuigiMisajon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                >
                  <Youtube size={24} strokeWidth={1.5} />
                </a>
                <a
                  href="https://github.com/misLuigi"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-white transition-colors duration-300"
                >
                  <Github size={24} strokeWidth={1.5} />
                </a>
              </div>

              {/* Additional Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-[#6D6D6D] dark:text-[#C1CBF8]">
                  <Mail size={20} strokeWidth={1.5} className="flex-shrink-0" />
                  <span>misluigiforwork@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#6D6D6D] dark:text-[#C1CBF8]">
                  <MapPin
                    size={20}
                    strokeWidth={1.5}
                    className="flex-shrink-0"
                  />
                  <span>Chiba Prefecture, Japan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-[#AFA8BA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <p className="text-[#6D6D6D] dark:text-[#C1CBF8] text-sm">
              © 2026 LUIGI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
