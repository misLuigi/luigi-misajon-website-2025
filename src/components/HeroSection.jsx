import { Link } from "react-router-dom";
import { Lightbulb, Zap, Cog, BarChart3 } from "lucide-react";
import { FadeInLeft, FadeInRight } from "./MotionWrapper";

function HeroSection() {
  return (
    <div className="bg-[#FCF7FF] dark:bg-[#0a1e3f] relative overflow-hidden transition-colors duration-300">
      {/* Circuit Board Background with Radial Mask */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 dark:opacity-40"
          style={{
            backgroundImage: "url('/images/circuit-board.svg')",
            backgroundRepeat: "repeat",
            backgroundSize: "300px 300px",
            maskImage:
              "linear-gradient(to bottom, transparent 10%,  black 40%, black 10%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 10%, black 40%, black 10%, transparent 100%)",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <FadeInLeft delay={0.2}>
            <div className="space-y-8">
              {/* Main Title */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#000080] dark:text-[#C1CBF8] leading-tight">
                AI Automation Specialist
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl lg:text-2xl font-medium text-[#636e97] dark:text-[#C1CBF8] leading-relaxed">
                I build{" "}
                <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                  AI-powered
                </span>{" "}
                automations that save you time and{" "}
                <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                  grow
                </span>{" "}
                your business. If you want systems that actually deliver{" "}
                <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                  results
                </span>
                , you're in the{" "}
                <span className="text-[#000080] dark:text-[#C1CBF8] font-bold">
                  right place
                </span>
                .
              </p>

              {/* Call-to-Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="https://api.leadconnectorhq.com/widget/booking/QEeSb9cOesZn5Ia2Q89P"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#000080] hover:bg-[#00005F] text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                >
                  Book A Discovery Call Now
                </a>
                <Link
                  to="/portfolio"
                  className="bg-white dark:bg-[#0a1e3f] border-2 border-[#000080] text-[#000080] dark:text-[#C1CBF8] dark:border-[#C1CBF8] hover:bg-[#6D0000] hover:border-[#6D0000] dark:hover:bg-[#C1CBF8] hover:text-white dark:hover:text-[#0a1e3f] px-8 py-3 rounded-lg font-semibold transition-colors duration-300 text-center"
                >
                  View My Work
                </Link>
              </div>
            </div>
          </FadeInLeft>

          {/* Right Column - Automation Process Card */}
          <FadeInRight delay={0.4}>
            <div className="flex justify-center lg:justify-end h-full">
              <div className="w-full max-w-md">
                <div className="bg-[#FCF7FF] dark:bg-[#C1CBF8]/10 border border-[#AFA8BA] dark:border-[#AFA8BA] rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                  {/* Step 1 */}
                  <div className="flex gap-4 mb-8">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#000080]">
                        <Lightbulb className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#000080] dark:text-[#C1CBF8] mb-1">
                        Discovery
                      </h4>
                      <p className="text-sm text-[#6D6D6D] dark:text-[#C1CBF8]">
                        Map your workflows & identify opportunities
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 mb-8">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#000080]">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#000080] dark:text-[#C1CBF8] mb-1">
                        Implementation
                      </h4>
                      <p className="text-sm text-[#6D6D6D] dark:text-[#C1CBF8]">
                        Build & integrate automation systems
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 mb-8">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#000080]">
                        <Cog className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#000080] dark:text-[#C1CBF8] mb-1">
                        Optimization
                      </h4>
                      <p className="text-sm text-[#6D6D6D] dark:text-[#C1CBF8]">
                        Fine-tune & monitor performance
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-[#000080]">
                        <BarChart3 className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-[#000080] dark:text-[#C1CBF8] mb-1">
                        Growth
                      </h4>
                      <p className="text-sm text-[#6D6D6D] dark:text-[#C1CBF8]">
                        Scale systems as your business grows
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInRight>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
