import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../hooks/use-theme";

const navItems = [
  { name: "Home", to: "home" },
  { name: "Contents", to: "contents" },
  { name: "About", to: "about" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm py-4"
          : "bg-white/60 dark:bg-black/60 backdrop-blur-md py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-black dark:text-white">
          DEEKSHITHA<span className="text-[#ffc2c7]">.</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">

          {/* Scroll Links */}
          {navItems.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-black dark:text-white hover:text-[#ffc2c7] transition-colors font-medium text-sm tracking-wide"
            >
              {item.name.toUpperCase()}
            </ScrollLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          {/* Resume Button (Router Link) */}
          <RouterLink
            to="/resume"
            className="px-4 py-2 bg-[#ffc2c7] rounded-full font-semibold text-black hover:opacity-90 transition"
          >
            RESUME
          </RouterLink>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-black overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4 items-center">

              {navItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-lg font-medium text-black dark:text-white"
                >
                  {item.name}
                </ScrollLink>
              ))}

              {/* Mobile Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              {/* Mobile Resume Button */}
              <RouterLink
                to="/resume"
                onClick={() => setIsOpen(false)}
                className="px-8 py-3 w-full text-center bg-[#ffc2c7] text-black rounded-full font-semibold"
              >
                View Resume
              </RouterLink>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
