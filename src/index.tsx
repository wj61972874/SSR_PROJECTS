import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const container = document.getElementById("root");

const initialData = (window as any).__INITIAL_DATA__;

console.log("Initial Data:", initialData);
console.log("Container HTML:", container?.innerHTML);

if (container) {
  console.log("Root container found", container);
  if (container.hasChildNodes()) {
    hydrateRoot(
      container,
      <BrowserRouter>
        <App initialData={initialData} />
      </BrowserRouter>
    );
  } else {
    createRoot(container).render(
      <BrowserRouter>
        <App initialData={initialData} />
      </BrowserRouter>
    );
  }
} else {
  console.error("Root container not found");
}
