import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ContentMarketingPage } from "@/pages/content-marketing-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContentMarketingPage />
  </StrictMode>,
);
