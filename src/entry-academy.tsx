import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AcademyPage } from "@/components/academy-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AcademyPage />
  </StrictMode>,
);
