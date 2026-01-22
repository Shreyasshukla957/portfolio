import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { motion } from "motion/react";

import Portfolio from "../Components/portfolio.jsx";
import Skills from "../Components/skills.jsx";
// import App from "./App.jsx";
// import Button from "../Components/button.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Portfolio></Portfolio>
  </StrictMode>
);
