import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost:8080/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            message,
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Server Error:", errorText);
        throw new Error("Failed to send message");
      }

      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");

    } catch (error) {
      console.error("ERROR:", error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('./contact-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/20 dark:bg-black/70" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-900 backdrop-blur-xl rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden">

            {/* LEFT SIDE */}
            <div className="p-10 bg-[#1e293b] text-white">
              <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
              <p className="text-slate-300 mb-10 leading-relaxed">
                Have a project idea or just want to say hi?
              </p>

              <div className="space-y-8 text-sm">
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a
                    href="mailto:deekshithapuppala5@gmail.com?subject=Regarding%20Your%20Portfolio"
                    className="text-slate-300 hover:text-[#ffc2c7] transition-colors"
                  >
                    deekshithapuppala5@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-slate-300">India</p>
                </div>

                <div>
                  <h4 className="font-semibold">Availability</h4>
                  <p className="text-slate-300">Remote, Immediate</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-10 bg-white dark:bg-gray-900 flex items-center justify-center">

              {!submitted ? (
                <form className="space-y-6 w-full" onSubmit={handleSubmit}>

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border bg-transparent"
                  />

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-xl border bg-transparent"
                  />

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 rounded-xl border resize-none bg-transparent"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-black text-white rounded-xl font-bold hover:opacity-90 transition"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center space-y-4"
                >
                  <h3 className="text-2xl font-semibold">
                    Message Sent Successfully
                  </h3>
                  <p>Thank you for reaching out!</p>
                </motion.div>
              )}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
