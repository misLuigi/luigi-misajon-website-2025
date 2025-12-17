import Footer from "../components/Footer";
import ToolsCarousel from "../components/ToolsCarousel";
import WhatIDo from "../components/WhatIDo";
import FeaturedWork from "../components/FeaturedWork";
import ServicesOffered from "../components/ServicesOffered";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      {/* Hero Section Component */}
      <HeroSection />

      {/* Tools and Skills Showcase */}
      <ToolsCarousel />

      {/* What I Do Section */}
      <WhatIDo />

      {/* Envelope Card Stamp
        <div className="absolute bottom-8 right-8 lg:bottom-16 lg:right-16 z-20">
          <div className="card flex justify-center transform rotate-12 hover:rotate-0 transition-transform duration-300">
            <div className="relative bg-white w-[220px] sm:w-[280px] group transition-all duration-700 aspect-video flex items-center justify-center shadow-lg">
              <div className="transition-all flex flex-col items-center py-5 justify-start duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16">
                <p className="text-lg sm:text-xl font-semibold text-gray-500 font-sans-serif">
                  Thank You!
                </p>
                <p className="px-8 text-[9px] sm:text-[11px] text-gray-700 text-center font-sans-serif">
                  It's so nice that you had the time to visit my portfolio!
                </p>
                <p className="font-sans-serif text-[9px] sm:text-[11px] text-gray-700 text-center">
                  Wishing you a fantastic day ahead!
                </p>
                <p className="font-sans text-[9px] text-gray-700 pt-4">
                  LUIGI.
                </p>
              </div>
              <button className="seal bg-rose-500 text-red-800 w-8 aspect-square rounded-full z-40 text-[8px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900">
                LUIGI.
              </button>
              <div className="tp transition-all duration-1000 group-hover:duration-100 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)] bg-[#0A1E3F]"></div>
              <div className="lft transition-all duration-700 absolute w-full h-full [clip-path:polygon(50%_50%,_0_0,_0_100%)] bg-[#0A1E3F]"></div>
              <div className="rgt transition-all duration-700 absolute w-full h-full [clip-path:polygon(50%_50%,_100%_0,_100%_100%)] bg-[#0A1E3F]"></div>
              <div className="btm transition-all duration-700 absolute w-full h-full [clip-path:polygon(50%_50%,_100%_100%,_0_100%)] bg-[#0A1E3F]"></div>
            </div>
          </div>
        </div>*/}

      {/* Featured Work Component */}
      <FeaturedWork />

      {/* Services Offered Component */}
      <ServicesOffered />

      <Footer />
    </>
  );
}

export default Home;
