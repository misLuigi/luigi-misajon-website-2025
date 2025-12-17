import { FadeInUp } from "./MotionWrapper";

function ToolsCarousel() {
  const tools = [
    { name: "React", image: "React_Logo_0.svg" },
    { name: "Node.js", image: "Node.js_idBSZu62Vz_1.svg" },
    { name: "Tailwind CSS", image: "Tailwind CSS_idAfURhv2v_0.svg" },
    { name: "JavaScript", image: "javascript-1.svg" },
    { name: "HTML", image: "html-1.svg" },
    { name: "CSS", image: "css-3.svg" },
    { name: "ChatGPT", image: "ChatGPT_Logo_0.svg" },
    { name: "Gemini AI", image: "gemini-ai.svg" },
    { name: "N8n", image: "N8n.io_Logo_0.svg" },
    { name: "Figma", image: "Figma_Symbol_0.svg" },
    { name: "GitHub", image: "GitHub_Symbol_0.svg" },
    { name: "Git", image: "git.svg" },
    { name: "Canva", image: "Canva_Logo_0.svg" },
    { name: "Affinity", image: "Affinity_idrH4ciTYx_0.svg" },
    { name: "CapCut", image: "CapCut_Logo_0.svg" },
    { name: "Pinterest", image: "Pinterest_Symbol_0.svg" },
    { name: "Vercel", image: "Vercel_Logo_0.svg" },
    { name: "Linux", image: "linux-tux.svg" },
  ];

  return (
    <div className="bg-[#cccce6] dark:bg-[#374469] py-8 lg:py-12 border-t border-b border-[#AFA8BA] dark:border-[#AFA8BA] transition-colors duration-300 relative overflow-hidden">
      {/* Background Pattern - Masked (Left Side) */}
      <div
        className="absolute inset-0 opacity-100% dark:opacity-100% pointer-events-none"
        style={{
          backgroundImage: "url('/images/axiom-pattern.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "auto",
          maskImage:
            "radial-gradient(ellipse 70% 85% at 20% 20%, black, transparent)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 85% at 20% 20%, black, transparent)",
        }}
      ></div>

      {/* Content - Positioned Above Background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Carousel Container */}
        <FadeInUp delay={0.3}>
          <div className="overflow-hidden">
            <div className="flex gap-8 animate-scroll whitespace-nowrap">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex flex-col items-center gap-3 min-w-[120px]"
                >
                  <img
                    className="w-12 h-12 rounded-xl dark:invert transition-all duration-300"
                    src={`/carousel-images/${tool.image}`}
                    alt={`${tool.name} Logo`}
                  />
                  <span className="text-sm font-medium text-[#000080] dark:text-[#C1CBF8] text-center transition-colors duration-300">
                    {tool.name}
                  </span>
                </div>
              ))}

              {/* Duplicate items for seamless loop */}
              {tools.map((tool, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 flex flex-col items-center gap-3 min-w-[120px]"
                >
                  <img
                    className="w-12 h-12 rounded-xl grayscale dark:grayscale-0 dark:invert transition-all duration-300"
                    src={`/carousel-images/${tool.image}`}
                    alt={`${tool.name} Logo`}
                  />
                  <span className="text-sm font-medium text-[#000080] dark:text-[#C1CBF8] text-center transition-colors duration-300">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeInUp>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 55s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: none;
        }
      `}</style>
    </div>
  );
}

export default ToolsCarousel;
