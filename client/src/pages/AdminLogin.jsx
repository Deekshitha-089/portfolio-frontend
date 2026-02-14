import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const basicAuth = "Basic " + btoa(username + ":" + password);

    try {
      const response = await fetch("http://localhost:8080/api/contacts", {
        headers: { Authorization: basicAuth },
      });

      if (response.ok) {
        localStorage.setItem("auth", basicAuth);
        navigate("/admin");
      } else {
        setError("Invalid credentials");
      }
    } catch {
      setError("Server error");
    }
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "inherit",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    padding: "40px",
    borderRadius: "15px",
    width: "350px",
    color: "white",
    boxShadow: "0 0 30px rgba(0,0,0,0.5)",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#1e293b",
    color: "white",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ marginBottom: "20px" }}>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            style={inputStyle}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            style={inputStyle}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" style={buttonStyle}>
            Login
          </button>

          {error && (
            <p style={{ color: "#ef4444", marginTop: "10px" }}>{error}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
