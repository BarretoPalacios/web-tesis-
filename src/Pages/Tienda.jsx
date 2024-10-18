import Layout from "../Componentes/Layout";
import PortadaImage from "../Componentes/secciones/PortadaImage";
import ListCards from "../Componentes/secciones/ListCards";
import axios from "axios";
import { useEffect, useState } from "react";

function Tienda() {
  const [products, setProducts] = useState([]); // Lista de productos
  const [skip, setSkip] = useState(0); // Controlar la paginación
  const [loading, setLoading] = useState(false); // Control de carga
  const [searchTerm, setSearchTerm] = useState(""); // Input de búsqueda
  const [hasMore, setHasMore] = useState(true); // Verificar si hay más productos
  const [error, setError] = useState(null); // Manejo de errores

  // Función para cargar productos paginados
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/products/", {
        params: { skip, limit: 10 },
      });

      const newProducts = response.data?.data || []; // Asegurar que sea un array
      setProducts((prev) => [...prev, ...newProducts]); // Añadir productos a la lista
      setHasMore(newProducts.length === 10); // Verificar si hay más productos
    } catch (err) {
      console.error("Error al obtener productos:", err);
      setError("Error al cargar los productos.");
    } finally {
      setLoading(false);
    }
  };

  // Función para buscar productos por nombre
  const searchProducts = async (name) => {
    setLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/search/", {
        params: { name, skip: 0, limit: 100 },
      });

      const searchResults = response.data || []; // Asegurar que sea un array
      console.log(response.data)
      setProducts(searchResults); // Sobrescribir con resultados de búsqueda
      setHasMore(false); // Evitar cargar más al buscar
    } catch (err) {
      console.error("Error en la búsqueda:", err);
      setError("Producto no encontrado.");
    } finally {
      setLoading(false);
    }
  };

  // Efecto para cargar productos al inicio o al cambiar el `skip`
  useEffect(() => {
    if (!searchTerm) fetchProducts();
  }, [skip]);

  // Manejar la búsqueda al enviar el formulario
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      searchProducts(searchTerm);
    } else {
      // Si no hay término, reiniciar la lista de productos
      setSkip(0);
      setProducts([]);
      fetchProducts();
    }
  };

  // Incrementar `skip` para cargar más productos
  const loadMore = () => {
    setSkip((prev) => prev + 10);
  };

  return (
    <Layout>
      <PortadaImage
        urlBg="https://images.unsplash.com/photo-1467541473380-93479a5a3ffa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhbGxlfGVufDB8fDB8fHww"
        title="Tienda Luz"
      />

      <div className="max-w-[700px] h-40 m-auto flex flex-wrap justify-center items-center p-3 gap-6">
        <form onSubmit={handleSearch} className="flex gap-3">
          <input
            type="text"
            placeholder="Nombre del Producto"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-4 rounded border border-[#792D2B]"
          />
          <button
            type="submit"
            className="p-3 rounded bg-[#792D2B] text-white border-[#792D2B] border-2"
          >
            Buscar
          </button>
        </form>
      </div>

      <div className="p-4 flex gap-10 justify-center flex-wrap ">
        {products.length > 0 ? (
          products.map((p) => <ListCards key={p.id} product={p}  />)
        ) : (
          <p>{error || "No se encontraron productos."}</p>
        )}
      </div>

      {hasMore && !loading && (
        <div className="flex justify-center p-4">
          <button
            onClick={loadMore}
            className="p-3 rounded bg-[#792D2B] text-white border-[#792D2B] border-2"
          >
            Cargar más
          </button>
        </div>
      )}

      {loading && <p className="text-center">Cargando...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}
    </Layout>
  );
}

export default Tienda;
