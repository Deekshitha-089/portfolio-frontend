import confetti from "canvas-confetti";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function Resume() {

  const handleDownload = () => {
    confetti({
      particleCount: 150,
      spread: 90,
      origin: { y: 0.6 }
    });

    const link = document.createElement("a");
    link.href = "/PUPPALA_DEEKSHITHA_RESUME.pdf";
    link.download = "PUPPALA_DEEKSHITHA_RESUME.pdf";
    link.click();
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen pt-32 pb-20 px-6 bg-white dark:bg-black transition-colors duration-300">

        <div className="max-w-4xl mx-auto text-center">

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
            My <span className="text-[#ffc2c7]">Resume</span>
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-12">
            A quick overview of my experience, skills and journey.
          </p>

          {/* Resume Preview Card */}
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-neutral-900 transition">

            <img
              src="/resume-preview.png"
              alt="Resume Preview"
              className="w-full"
            />

          </div>

          {/* Download Button */}
          <button
            onClick={handleDownload}
            className="mt-10 px-8 py-3 rounded-full bg-[#ffc2c7] text-black font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Download Resume
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}
