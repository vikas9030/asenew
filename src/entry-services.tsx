import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AllServicesPage } from "@/pages/all-services-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AllServicesPage />
  </StrictMode>,
);
