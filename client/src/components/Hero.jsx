import { motion } from "framer-motion";
import { Link } from "react-scroll";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/hero.mp4" type="video/mp4" />

      </video>

      {/* 🌫 Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* ✨ Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur text-sm font-medium uppercase text-white"
        >
          Creative Developer & Designer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight tracking-tight text-white mb-6"
        >
          Hello I'm<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffc2c7] via-[#fbe5c8] to-[#8fdde7]">
             Deekshitha
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 mb-10"
        >
          I create clean, responsive, and engaging user interfaces using modern
          web technologies with a focus on usability and smooth interactions.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="projects"
            smooth
            duration={800}
            offset={-80}
            className="px-8 py-4 bg-[#8fdde7] text-[#1e3a40] rounded-xl font-bold cursor-pointer"
          >
            View Projects
          </Link>

          <Link
            to="contact"
            smooth
            duration={800}
            offset={-80}
            className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold cursor-pointer"
          >
            Let’s Talk
          </Link>
        </div>
      </div>
    </section>
  );
}
