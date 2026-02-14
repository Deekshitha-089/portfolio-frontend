import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Text Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-8xl md:text-[10rem] font-bold text-[#d1903b] dark:text-[#fbe5c8]/60 leading-none -ml-2 mb-6 select-none opacity-50 dark:opacity-20">
              HELLO!
            </h2>

            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-foreground relative z-10 -mt-12 md:-mt-20 ml-2">
              I'm a passionate creator and developer crafting meaningful digital experiences.
            </h3>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                My journey into web development started with a curiosity about how websites work. Over time, this curiosity grew into a passion for building and experimenting with ideas on the web.
              </p>

              <p>
                I enjoy learning both the technical and creative sides of development, understanding how design and engineering work together. My approach is simple — make it work first, then improve the experience.
              </p>

              <p>
                When I’m not coding, I like exploring creative interests and learning new things that keep me inspired and motivated.
              </p>
            </div>

            <div className="mt-10 flex gap-4">
              <SocialIcon color="#ffc2c7" label="GH" />
              <SocialIcon color="#b6e5d8" label="LI" />
              <SocialIcon color="#8fdde7" label="TW" />
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="flex-1 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-[#ffc2c7] rounded-3xl rotate-6 scale-95 opacity-50 translate-x-4 translate-y-4" />
              <div className="absolute inset-0 bg-[#b6e5d8] rounded-3xl -rotate-3 scale-95 opacity-50 -translate-x-2 -translate-y-2" />

              <div className="relative h-full w-full bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-900">
                <img 
                  src="/mine.png"
                  alt="Portrait"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SocialIcon({ color, label }) {
  return (
    <div 
      className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white shadow-lg cursor-pointer transform hover:-translate-y-1 transition-all"
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  );
}
