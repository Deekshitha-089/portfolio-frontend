import Home from "./pages/Home";
import Resume from "./pages/resume";
import Admin from "./pages/Admin";
import { Navbar } from "./components/Navbar";

export default function App() {
  const hash = window.location.hash;

  return (
    <>
      <Navbar />
      {hash === "#resume" ? (
        <Resume />
      ) : hash === "#admin" ? (
        <Admin />
      ) : (
        <Home />
      )}
    </>
  );
}
