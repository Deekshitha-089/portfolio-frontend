import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-14 bg-background border-t border-border">
      <div className="container mx-auto px-6 text-center">

        {/* Logo */}
        <div className="mb-6">
          <span className="text-2xl font-bold tracking-tight">
            DEEKSHITHA<span className="text-[#ffc2c7]">.</span>
          </span>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-10 text-muted-foreground text-sm font-medium">
          <a 
            href="https://github.com/Deekshitha-089" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[#ffc2c7] transition-colors"
          >
            GitHub
          </a>

          <a 
            href="https://www.linkedin.com/in/deekshithapuppala/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[#8fdde7] transition-colors"
          >
            LinkedIn
          </a>

          <a 
            href="https://www.instagram.com/deekshuuu.___/" 
            target="_blank" 
            rel="noreferrer"
            className="hover:text-[#fbe5c8] transition-colors"
          >
            Instagram
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="space-y-2 text-muted-foreground text-sm">
          <p className="flex items-center justify-center gap-1">
            Made with 
            <Heart className="w-4 h-4 text-[#ffc2c7] fill-[#ffc2c7]" /> 
            by Deekshitha
          </p>

          <p>
            © {new Date().getFullYear()} Deekshitha Puppala. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
