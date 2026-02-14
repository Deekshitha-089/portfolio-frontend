import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { Contents } from "../components/Contents";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { ThemeToggle } from "../components/ThemeToggle";



export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <Contents />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
