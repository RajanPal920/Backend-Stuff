import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./app.routes.jsx";
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
