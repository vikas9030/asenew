import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { GalleryPage } from "@/components/gallery-page";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GalleryPage />
  </StrictMode>,
);
