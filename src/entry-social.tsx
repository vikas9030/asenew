import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { SocialMediaPage } from "@/pages/social-media-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SocialMediaPage />
  </StrictMode>,
);
