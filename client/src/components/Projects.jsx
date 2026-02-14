import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Personal Portfolio Website",
    category: "Web Application",
    description:
      "A modern, responsive personal portfolio showcasing my skills, projects, and contact details.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    image: `${import.meta.env.BASE_URL}port.png`,
    githubUrl: "https://github.com/Deekshitha-089/Deekshitha-portfolio",
    liveUrl: "https://deekshitha-089.github.io/deekshitha-portfolio/",
  },
  {
    title: "Simple Calculator",
    category: "Web Application",
    description:
      "A simple and functional calculator built to strengthen my JavaScript logic and UI structuring skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}calculator.png`,
    githubUrl: "https://github.com/Deekshitha-089/calculator",
    liveUrl: "https://deekshitha-089.github.io/calculator/",
  },
  {
    title: "Amazon Web Clone",
    category: "Web Application",
    description:
      "A frontend clone inspired by Amazon, focusing on layout design, UI structure, and responsiveness.",
    tags: ["React", "CSS", "JavaScript"],
    image: `${import.meta.env.BASE_URL}amazon.png`,
    githubUrl: "https://github.com/Deekshitha-089/amazon-clone",
    liveUrl: "#",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-white dark:bg-black text-black dark:text-white transition-colors"
    >
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <span className="text-[#8fdde7] font-bold tracking-widest uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mt-3">
              Recent Works
            </h2>
          </div>

          <a
            href="https://github.com/Deekshitha-089"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold border-b-2 border-black dark:border-white pb-1 hover:text-[#ffc2c7] transition"
          >
            VIEW GITHUB
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="group"
    >
      {/* Image */}
      <div className="relative overflow-hidden rounded-3xl shadow-xl mb-6 aspect-[4/3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition"
            >
              <ExternalLink size={20} />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black hover:scale-110 transition"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Info */}
      <span className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
        {project.category}
      </span>

      <h3 className="text-2xl font-bold mt-2 mb-3">
        {project.title}
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
