import { Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About Me" },
    { path: "/blog", label: "Blog" },
    { path: "/freebies", label: "Freebies" },
    { path: "/contact", label: "Contact Me" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#FCF7FF] dark:bg-[#0a1e3f] border-b border-[#AFA8BA] dark:border-[#AFA8BA] shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 h-full flex items-center">
            <img
              className="h-10 w-auto cursor-pointer dark:invert transition-all duration-300"
              src="/icon/wordmark-landscape-white-bg-1920-by-1080-px.png"
              alt="Luigi Misajon Logo"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-[#000080] dark:text-[#C1CBF8] bg-transparent"
                      : "text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-[#FCF7FF]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Actions - Theme Toggle + CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#AFA8BA] dark:bg-[#AFA8BA] text-[#FCF7FF] hover:bg-[#9A95A5] dark:hover:bg-[#9A95A5] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link
              to="/contact"
              className="bg-[#000080] hover:bg-[#00005F] text-[#FCF7FF] px-6 py-2 rounded-lg font-medium transition-colors duration-300"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-[#AFA8BA] text-[#FCF7FF] hover:bg-[#9A95A5] transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#000080] dark:text-[#C1CBF8] hover:text-[#6D0000] dark:hover:text-[#FCF7FF] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#000080]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#FCF7FF] dark:bg-[#0a1e3f] border-t border-[#AFA8BA] dark:border-[#AFA8BA] transition-colors duration-300">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    isActive(item.path)
                      ? "text-[#000080] dark:text-[#C1CBF8] bg-transparent"
                      : "text-[#6D6D6D] dark:text-[#C1CBF8] hover:text-[#000080] dark:hover:text-[#FCF7FF]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-[#000080] hover:bg-[#00005F] text-[#FCF7FF] px-6 py-3 rounded-lg font-medium text-center transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's Talk
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
