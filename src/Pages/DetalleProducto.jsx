import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../Componentes/Layout";
import SugerenciasCategoria from "../Componentes/secciones/SugerenciasCategoria";

function DetalleProducto() {
  const { tiendaId } = useParams(); // Obtener el ID de la URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/products/${tiendaId}`
      );
      setProduct(response.data);
    } catch (err) {
      console.error("Error al obtener el producto:", err);
      setError("No se pudo cargar el producto.");
      navigate("/tienda");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [tiendaId]);

  // Función para manejar la compra y enviar los datos a WhatsApp
  const handleBuy = () => {
    const mensaje = `Hola! Quisiera comprar el siguiente producto:
- Nombre: ${product.name}
- Precio: S/ ${product.price}`;

    const whatsappUrl = `https://wa.me/51933238447?text=${encodeURIComponent(
      mensaje
    )}`;

    window.open(whatsappUrl, "_blank"); // Abrir WhatsApp en una nueva pestaña
  };

  if (loading) return <p className="text-center">Cargando...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <Layout>
      <div className="flex w-full min-h-auto h-full max-sm:flex-col max-sm:items-start">
        <div className="max-sm:w-full bg-[#792D2B]/60 w-1/2 h-screen overflow-y-hidden flex justify-center items-center">
          <img
            className="w-full object-cover h-full object-top"
            src={`http://127.0.0.1:8000${product.image_url.replace(".", "")}`}
            alt={product.name}
          />
        </div>

        <div className="max-sm:w-full bg-white w-1/2 h-screen flex justify-center items-center p-3">
          <div className="max-w-[400px] flex flex-col gap-5 justify-center">
            <h1 className="caveat-font text-5xl text-[#792D2B]">
              {product.name}
            </h1>

            <div className="max-w-xl mx-auto p-4 bg-white shadow-lg rounded-lg">
              <p className="text-gray-700 text-lg mb-4">
                {product.description}
              </p>

              <div className="mb-4">
                <span className="text-xl font-bold text-gray-900">Precio:</span>
                <span className="text-xl text-green-600 ml-2">
                  ${product.price}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-xl font-bold text-gray-900">Stock:</span>
                <span className="text-xl text-green-600 ml-2">
                  {product.stock > 0 ? "Disponible" : "Agotado"}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-xl font-bold text-gray-900">
                  Categoría:
                </span>
                <span className="text-xl text-gray-600 ml-2">
                  {product.category}
                </span>
              </div>

              <button
                onClick={handleBuy}
                className="mt-4 p-3 rounded bg-[#792D2B] text-white border-[#792D2B] border-2"
              >
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-900  max-sm:pb-12  sm:p-6 text-center capitalize">
        algunos productos relacionados a este
      </h2>
      <SugerenciasCategoria
        categoria={product.category}
        w="250px"
        h="300px"
        limit={3}
      />
      <br />
    </Layout>
  );
}

export default DetalleProducto;
