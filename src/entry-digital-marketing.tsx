import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { DigitalMarketingPage } from "@/pages/digital-marketing-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DigitalMarketingPage />
  </StrictMode>,
);
