import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

function WritingMyFirstPersonalBlog() {
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
                Writing My First Personal Blog
              </span>
            </div>
          </nav>

          {/* Article Header */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Featured Image */}
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-t-2xl">
              <img
                src="/images/First Blog Feature Image-1.webp"
                alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Meta */}
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm rounded-full font-medium">
                  Personal
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  January 28, 2024
                </span>
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">
                  7 min read
                </span>
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">
                  Luigi Misajon
                </span>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center px-2 mb-10 mt-8">
                  How Writing Helps Me Organize My Thoughts: My First Personal
                  Blog
                </h1>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I started writing!
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  And I couldn't be more proud of myself.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  First of all, I would like to welcome you to my very first
                  blog post! I'm excited to share my thoughts and experiences
                  with you. I also would like to thank you for taking the time
                  to read it. I am Luigi, based here in Japan and my colleagues
                  and friends calls me <em>“Rui”</em> most of them can’t do{" "}
                  <em>“L”</em> so there’s that. I am 26 years old as of this
                  writing.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Since then, I always wanted to write it could be about my
                  project, the news I watched the other night. But, I am always
                  being hindered by my incapacity to start. Boredom really help
                  me find my way on this broad new world of blogging. Lately,
                  there’s so much going on in this little head of mine, things
                  that I wanted to do or have I done it correctly, ideas that I
                  think are good and have value that I want to share to other
                  people but do I have the authority to share it? Am I
                  knowledgeable enough to share it? Writing helps me organized
                  my own thought and silence the noise inside my head.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Writing helps me organized my own thought, articulate my
                  ideas, and silence the noise inside my head.
                </p>
                {/* Content Image 1 */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-lg mx-auto my-8">
                  <img
                    src="/images/First Blog Feature Image-2.webp"
                    alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  Where does my motivation to finally write come from?
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Let's start with when I arrived in Japan. I was excited about
                  going here, experience life, the season, earn higher than I
                  was payed for at my own country. I always talk about it to my
                  friends and family and recommend others to go down the same
                  path as me and encourage those who keep asking on how did I do
                  it. To learn nihongo (Japanese language), pass the skills
                  exam, and most of all pass the medical exam.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I always talk about it to my friends and family and recommend
                  others to go down the same path as me and encourage those who
                  keep asking on how did I do it. To learn nihongo (Japanese
                  language), pass the skills exam, and most of all pass the
                  medical exam.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I prayed for this to happen.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I always thought that if I could only do this, passed that,
                  achieve this, then I will do things differently and can
                  finally restart my life. But now that all of it has been
                  given, what now?
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                  What Now?
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  On my way to work walking to the train station, there’s so
                  much going on in my mind. Seems like I reached an impasse,
                  again. But, at the same time I am thankful and compared myself
                  to the other students and people who I knew were also eager to
                  go here but the opportunity has yet to come knocking at their
                  doors.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I’m still in my first year being an OFW and I am still
                  figuring things out. Every buying decision I make must be
                  logical and practical, do I need these, I want it but there
                  are other things worthy of my money.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Working in the Philippines made me realized things and pushed
                  me to do actions that puts me at this very moment of my life.
                  Sitting at my newly arrived and assembled office chair and
                  table in front of my laptop inside my 21 square meters (sqm.)
                  bedroom apartment writing down the very words that you are
                  reading right now.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The salary, working hours, “under paid but overworked”
                  mindset, the if’s, but’s and maybe’s are the pushing factors
                  that made me decide to work across the ocean. Away from my
                  family and friends. Considering my profession which will also
                  put me in a path where working across the sea if I must pursue
                  it.
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 my-8">
                  <q className="flex text-sm text-gray-800 italic dark:text-gray-200 items-center justify-center mt-3">
                    We can't turn back time and correct our mistakes, we move on
                    and try to minimize it along the way.
                  </q>
                  <p className="flex items-center justify-center text-gray-700 dark:text-gray-300 leading-relaxed my-6">
                    - Unknown
                  </p>
                </div>

                {/* Content Image 2 */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-lg mx-auto my-8">
                  <img
                    src="../images/First Blog Feature Image-3.webp"
                    alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                  The Mindset
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I wanted to think what others are thinking.{" "}
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Not so long ago, I asked my roommate, “How satisfied are you
                  with your life and work right now?” He replied, “It’s better
                  than the last time I worked here. At least I’m earning money I
                  can’t earn with the same job back in our own country.” He was
                  an Ex Trainee Visa holder.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I wanted to think the same way, but I can’t help myself
                  thinking that I can’t be like this for the rest of my life or
                  the end of my working contract at the very least. I always
                  think that I am capable of doing things other than this,
                  things that I love doing. I felt stagnant and knew there was
                  still more room for me to grow as a person. I know that this
                  sounds like I’m taking things for granted, but no. I am
                  grateful and praising the Lord every day for this opportunity
                  that I can only dream and pray for.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Boredom has been my guide in discovering my passion for
                  writing. If I continue this journey, writing may evolve into a
                  hobby, a skill, or even a supplementary skill to my existing
                  interests. Writing has proven to be an effective tool for
                  organizing my thoughts and silencing the internal noise that
                  often accompanies me.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I’ve developed a newfound love for this new hobby.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                  What's Next For Me?
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  My next goal is to continue pursuing my passion and excelling
                  in it while exploring opportunities to monetize it. While
                  financial gain isn’t a primary concern at the moment, given my
                  day job, I aspire to transform these hobbies into a full-time
                  career, ultimately achieving time, financial, and location
                  freedom.
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 my-8">
                  <q className="flex text-sm text-gray-800 italic dark:text-gray-200 items-center justify-center mt-3">
                    You cannot understand freedom if you do not conquer what
                    made you a slave.
                  </q>
                  <p className="flex items-center justify-center text-gray-700 dark:text-gray-300 leading-relaxed my-6">
                    - The Art Of Focus
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"></p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Now, I understand what held me back. I have ideas and the
                  ability to express them. Perhaps the question is whether I
                  will implement those delicate ideas and continue moving
                  forward?
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Perhaps I’ve already done so! I created this website where the
                  blog you’re reading is hosted. I studied coding, and there’s
                  so much more to learn, and I want to learn it all.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  How exciting it is to work on something meaningful no matter
                  how irrelevant to others' interest opens up ideas that you can
                  then commit to pursue.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  No matter how small.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  No matter how irrelevant to others.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  No matter how imperfect.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Thank you for reading my first personal blog and sticking to
                  the end. Until next time!
                </p>
              </div>

              {/* Author Section */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    L
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

export default WritingMyFirstPersonalBlog;
