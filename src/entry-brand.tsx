import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GraphicDesigningPage } from "@/pages/graphic-designing-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GraphicDesigningPage />
  </StrictMode>,
);
