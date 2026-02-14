import { motion } from "framer-motion";
import { Code2, Briefcase, GraduationCap, Lightbulb, FolderKanban } from "lucide-react";

const cards = [
  {
    title: "Skills",
    icon: Code2,
    color: "#ffc2c7",
    items: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    title: "Projects",
    icon: FolderKanban,
    color: "#b6e5d8",
    items: ["My Portfolio", "Simple Calculator", "Amazon Clone", "RazorPay Clone"]
  },
  {
    title: "Problem Solving",
    icon: Lightbulb,
    color: "#fbe5c8",
    items: ["Data Structures", "Logical Thinking", "Continuous Learning", "Debugging"]
  },
  {
    title: "Experience",
    icon: Briefcase,
    color: "#8fdde7",
    items: ["Freelance Designer", "Startup Intern (9 Months) as Designer", "Lead Designer (Startup Society, KLU)"]
  },
  {
    title: "Education",
    icon: GraduationCap,
    color: "#d4a5a5",
    items: ["B.Tech CSE (Pursuing) at KL University", "AI for Computational Intelligence", "Data Science Enthusiast"]
  }
];

export function Contents() {
  return (
    <section id="contents" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Table of Contents</h2>
          <div className="w-20 h-1 bg-[#ffc2c7] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <ContentCard key={index} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentCard({ card, index }) {
  const Icon = card.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-transparent transition-all duration-300 overflow-hidden"
    >
      {/* Hover Background */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{ backgroundColor: card.color }}
      />
      
      <div className="relative z-10">
        <div 
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md transform group-hover:rotate-6 transition-transform duration-300"
          style={{ backgroundColor: card.color }}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
        
        <ul className="space-y-3">
          {card.items.map((item, i) => (
            <li key={i} className="flex items-center text-muted-foreground text-sm font-medium">
              <span 
                className="w-2 h-2 rounded-full mr-3"
                style={{ backgroundColor: card.color }}
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
