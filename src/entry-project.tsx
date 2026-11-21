import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { StartProjectPage } from "@/pages/start-project-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StartProjectPage />
  </StrictMode>,
);
