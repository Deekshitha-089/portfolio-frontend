import { motion } from "framer-motion";
import { useState } from "react";
import { supabase } from "../lib/supabase";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("contacts").insert([
      { name, email, message },
    ]);

    setLoading(false);

    if (error) {
      console.error("SUPABASE INSERT ERROR:", error);
      alert(error.message);
    } else {
      setSubmitted(true); // ✅ THIS IS THE KEY
      setName("");
      setEmail("");
      setMessage("");
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
          className="max-w-4xl mx-auto bg-background/90 dark:bg-background/80 backdrop-blur-xl rounded-3xl shadow-2xl"
        >
          <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden">

            {/* LEFT INFO PANEL */}
            <div className="p-10 bg-[#1e293b] text-white">
              <h2 className="text-3xl font-bold mb-4">Let’s Connect</h2>
              <p className="text-slate-300 mb-10 leading-relaxed">
                Have a project idea or just want to say hi?  
                I love building clean, meaningful, and creative interfaces.
              </p>

              <div className="space-y-8 text-sm">
                <div>
                  <h4 className="font-semibold">Email ✉️</h4>
                  <p className="text-slate-300">
                    deekshithapuppala5@gmail.com
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Location 📍</h4>
                  <p className="text-slate-300">India</p>
                </div>

                <div>
                  <h4 className="font-semibold">Availability 🤝</h4>
                  <p className="text-slate-300">Open to Internships</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-10 bg-background flex items-center justify-center">

              {!submitted ? (
                /* FORM */
                <form className="space-y-6 w-full" onSubmit={handleSubmit}>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none"
                  />

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-transparent focus:outline-none"
                  />

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    placeholder="Your Message"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-transparent resize-none"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:opacity-90 transition"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              ) : (
                /* SUCCESS MESSAGE */
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-4"
                >
                  <h3 className="text-2xl font-semibold text-primary">
                    Message Sent Successfully 💌
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. I’ll get back to you soon!
                  </p>
                </motion.div>
              )}

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
