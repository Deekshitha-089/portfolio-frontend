import { motion } from "framer-motion";
import { useTheme } from "../hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-0 right-4 sm:right-8 z-50 h-[200px]">
      {/* ⬆️ REMOVED pointer-events-none */}

      <motion.div
        className="relative cursor-pointer flex flex-col items-center"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        onClick={toggleTheme}
        whileHover={{ y: 5 }}
        whileTap={{ y: 25 }}
      >
        {/* String */}
        <div className="w-[2px] h-[80px] sm:h-[120px] bg-foreground/30 shadow-sm" />

        {/* Bulb */}
        <div
          className={`
            w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-foreground/20 shadow-md
            transition-all duration-1000
            ${
              theme === "light"
                ? "bg-yellow-300 shadow-[0_0_20px_rgba(253,224,71,0.6)]"
                : "bg-slate-600"
            }
          `}
        />
      </motion.div>
    </div>
  );
}
