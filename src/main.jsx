import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Auth from "./Components/Auth.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Auth /> },
  { path: "/login", element: <App /> },
  { path: "/meme.galary", element: <App /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
