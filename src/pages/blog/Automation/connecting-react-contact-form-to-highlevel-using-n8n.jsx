import { Link } from "react-router-dom";
import Footer from "../../../components/Footer";

function ConnectingReactContactFormToHighLevelUsingN8n() {
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
                How I Connected a React Contact Form to HighLevel Using n8n
                (Without Premium Webhooks)
              </span>
            </div>
          </nav>

          {/* Article Header */}
          <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            {/* Featured Image */}
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-t-2xl">
              <img
                src="/images/Contact-Form-to-n8n-to-highlevel-image.webp"
                alt="An infographic of connecting a React contact form to HighLevel using n8n, showcasing the workflow and data flow between the components."
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Meta */}
            <div className="p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
                <span className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm rounded-full font-medium">
                  Automation
                </span>
                <span className="text-gray-600 dark:text-gray-400">
                  December 17, 2025
                </span>
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">
                  10 min read
                </span>
                <span className="text-gray-600 dark:text-gray-400">•</span>
                <span className="text-gray-600 dark:text-gray-400">
                  Luigi Misajon
                </span>
              </div>

              {/* Article Content */}
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 text-center px-2 mb-10 mt-8">
                  How I Connected a React Contact Form to HighLevel Using n8n
                  (Without Premium Webhooks)
                </h1>

                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                  TL;DR
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I built a workflow that connects a React website contact form
                  to HighLevel using n8n, without relying on HighLevel’s premium
                  inbound webhook feature.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Along the way, I dealt with broken AI-generated code,
                  misunderstood webhook methods, invalid JSON errors, and API
                  configuration issues. After debugging everything step by step
                  and getting help from the community, I managed to successfully
                  send form data to HighLevel and trigger automations.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  This project taught me a lot about webhooks, data handling,
                  and automation—and it now serves as both a learning milestone
                  and a portfolio case study.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 border-t pt-6">
                  Hi, I’m Luigi. I built a workflow that connects a website’s
                  contact form to a CRM such as HighLevel.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Okay, I know that I can use inbound webhooks inside
                  HighLevel’s automations, but it’s a premium feature, so it’s
                  not available for me. I don’t have a client. I’m broke.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  1st Problem: React Code Integration
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I coded my website using React, so in order for me to
                  integrate the webhook from n8n to HighLevel, I first needed to
                  add the necessary component in my React project and get the
                  actual code to work.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  After hours of wrestling AI into giving me a working code, I
                  built this:
                </p>
                {/* Content Image 1 */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-lg mx-auto my-8">
                  <img
                    src="/images/First Blog Feature Image-2.webp"
                    alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  But there were some errors, as expected. AI generated faulty
                  variables. To make things simple, I made some tweaks to the
                  code and got it working. Yay!
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The code part is done. Now, here comes the n8n part.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  2nd Problem: Webhook Method Configuration (GET vs POST)
                </h2>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                  GET
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  To see data that already exists.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Purpose: Retrieve data. No side effects. No creation.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Think of it like opening a filing cabinet and reading a
                  folder.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-10 mb-4">
                  POST
                </h3>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  “Here, take this and store it.”
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Purpose: Send new data. Usually does something with that data.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  POST is like handing a filled-out form to a clerk and saying,
                  “Please file this.”
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  This is what my contact form really does.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I used the n8n Webhook Trigger to make a POST request. The
                  website sent data from the contact form, and the webhook in
                  n8n received it, stored it, and made some changes to it.
                  That’s POST.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I overlooked this at first, so I wasted time chasing my own
                  tail.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Good thing I have a community to ask. Sir Kevin helped me
                  understand how to make the node work. I was wrong to give so
                  many options, like response headers, when it could work
                  without those.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  So from this:
                </p>

                {/* Content Image 2 */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-lg mx-auto my-8">
                  <img
                    src="/images/First Blog Feature Image-2.webp"
                    alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  To this:
                </p>

                {/* Content Image 3 */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-lg mx-auto my-8">
                  <img
                    src="/images/First Blog Feature Image-2.webp"
                    alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Next, I added the Respond to Webhook node because that’s what
                  I chose in the respond field. I configured the JSON body to
                  send a response back to the website that signals OK: 200.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Another win. Webhook Trigger problem solved.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  3rd Problem: Edit Fields Configuration and Invalid JSON
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Now, here starts the challenging part.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic font-light">
                  “So much error will kill you.”
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The webhook works, and now I can just process the data and
                  send it via an HTTP request. At least, that’s what I thought.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  But no. I received a bunch of errors such as:
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 my-8">
                  <p className="flex text-sm text-red-600 font-medium dark:text-gray-200 items-center justify-center mt-3">
                    The 'JSON Output' in item 0 contains invalid JSON
                  </p>
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The issue was obvious: invalid JSON.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I checked the body and saw red highlights in the JSON
                  key-value pairs, so I corrected them.
                </p>

                {/* Content Image 4 */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-lg mx-auto my-8">
                  <img
                    src="/images/First Blog Feature Image-2.webp"
                    alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Great! I even opted for manual drag-and-drop of key-value
                  pairs from the schema. I tested and executed again, and now it
                  was green.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Yes! Green is good, right? Right? Right?
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  But no.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  It gave me another error. I wanted to cry.
                </p>

                <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 my-8">
                  <p className="flex text-sm text-red-600 font-medium dark:text-gray-200 items-center justify-center mt-3">
                    Problem in node 'Edit Fields' The 'JSON Output' in item 0
                    contains invalid JSON
                  </p>
                </div>

                {/* Content Image 5 */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-lg mx-auto my-8">
                  <img
                    src="/images/First Blog Feature Image-2.webp"
                    alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  After Googling and wrestling with AI at 11 in the evening, I
                  finally found the culprit.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The freaking JSON syntax.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  They always say, “Always consider user input as hostile data.”
                  I didn’t listen because I thought I was awesome. So there goes
                  my time wasted.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The real problem was that some values were not enclosed in
                  quotation marks, and good old JSON couldn’t read them. When I
                  checked the DevTools, I was also seeing errors like 422 and
                  500.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Culprit found and charged.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  After fixing that, I managed to extract only the data I needed
                  to send to HighLevel to create a new contact, with the message
                  added as a note.
                </p>

                {/* Content Image 6 */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-lg mx-auto my-8">
                  <img
                    src="/images/First Blog Feature Image-2.webp"
                    alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  4th Problem: HighLevel API and HTTP Request Configuration
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Adding the HTTP Request node is easy. Configuring it is
                  another level.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  First issue: the <em className="font-medium">API key.</em>
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  HighLevel deprecated the previous API key generation method,
                  so I had to learn how to properly set up a Private
                  Integration.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I authenticated it via Generic Credential Type and added the
                  key generated from the Private Integration inside HighLevel.
                  Then I added the necessary headers and JSON body.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  At first, I kept getting an empty array as output. No data.
                  Nothing.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  After diving into the website’s DevTools, I found the issue.
                  The value for the ID was incorrect, and the key for the
                  message was not the correct one.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Once everything was configured correctly, I finally managed to
                  send data from n8n to HighLevel and successfully create a
                  contact.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  From there, I can trigger HighLevel automations like:
                </p>

                <ul className="list-disc list-inside mb-6">
                  <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Contact Created
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Tags
                  </li>
                  <li className="text-gray-700 dark:text-gray-300 leading-relaxed mb-2">
                    Notes
                  </li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I also turned off{" "}
                  <em className="font-medium">Allow Duplicate Contacts</em>, so
                  if the same name or email enters the system, the “new” key
                  will always be false. This prevents duplicate contacts from
                  being created.
                </p>

                {/* Content Image 7 */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center overflow-hidden rounded-lg mx-auto my-8">
                  <img
                    src="/images/First Blog Feature Image-2.webp"
                    alt="A pixelated, cinematic, and illustrated image of a man writing his first blog on a laptop, surrounded by books and a cup of coffee, in a cozy room with warm lighting."
                    className="w-full h-full object-cover"
                  />
                </div>

                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-12 mb-6">
                  Challenges Faced and Lessons Learned
                </h2>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  There were a lot of challenges in this simple and linear
                  automation workflow.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  But the learning was exponential.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  I had to be determined, resourceful, and honest enough to ask
                  for help when I reached an impasse. Having a community really
                  helps.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  The things I learned while doing this project will be very
                  useful if I work with clients in the future who face the same
                  problem. This was actually the core reason for building the
                  project: identify pain points I experienced and find solutions
                  for them.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Now, if someone in the community encounters the same issue, I
                  can contribute instead of just asking.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  This blog also serves as a portfolio project and a case study,
                  so it’s a win-win for me.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  If you want to collaborate or ask me anything, feel free to
                  follow me on my socials and send a DM.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  Thanks for reading this far, and happy building!
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
                      AI Automation Specialist
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
              <Link to="/blog/what-is-social-media" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs rounded-full">
                    SMM
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    The Importance Of Social Media & Social Media Management
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    It is a form of online communication where users can
                    connect, create, share content, and build virtual
                    communities.
                  </p>
                </div>
              </Link>
              <Link to="/blog/writing-my-first-personal-blog" className="group">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 text-xs rounded-full">
                    Personal
                  </span>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-4 mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    How Writing Helps Me Organize My Thoughts: My First Personal
                    Blog
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    I started writing!
                  </p>

                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    And I couldn't be more proud of myself.
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

export default ConnectingReactContactFormToHighLevelUsingN8n;
