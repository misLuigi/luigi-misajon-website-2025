import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

function WhatIsSocialMedia() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Link
                to="/blog"
                className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                Blog
              </Link>
              <span>→</span>
              <span className="text-gray-900 dark:text-gray-200 font-medium">
                The importance of social media & social media management
              </span>
            </div>
          </nav>

          {/* Article Header */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Featured Image */}
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <img
                src="/images/SMM Blog Visual.webp"
                alt="Laptop with social media platform hovering above and around it."
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Meta */}
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm rounded-full font-medium">
                  Social Media Management
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  November 4, 2025
                </span>
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">
                  3 min read
                </span>
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">
                  Luigi Misajon
                </span>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center px-2 mb-10">
                  The Importance Of Social Media & Social Media Management
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Okay, let’s say you are a small business owner or a course
                  creator and you sell digital products online. In todays world,
                  brands in order to generate leads, traffic, or sales, all of
                  it they utilize the internet and social media.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  So, what even is <em>SOCIAL MEDIA?</em>
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  It is a form of online communication where users can connect,
                  create, share content, and build virtual communities.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                  1. How it works?
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Social media uses the internet to create virtual spaces for
                  interaction. Users can create profiles and then connect with
                  other users, join groups, and follow interests.
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 my-8">
                  <q className="text-sm text-gray-800 italic dark:text-gray-200">
                    Today, getting people to hear your story on social media,
                    and then act on it, requires using a platform’s native
                    language, paying attention to context, understanding the
                    nuances and subtle differences that make each platform
                    unique, and adapting your content to match.
                  </q>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    - Gary Vaynerchuk
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                  2. What people do on social media?
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  People use social media to stay <em>Informed</em>. They follow
                  influencers, news outlets, brands they liked, and vloggers
                  that entertains them.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  They also use social media to <em>Connect</em>. People want to
                  connect with other people, friends, families, co-workers,
                  networks, and communities.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  People use social media to be <em>Entertained</em>. There are
                  so many content on social media that entertains people such as
                  memes, video logs or vlogs, and product reviews.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                  3. What are some of the Social Media Platforms?
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  There so many social media platforms on the internet and some
                  of the popular ones include:{" "}
                  <em>Facebook, Instagram, TikTok, X, & LinkedIn.</em>
                </p>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  So, what even is <em>SOCIAL MEDIA MANAGEMENT?</em>
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Social media management is the strategic process of{" "}
                  <em>Creating, Analyzing, Scheduling, and Engaging</em> with
                  content posted on social media platforms on behalf of a brand
                  or individual.
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 my-8">
                  <q className="text-sm text-gray-800 italic dark:text-gray-200">
                    We don’t have a choice on whether we do social media, the
                    question is how well we do it.
                  </q>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    - Erik Qualman
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  What are the tasks of a <em>SOCIAL MEDIA MANAGER?</em>
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  A professional social media manager acts as the voice, eyes,
                  and ears of the brand online.
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 my-8">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                    The work of a social media manager include:
                  </p>

                  <ul className="list-disc list-inside mb-6">
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      <em className="font-semibold">Strategy Development:</em>{" "}
                      They start in understanding the business’s goal. Is it to
                      increase brand awareness, generate leads, drive a traffic
                      to a website, build email list or a community?
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      <em className="font-semibold">Content Creation:</em>{" "}
                      business is clear, SMM’s or Social Media Managers can now
                      proceed on what content is best fit for the objective.
                      This is the most visible part. It involves generating
                      copies, making graphics, editing videos, finding relevant
                      user-generated content to share.
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      <em className="font-semibold">
                        Scheduling and Publishing:
                      </em>{" "}
                      The business goal is clear, content is ready. Now, the
                      next thing to do is publish. To maintain consistent
                      presence, SMM’s uses tools like Meta Business Suite and
                      Highlevel to schedule posts in advance.
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      <em className="font-semibold">
                        Community engagement & Listening:
                      </em>{" "}
                      The content have been uploaded of course people will
                      comment, ask, and rant about products or services. This is
                      a critical, two-way street. It involves responding to
                      comments, messages, and mentions. It also means
                      proactively listening to conversations about the brand and
                      the industry (social listening) to find opportunities or
                      address potential issues before they escalate. This is how
                      a brand builds relationships and shows it cares.
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      <em className="font-semibold">Analytics & Reporting:</em>{" "}
                      SMM’s constantly tracks SMM’s constantly tracks
                      performance. They analyze metrics like reach, engagement
                      rate, follower growth, and click-through rates. They then
                      translate this data into actionable insights and reports
                      to show what's working, what isn't, and how the strategy
                      is contributing to the overall business goals. This
                      data-driven approach is what separates a professional from
                      an amateur.
                    </li>
                  </ul>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Managing Social Media is crucial if you are building brands or
                  making your business visible online. Today, for a huge portion
                  of the global population, a brand's social media profile{" "}
                  <em className="italic font-medium">is its storefront.</em>
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 my-8">
                  <ul className="list-decimal list-inside mb-6">
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      The customers are there.
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      It is the new frontline of customer service.
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      It builds brand trust and authenticity.
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      It’s a powerful engine for lead generation and sales.
                    </li>
                    <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                      It provides invaluable market insights.
                    </li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  Conclusion
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  So in conclusion, effective social media management isn't just
                  a marketing task; it's a core business function that impacts
                  sales, customer service, public relations, and brand
                  reputation. In a world where a brand's digital presence is
                  paramount, having a skilled manager at the helm is essential
                  for survival and growth.
                </p>
              </div>

              {/* Author Section */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16">
                    <img
                      src="/images/Headshot Profile Picture .webp"
                      alt="Profile photo of Luigi."
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      Luigi Misajon
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Social Media Manager | Highlevel Admin Specialist | Vibe
                      Coder
                    </p>
                  </div>
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  Share this article
                </h4>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
                    Twitter
                  </button>
                  <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-300">
                    LinkedIn
                  </button>
                  <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors duration-300">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8">
              Related Posts
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                to="/blog/building-responsive-uis-tailwind"
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">
                    CSS
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Building Responsive UIs with Tailwind CSS
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Learn how to create beautiful, responsive user interfaces
                    using Tailwind CSS.
                  </p>
                </div>
              </Link>
              <Link to="/blog/javascript-es2024-new-features" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-full">
                    JavaScript
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    JavaScript ES2024: New Features You Should Know
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Discover the latest JavaScript features and how they can
                    improve your workflow.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* Back to Blog */}
          <div className="mt-12 text-center">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium transition-colors duration-300"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default WhatIsSocialMedia;
