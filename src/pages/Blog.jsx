import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import PremiumButton from "../components/PremiumButton";
import { FadeInUp } from "../components/MotionWrapper";

function Blog() {
  const [activeFilter, setActiveFilter] = useState("All");
  const blogPosts = [
    {
      id: 1,
      title: "The importance of social media & social media management",
      excerpt:
        "Okay, let’s say you are a small business owner or a course creator and you sell digital products online. In todays world, brands in order to generate leads, traffic, or sales, all of it they utilize the internet and social media.",
      date: "November 4, 2025",
      readTime: "3 min read",
      category: "Social Media Management",
      image: "/images/SMM Blog Visual.webp",
      featured: true,
      slug: "what-is-social-media",
    },
    {
      id: 2,
      title:
        "How writing helps me organize my thoughts: My first personal blog",
      excerpt:
        "Okay, I have been always meaning to start writing and publish it. But the imposter syndrome always kicked in and I never got to it. But now I am finally doing it! This is my first personal blog post where I will share my thoughts, experiences, hobbies, projects benn doing and will try to do.",
      date: "November 11, 2024",
      readTime: "5 min read",
      category: "Personal",
      image: "/images/First Blog Feature Image-1.webp",
      featured: true,
      slug: "writing-my-first-personal-blog",
    },
  ];

  const categories = [
    "All",
    "Personal",
    "Tutorials",
    "Social Media Management",
    "Graphic Design",
    "Automation",
    "Vibe Coding",
  ];

  const filteredPosts =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeFilter);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-[#0a1e3f] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          {/* Header */}
          <FadeInUp delay={0.1}>
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-8">
                My Blog
              </h1>
              <p className="text-lg md:text-xl text-[#6D6D6D] dark:text-[#C1CBF8] max-w-3xl mx-auto leading-relaxed">
                Thoughts, tutorials, and insights about automation, social media
                management, content creation, and technology.
              </p>
            </div>
          </FadeInUp>

          {/* Category Filter */}
          <FadeInUp delay={0.2}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? "bg-[#000080] text-[#C1CBF8] shadow-lg"
                      : "bg-white dark:bg-[#000080]/10 text-[#000080] dark:text-[#C1CBF8] dark:hover:bg-[#000080]/20 border border-[#AFA8BA] hover:border-[#000080]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeInUp>

          {/* Featured Posts */}
          {activeFilter === "All" && (
            <FadeInUp delay={0.3}>
              <div className="mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-2">
                  Featured Posts
                </h2>
                <div className="w-16 h-1 bg-[#6D0000] mb-8"></div>
                <div className="grid md:grid-cols-2 gap-8">
                  {blogPosts
                    .filter((post) => post.featured)
                    .map((post, index) => (
                      <FadeInUp key={post.id} delay={0.4 + index * 0.1}>
                        <Link to={`/blog/${post.slug}`}>
                          <article className="bg-white dark:bg-[#0a1e3f] rounded-2xl shadow-lg border border-[#AFA8BA]/20 overflow-hidden hover:shadow-2xl hover:border-[#6D0000]/50 transition-all duration-300 group cursor-pointer h-full flex flex-col">
                            <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 h-56">
                              <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <div className="p-8 flex flex-col flex-grow">
                              <div className="flex items-center gap-4 mb-4">
                                <span className="px-4 py-1 bg-[#FCF7FF] dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] text-sm rounded-full font-medium border border-[#AFA8BA]/20">
                                  {post.category}
                                </span>
                                <PremiumButton />
                              </div>
                              <h3 className="text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-4 line-clamp-2 group-hover:text-[#6D0000] transition-colors duration-300">
                                {post.title}
                              </h3>
                              <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-6 line-clamp-3 flex-grow leading-relaxed">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center justify-between mt-auto">
                                <div className="text-sm text-[#6D6D6D] dark:text-[#C1CBF8]/70">
                                  {post.date} • {post.readTime}
                                </div>
                                <div className="text-[#000080] dark:text-[#C1CBF8] group-hover:text-[#6D0000] dark:group-hover:text-[#6D0000] font-medium transition-colors duration-300">
                                  Read More →
                                </div>
                              </div>
                            </div>
                          </article>
                        </Link>
                      </FadeInUp>
                    ))}
                </div>
              </div>
            </FadeInUp>
          )}

          {/* All Posts */}
          <FadeInUp delay={0.5}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-2">
                {activeFilter === "All" ? "All Posts" : `${activeFilter} Posts`}
              </h2>
              <div className="w-16 h-1 bg-[#6D0000] mb-8"></div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <FadeInUp key={post.id} delay={0.6 + index * 0.05}>
                    <Link to={`/blog/${post.slug}`}>
                      <article className="bg-white dark:bg-[#0a1e3f] rounded-2xl shadow-lg border border-[#AFA8BA]/20 overflow-hidden hover:shadow-2xl hover:border-[#6D0000]/50 transition-all duration-300 group cursor-pointer h-full flex flex-col">
                        <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 h-48">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-2 mb-4">
                            <span className="px-3 py-1 bg-[#FCF7FF] dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] text-xs rounded-full font-medium border border-[#AFA8BA]/20">
                              {post.category}
                            </span>
                            {post.featured && <PremiumButton />}
                          </div>
                          <h3 className="text-lg font-bold text-[#000080] dark:text-[#C1CBF8] mb-3 line-clamp-2 group-hover:text-[#6D0000] transition-colors duration-300">
                            {post.title}
                          </h3>
                          <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-4 text-sm line-clamp-2 flex-grow leading-relaxed">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center justify-between mt-auto">
                            <div className="text-xs text-[#6D6D6D] dark:text-[#C1CBF8]/70">
                              {post.date} • {post.readTime}
                            </div>
                            <div className="text-[#000080] dark:text-[#C1CBF8] group-hover:text-[#6D0000] dark:group-hover:text-[#6D0000] text-sm font-medium transition-colors duration-300">
                              Read →
                            </div>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </FadeInUp>
                ))}
              </div>

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <div className="col-span-full text-center py-20">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-2xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-3">
                    No posts found
                  </h3>
                  <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80 text-lg">
                    Try selecting a different category to see more posts.
                  </p>
                </div>
              )}
            </div>
          </FadeInUp>

          {/* Newsletter Signup */}
          <FadeInUp delay={0.7}>
            <div className="mt-20 bg-[#FCF7FF] dark:bg-[#000080]/10 rounded-2xl shadow-xl border border-[#AFA8BA]/30 p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#000080] dark:text-[#C1CBF8] mb-4">
                Stay Updated
              </h3>
              <p className="text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Get notified when I publish new articles about automation,
                content creation, social media management, and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-[#AFA8BA]/30 rounded-lg focus:ring-2 focus:ring-[#000080] focus:border-transparent dark:bg-[#0a1e3f] dark:text-[#C1CBF8] dark:border-[#AFA8BA]/20 text-[#6D6D6D]"
                />
                <button className="bg-[#000080] hover:bg-[#6D0000] text-[#C1CBF8] px-8 py-3 rounded-lg font-bold transition-all duration-300 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
