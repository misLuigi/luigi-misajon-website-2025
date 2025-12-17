import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Freebies from "./pages/Freebies";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
// Portfolio project pages
import CRMAutomation from "./pages/portfolio/highlevel/crm-automation";
import PortfolioWebsite from "./pages/portfolio/development/portfolio-website";
import DevantProductDesign from "./pages/portfolio/design/devant-product-design";
// Blog post pages
import WhatIsSocialMedia from "./pages/blog/Social Media Management/what-is-social-media";
import WritingMyFirstPersonalBlog from "./pages/blog/Personal/writing-my-first-personal-blog";
import ConnectingReactContactFormToHighLevelUsingN8n from "./pages/blog/Automation/connecting-react-contact-form-to-highlevel-using-n8n";
import "./App.css";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white dark:bg-[#0a1e3f] transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/freebies" element={<Freebies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/:slug" element={<Services />} />

            {/* Portfolio Project Routes */}
            <Route
              path="/portfolio/highlevel/crm-automation"
              element={<CRMAutomation />}
            />
            <Route
              path="/portfolio/development/portfolio-website"
              element={<PortfolioWebsite />}
            />
            <Route
              path="/portfolio/design/devant-product-design"
              element={<DevantProductDesign />}
            />

            {/* Blog Post Routes */}
            <Route
              path="/blog/what-is-social-media"
              element={<WhatIsSocialMedia />}
            />
            <Route
              path="/blog/writing-my-first-personal-blog"
              element={<WritingMyFirstPersonalBlog />}
            />
            <Route
              path="/blog/writing-my-first-personal-blog"
              element={<WritingMyFirstPersonalBlog />}
            />
            <Route
              path="/blog/connecting-react-contact-form-to-highlevel-using-n8n"
              element={<ConnectingReactContactFormToHighLevelUsingN8n />}
            />

            {/* Placeholder routes for other projects */}
            <Route
              path="/portfolio/highlevel/pipeline-system"
              element={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Pipeline System</h1>
                    <p className="text-lg">Coming Soon!</p>
                  </div>
                </div>
              }
            />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
