import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes, { borwserRoutes } from "./routes";

const router = createBrowserRouter(borwserRoutes);

if (typeof document !== "undefined") {
  ReactDOM.hydrate(
    <RouterProvider router={router} />,
    document.getElementById("root")
  );
}
