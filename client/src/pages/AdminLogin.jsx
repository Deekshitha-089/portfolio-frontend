import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function AdminLogin() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const basicAuth = "Basic " + btoa(username + ":" + password);

    try{
      const res = await fetch(
        "https://portfolio-backend-7lkz.onrender.com/api/contacts",
        { headers:{ Authorization:basicAuth } }
      );

      if(res.ok){
        localStorage.setItem("auth",basicAuth);
        navigate("/admin");
      }else{
        setError("Invalid credentials");
      }

    }catch{
      setError("Server error");
    }
  };

  return (
    <>
      <Navbar/>

      <section className="min-h-screen pt-32 pb-20 px-6 bg-white dark:bg-black transition">

        <div className="max-w-md mx-auto">

          <h1 className="text-4xl font-bold text-center text-black dark:text-white mb-8">
            Admin <span className="text-[#ffc2c7]">Login</span>
          </h1>

          <div className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 shadow-2xl rounded-2xl p-8">

            <form onSubmit={handleLogin} className="space-y-6">

              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-black dark:text-white"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent text-black dark:text-white"
              />

              <button
                className="w-full py-3 rounded-full bg-[#ffc2c7] text-black font-semibold hover:scale-105 transition shadow-lg"
              >
                Login
              </button>

              {error && (
                <p className="text-red-500 text-center">{error}</p>
              )}

            </form>

          </div>

        </div>

      </section>

      <Footer/>
    </>
  );
}