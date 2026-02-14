import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) {
      navigate("/admin-login");
      return;
    }
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/contacts", {
        headers: { Authorization: localStorage.getItem("auth") },
      });

      if (res.status === 401) {
        localStorage.removeItem("auth");
        navigate("/admin-login");
        return;
      }

      const data = await res.json();
      setContacts(data.reverse());
    } catch (err) {
      console.error(err);
    }
  };

  const markContacted = async (id) => {
    await fetch(`http://localhost:8080/api/contacts/${id}`, {
      method: "PUT",
      headers: { Authorization: localStorage.getItem("auth") },
    });
    fetchContacts();
  };

  const logout = () => {
    localStorage.removeItem("auth");
    navigate("/admin-login");
  };

  const containerStyle = {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    padding: "50px",
    color: "white",
    fontFamily: "inherit",
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "20px",
  };

  const buttonStyle = {
    padding: "8px 15px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#3b82f6",
    color: "white",
    cursor: "pointer",
    marginTop: "10px",
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Admin Dashboard</h1>
        <button
          onClick={logout}
          style={{
            backgroundColor: "#ef4444",
            border: "none",
            padding: "8px 15px",
            borderRadius: "6px",
            color: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>

      {contacts.map((contact) => (
        <div key={contact.id} style={cardStyle}>
          <h3>{contact.name}</h3>
          <p>{contact.email}</p>
          <p>{contact.message}</p>

          <p>
            Status:{" "}
            {contact.contacted ? (
              <span style={{ color: "#22c55e", fontWeight: "bold" }}>
                ✅ Contacted
              </span>
            ) : (
              <span style={{ color: "#ef4444", fontWeight: "bold" }}>
                ❌ Not Contacted
              </span>
            )}
          </p>

          {!contact.contacted && (
            <button
              style={buttonStyle}
              onClick={() => markContacted(contact.id)}
            >
              Mark Contacted
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default Admin;
