import React, { useEffect, useState } from "react";
import axios from "axios";
import ListCards from "./ListCards";

function SugerenciasCategoria({ categoria, limit = 3 ,w="350px" ,h="400px"}) {
  const [productos, setProductos] = useState([]); // Estado para almacenar productos
  const [error, setError] = useState(null); // Estado para manejar errores
  const [loading, setLoading] = useState(true); // Estado de carga

  // Fetch de productos según la categoría y límite
  const fetchProductos = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/search/?skip=0&limit=${limit}&category=${categoria}`
      );
      setProductos(response.data); // Guardar productos obtenidos
    } catch (err) {
      console.error("Error al obtener productos:", err);
      setError("No se pudieron cargar los productos.");
    } finally {
      setLoading(false); // Finalizar estado de carga
    }
  };

  // Ejecutar fetch al montar el componente o cuando cambian los props
  useEffect(() => {
    fetchProductos();
  }, [categoria, limit]);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className=" flex justify-center gap-4 flex-wrap "> 
        {productos.length <= 0 ?
        (
          <div>
            no se encontraron productos
          </div>
        )
      : (
        productos.map((producto) => (
          <ListCards key={producto.id} product={producto} w={w} h={h} />
        ))
      )}
    </div>
  );
}

export default SugerenciasCategoria;
