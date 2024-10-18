import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NotFound from "./Pages/NotFound.jsx";
import Tienda from "./Pages/Tienda.jsx";
import DetalleProducto from "./Pages/DetalleProducto.jsx";
import Login from "./Pages/Login.jsx";
import AdminPanel from "./Pages/Admin.jsx";
import ProtectedRoute from "./Pages/ProtectedRoute.jsx";
import FormularioCreate from "./Componentes/secciones/FormularioCreate.jsx";
import Categorias from "./Pages/Categorias.jsx";
import DetalleCategoria from "./Pages/DetalleCategoria.jsx";
import ContactForm from "./Pages/Contacto.jsx";

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
    path: "/categorias",
    element: <Categorias />,
  },
  {
    path: "/categorias/:nameCategoria",
    element: <DetalleCategoria />,
  },
  {
    path: "/tienda/:tiendaId",
    element: <DetalleProducto />,
  },
  {
    path:"/contacto",
    element:<ContactForm/>
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminPanel />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create-product/:productId?",
    element: (
      <ProtectedRoute>
        <FormularioCreate />
      </ProtectedRoute>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
