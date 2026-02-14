import React from "react";
import ReactDOM from "react-dom/client";
import Resume from "./pages/Resumeesume";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Resume />
    </React.StrictMode>
  );
}
