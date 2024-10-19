import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./libraries/bootstrap/css/bootstrap.css";
import "./libraries/bootstrap/js/bootstrap.bundle";
import "./styles/defaults.css";
import "./styles/custom.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
