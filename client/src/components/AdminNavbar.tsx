import { supabase } from "../lib/supabase";

export function AdminNavbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">

        {/* Logo (same as site) */}
        <div className="text-2xl font-bold tracking-tighter text-foreground">
          DEEKSHITHA<span className="text-[#ffc2c7]">.</span>
        </div>

        {/* Admin Links */}
        <div className="flex items-center gap-10 text-sm font-medium tracking-wide">
          <a
            href="#admin"
            className="text-foreground hover:text-[#e07e86] transition"
          >
            CONTACTS
          </a>

          <a
            href="#admin"
            className="text-foreground hover:text-[#e07e86] transition"
          >
            CONTACTED
          </a>

          <button
            onClick={async () => {
              await supabase.auth.signOut();
              window.location.href = "/";
            }}
            className="px-4 py-2 rounded-full border border-border text-foreground hover:bg-muted transition"
          >
            LOGOUT
          </button>
        </div>
      </div>
    </nav>
  );
}
