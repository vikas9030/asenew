import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { WebsiteDesigningPage } from "@/pages/website-designing-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <WebsiteDesigningPage />
  </StrictMode>,
);
