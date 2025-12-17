import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Replace with your actual n8n production Webhook URL
    const webhookUrl =
      "https://my.floww.works/webhook/ab6d0a59-f021-457e-8cc7-10df5043b90b";

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ firstname: "", lastname: "", email: "", message: "" }); // Clear form
        // Handle success (e.g., show a thank you message)
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Form submission failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (isSubmitted) {
    return <p>Message sent successfully!</p>;
  }

  // export default function ContactForm() {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });

  //   const [loading, setLoading] = useState(false);
  //   const [status, setStatus] = useState(null); // "success" | "error"

  //   const handleChange = (e) => {
  //     setFormData({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     setStatus(null);

  //     try {
  //       const res = await fetch(WEBHOOK_URL, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           ...formData,
  //           source: "Portfolio Website",
  //         }),
  //       });

  //       if (!res.ok) {
  //         const text = await res.text();
  //         console.error("Webhook error:", text);
  //         throw new Error("Failed");
  //       }

  //       setStatus("success");
  //       setFormData({ name: "", email: "", message: "" });
  //     } catch (err) {
  //       setStatus("error");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <form onSubmit={handleSubmit}>
      {/* First Name */}
      <div>
        <label className="block text-sm text-left font-medium text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-1">
          First Name
        </label>
        <input
          type="text"
          name="firstname"
          required
          value={formData.firstname}
          onChange={handleChange}
          placeholder="John"
          className="w-full rounded-lg border border-[#AFA8BA]/40 px-4 py-3 bg-white dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] focus:outline-none focus:ring-2 focus:ring-[#3802E9]"
        />
      </div>
      {/* Last Name */}
      <div>
        <label className="block text-sm text-left font-medium text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-1">
          Last Name
        </label>
        <input
          type="text"
          name="lastname"
          required
          value={formData.lastname}
          onChange={handleChange}
          placeholder="Smith"
          className="w-full rounded-lg border border-[#AFA8BA]/40 px-4 py-3 bg-white dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] focus:outline-none focus:ring-2 focus:ring-[#3802E9]"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-left font-medium text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="johnsmith@gmail.com"
          className="w-full rounded-lg border border-[#AFA8BA]/40 px-4 py-3 bg-white dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] focus:outline-none focus:ring-2 focus:ring-[#3802E9]"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-left font-medium text-[#6D6D6D] dark:text-[#C1CBF8]/80 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message here"
          className="w-full rounded-lg border border-[#AFA8BA]/40 px-4 py-3 bg-white dark:bg-[#000080]/20 text-[#000080] dark:text-[#C1CBF8] focus:outline-none focus:ring-2 focus:ring-[#3802E9]"
        />
      </div>

      {/* Status Messages
      {status === "success" && (
        <p className="text-green-600 text-sm text-center">
          Message sent successfully. I’ll get back to you soon.
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )} */}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitted}
        className="w-full bg-[#000080] hover:bg-[#00005F] text-white font-semibold py-3 my-2 rounded-lg transition-all disabled:opacity-60"
      >
        {isSubmitted ? "Sending..." : "Send Message"}
      </button>

      {/* CRM Note */}
      <p className="text-xs text-[#6D6D6D] dark:text-[#C1CBF8]/60 text-center">
        This form connects directly to my CRM for faster response.
      </p>
    </form>
  );
};

export default ContactForm;
