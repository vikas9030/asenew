import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SaasProductsPage } from "@/pages/saas-products-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SaasProductsPage />
  </StrictMode>,
);
