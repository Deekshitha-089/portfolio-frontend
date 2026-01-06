import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { AdminNavbar } from "../components/AdminNavbar";

interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  contacted: boolean;
  created_at: string;
}

export default function Admin() {
  const [user, setUser] = useState<any>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  /* ---------------- AUTH CHECK ---------------- */
  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user);
    });
  }, []);

  /* ---------------- FETCH CONTACTS ---------------- */
  useEffect(() => {
    if (user) fetchContacts();
  }, [user]);

  const fetchContacts = async () => {
    const { data } = await supabase
      .from("contacts")
      .select("*")
      .order("created_at", { ascending: false });

    setContacts(data || []);
  };

  /* ---------------- LOGIN ---------------- */
  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    setLoading(false);

    if (error) alert(error.message);
    else location.reload();
  };

  /* ---------------- MARK CONTACTED ---------------- */
  const markContacted = async (id: number, value: boolean) => {
    await supabase
      .from("contacts")
      .update({ contacted: value })
      .eq("id", id);

    fetchContacts();
  };

  /* ---------------- LOGIN SCREEN ---------------- */
  if (!user) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-full max-w-md rounded-3xl border border-border bg-background p-10 shadow-xl">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Admin Login
          </h2>

          <input
            className="w-full mb-4 px-4 py-3 rounded-xl border border-border bg-transparent"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full mb-6 px-4 py-3 rounded-xl border border-border bg-transparent"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </div>
      </section>
    );
  }

  /* ---------------- DASHBOARD ---------------- */
  return (
    <>
      <AdminNavbar />

      <section className="min-h-screen bg-background px-6 pt-32 pb-24">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* NEW MESSAGES */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              New Messages
            </h2>

            {contacts.filter(c => !c.contacted).length === 0 && (
              <p className="text-muted-foreground">
                No new messages 🎉
              </p>
            )}

            {contacts
              .filter(c => !c.contacted)
              .map(c => (
                <div
                  key={c.id}
                  className="flex gap-4 items-start rounded-2xl border border-border bg-background p-6 mb-4 shadow-sm"
                >
                  <input
                    type="checkbox"
                    onChange={(e) =>
                      markContacted(c.id, e.target.checked)
                    }
                    className="mt-2 accent-[#ffc2c7]"
                  />

                  <div>
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {c.email}
                    </p>
                    <p className="mt-2">{c.message}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* CONTACTED */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">
              Contacted
            </h2>

            {contacts.filter(c => c.contacted).length === 0 && (
              <p className="text-muted-foreground">
                No contacted users yet
              </p>
            )}

            {contacts
              .filter(c => c.contacted)
              .map(c => (
                <div
                  key={c.id}
                  className="rounded-2xl border border-border bg-background p-6 mb-4 opacity-70"
                >
                  <p className="font-semibold">{c.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {c.email}
                  </p>
                  <p className="mt-2">{c.message}</p>
                </div>
              ))}
          </div>

        </div>
      </section>
    </>
  );
}
