import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./Pages/NotFound.jsx";
import Tienda from "./Pages/Tienda.jsx";
import ContactForm from "./Pages/Contacto.jsx";
import Nosotros from "./Pages/Nosotros.jsx";
import "./index.css";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/tienda",
    element: <Tienda />,
  },
  {
    path: "/nosotros",
    element: <Nosotros />,
  },
  {
    path:"/contacto",
    element:<ContactForm/>
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
