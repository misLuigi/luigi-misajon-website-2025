import Footer from "../components/Footer";
import { FadeInUp, FadeInLeft, FadeInRight } from "../components/MotionWrapper";

function About() {
  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#0a1e3f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <FadeInUp delay={0.1}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeInLeft delay={0.2}>
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-8 leading-tight">
                    Hello! I am <span className="text-[#6D0000]">LUIGI.</span>
                  </h1>
                  <div className="w-16 h-1 bg-[#6D0000] mb-8"></div>

                  <div className="space-y-6 mb-12">
                    <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] leading-relaxed">
                      Back when I was a kid I liked building things, imitating
                      stuff I thought I could definitely do. It started with a
                      kite, the farthest and biggest flying kite among my
                      friends to a mini sailing boat toy that has an anchor
                      retracting mechanism and complete with lights. I love
                      designing, creating, planning, and executing.
                    </p>
                    <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] leading-relaxed">
                      Right now, I extended my passion online. I now enjoy
                      creating stuff with automation, video editing, content
                      creation, code, and AI. I now create for businesses,
                      create contents, create software with AI for faster
                      deployment, create stories, tutorials, and resources.
                    </p>
                    <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] leading-relaxed">
                      I am trying to grow my own social media and build my own
                      loyal list by giving them a smooth customer journey when
                      they enter my CRM, both by using my knowledge in
                      GoHighLevel and n8n automation skills.
                    </p>
                    <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] leading-relaxed">
                      If you want to work with me and see how I can help you
                      with your business, please don't hesitate to send me a
                      message to one of my socials. I will be happy to talk with
                      you. Until then, please explore my website, blogs, free
                      resources, contents, and portfolio.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <FadeInUp delay={0.3}>
                      <div className="text-center p-4 rounded-xl bg-[#FCF7FF] dark:bg-[#000080]/10 border border-[#AFA8BA]/20">
                        <div className="text-3xl md:text-4xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-2">
                          50+
                        </div>
                        <div className="text-sm md:text-base text-[#6D6D6D] dark:text-[#C1CBF8]/80">
                          Contents Created
                        </div>
                      </div>
                    </FadeInUp>
                    <FadeInUp delay={0.4}>
                      <div className="text-center p-4 rounded-xl bg-[#FCF7FF] dark:bg-[#000080]/10 border border-[#AFA8BA]/20">
                        <div className="text-3xl md:text-4xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-2">
                          2
                        </div>
                        <div className="text-sm md:text-base text-[#6D6D6D] dark:text-[#C1CBF8]/80">
                          CRM Built
                        </div>
                      </div>
                    </FadeInUp>
                    <FadeInUp delay={0.5}>
                      <div className="text-center p-4 rounded-xl bg-[#FCF7FF] dark:bg-[#000080]/10 border border-[#AFA8BA]/20">
                        <div className="text-3xl md:text-4xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-2">
                          550+
                        </div>
                        <div className="text-sm md:text-base text-[#6D6D6D] dark:text-[#C1CBF8]/80">
                          Social Media Followers
                        </div>
                      </div>
                    </FadeInUp>
                    <FadeInUp delay={0.6}>
                      <div className="text-center p-4 rounded-xl bg-[#FCF7FF] dark:bg-[#000080]/10 border border-[#AFA8BA]/20">
                        <div className="text-3xl md:text-4xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-2">
                          2+
                        </div>
                        <div className="text-sm md:text-base text-[#6D6D6D] dark:text-[#C1CBF8]/80">
                          Years Experience
                        </div>
                      </div>
                    </FadeInUp>
                  </div>
                </div>
              </FadeInLeft>

              <FadeInRight delay={0.3}>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/images/Concept to reality.webp"
                    alt="Luigi Misajon"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </FadeInRight>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Bento Grid Section */}
      <div className="w-full bg-white dark:bg-[#0a1e3f] transition-colors duration-300 py-20 lg:py-32 border-t border-[#AFA8BA]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp delay={0.2}>
            <div className="mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-6">
                My Journey & Expertise
              </h2>
              <div className="w-16 h-1 bg-[#6D0000]"></div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {/* Large Box - Creative Problem Solver */}
              <div className="col-span-2 row-span-2 bg-[#FCF7FF] dark:bg-[#000080]/10 rounded-2xl shadow-xl border border-[#AFA8BA]/30 p-8 flex flex-col justify-center hover:shadow-2xl hover:border-[#6D0000]/50 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-4">
                  Creative Problem Solver
                </h3>
                <p className="text-lg text-[#6D6D6D] dark:text-[#C1CBF8]/90 leading-relaxed">
                  I love tackling complex challenges and finding innovative
                  solutions. From mapping customer journeys to building
                  automation systems with GoHighLevel and n8n, every project is
                  an opportunity to create something meaningful.
                </p>
              </div>

              {/* Small Box - Website Image */}
              <div className="col-span-1 row-span-1 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/website-ss.png"
                  alt="Luigi Misajon Portfolio Website"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Small Box - GHL Image */}
              <div className="col-span-1 row-span-1 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/GHL Automation Walkthrough Thumbnail.webp"
                  alt="Luigi Misajon"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Medium Box - OFW Story */}
              <div className="col-span-2 md:col-span-1 bg-[#FCF7FF] dark:bg-[#6D0000]/10 rounded-2xl shadow-xl border border-[#AFA8BA]/30 p-6 flex flex-col justify-center hover:shadow-2xl hover:border-[#6D0000]/50 transition-all duration-300">
                <h4 className="text-xl md:text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-3">
                  Overseas Filipino Worker
                </h4>
                <p className="text-base md:text-lg text-[#6D6D6D] dark:text-[#C1CBF8]/90">
                  I am a Filipino working as a kitchen cook in a nursing care
                  facility in Japan for 2 and a half years before I decided to
                  go fulltime content creator/freelancer.
                </p>
              </div>

              {/* Large Box - Philippines x Japan Image */}
              <div className="col-span-2 row-span-1 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/Philippines x Japan.webp"
                  alt="Philippines and Japan graphics."
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Small Box - Concept to Reality Image */}
              <div className="col-span-1 row-span-1 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <img
                  src="/images/Concept to reality.webp"
                  alt="Luigi's thumbnail picture."
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Large Box - From Concept to Reality */}
              <div className="col-span-2 bg-[#FCF7FF] dark:bg-[#AFA8BA]/10 rounded-2xl shadow-xl border border-[#AFA8BA]/30 p-8 flex flex-col justify-center hover:shadow-2xl hover:border-[#000080]/50 transition-all duration-300">
                <h4 className="text-2xl md:text-3xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-3">
                  From Concept to Reality
                </h4>
                <p className="text-lg text-[#6D6D6D] dark:text-[#C1CBF8]/90">
                  Whether it's CRM mapping, automation, or tools integrations -
                  I bring each of these to life with precision and creativity.
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
