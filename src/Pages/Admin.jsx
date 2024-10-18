import { Button, Dialog } from "evergreen-ui";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminPanel() {
  // datos
  const [products, setProducts] = useState([]);

  //paginacion
  const [skip, setSkip] = useState(0);
  const [countData, setCountData] = useState(0);
  //dialog
  const [selectedProduct, setSelectedProduct] = useState(null);

  // navigate para el manejo de rutas
  const navigate = useNavigate();

  // Función para cargar los productos desde la API con paginación
  const loadProducts = async (skip) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/products/?skip=${skip}&limit=10`
      );
      const data = await response.json();
      setProducts(data.data);
      setCountData(data.count);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    loadProducts(skip);
  }, [skip]);

  // Función para manejar el cambio de página
  const nextPage = () => {
    setSkip(skip + 10);
  };
  const previousPage = () => {
    if (skip >= 10) {
      setSkip(skip - 10);
    }
  };

  // Manejar logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // detalle dek producto
  const handleViewProduct = (product) => {
    console.log(product);
    setSelectedProduct(product);
  };
  const handleDeleteProduct = async (id) => {
    const token = localStorage.getItem("token"); // Obtiene el token
  
    try {
      const response = await axios.delete(
        `http://127.0.0.1:8000/products/${id}`, // URL corregida
        {
          headers: {
            Authorization: `Bearer ${token}`, // Token de autorización
          },
        }
      );
  
      // Verifica que la respuesta fue exitosa
      if (response.status === 200) {
        loadProducts(0); // Recarga los productos
        setSkip(0); // Reinicia el desplazamiento
        alert("Producto eliminado con éxito");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        // Si el error es 401, redirige al login
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        console.error("Error al eliminar producto:", error); // Muestra el error en consola
        alert("Error: " + (error.response?.data?.message || error.message)); // Muestra mensaje del error
      }
    }
  };
  

  return (
    <div className="min-h-screen bg-slate-100  p-2 text-black">
      <div className="container mx-auto py-10">
        <div className="flex gap-4 justify-between items-center mb-8 max-sm:flex-col max-sm:items-start">
        <Button
            marginRight={16}
            appearance="primary"
            intent="primary"
            onClick={()=>navigate("/tienda")}
          >
            Ver Tienda
          </Button>
          <h1 className="text-4xl font-bold">Panel de Administración</h1>
          <Button
            marginRight={16}
            appearance="primary"
            intent="danger"
            onClick={handleLogout}
          >
            Cerrar Sesión
          </Button>
        </div>

        <div className="flex ">
          {/* Panel de Productos */}
          <div className="w-full bg-white text-black rounded-md p-6 shadow-lg">
          
            <div className="flex justify-between items-center mb-6">
             
              <h2 className="text-2xl font-bold ">Productos</h2>
              <Button
                appearance="primary"
                intent="success"
                onClick={() => navigate("/create-product")}
              >
                Nuevo Producto
              </Button>
            </div>
            <p>{countData} Productos en total!!</p>
            <div className="overflow-y-auto ">
              <table className="w-full text-left max-lg:text-sm">
                <thead>
                  <tr>
                    <th className="border-b-2 py-2 px-4">Nombre</th>
                    <th className="border-b-2 py-2 px-4">Precio</th>
                    <th className="border-b-2 py-2 px-4">Stock</th>
                    <th className="border-b-2 py-2 px-4">Categoria</th>
                    <th className="border-b-2 py-2 px-4">Tallas</th>
                    <th className="border-b-2 py-2 px-4">Colores</th>
                    <th className="border-b-2 py-2 px-4">Descripcion</th>
                    <th className="border-b-2 py-2 px-4">Imagen</th>

                    <th className="border-b-2 py-2 px-4">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="border-b py-2 px-4">{product.name}</td>
                      <td className="border-b py-2 px-4">S/{product.price}</td>
                      <td className="border-b py-2 px-4">{product.stock}</td>
                      <td className="border-b py-2 px-4">{product.category}</td>
                      <td className="border-b py-2 px-4">
                        {product.sizes.replace(/[\[\]"]+/g, "")}
                      </td>
                      <td className="border-b py-2 px-4">
                        {product.colors.replace(/[\[\]"]+/g, "")}
                      </td>
                      <td className="border-b py-2 px-4">
                        {product.description}
                      </td>
                      <td className="border-b py-2 px-4">
                        <img
                          className="max-w-[35px]"
                          src={`http://127.0.0.1:8000/${product.image_url}`}
                          alt={product.name}
                        />
                      </td>
                      <td className="border-b py-2">
                        <Button
                          marginRight={16}
                          appearance="primary"
                          intent="none"
                          onClick={() =>
                            navigate(`/create-product/${product.id}`)
                          }
                        >
                          Editar
                        </Button>
                        <Button
                          marginRight={16}
                          appearance="primary"
                          intent="success"
                          onClick={() => handleViewProduct(product)}
                        >
                          Ver
                        </Button>
                        <Button
                          marginRight={16}
                          appearance="primary"
                          intent="danger"
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Paginación */}
            <div className="mt-4 flex justify-center">
              <Button
                marginRight={16}
                intent="none"
                disabled={skip === 0}
                onClick={previousPage}
              >
                Anterior
              </Button>

              <Button
                marginRight={16}
                intent="none"
                className="px-4 py-2 bg-gray-500 text-white rounded-md"
                disabled={countData < 10}
                onClick={nextPage}
              >
                Siguiente
              </Button>
            </div>
          </div>

          {/* detalle producto */}
          <Dialog
            isShown={selectedProduct === null ? false : true}
            title="Detalle"
            hasFooter={false}
            onCloseComplete={() => setSelectedProduct(null)}
          >
            <div className="flex flex-col gap-2 w-full rounded-lg p-4">
              <div className="flex w-full justify-center">
                <img
                  src={`http://127.0.0.1:8000/${selectedProduct?.image_url}`}
                  className="w-[100px] h-[100px] border rounded-full object-cover object-top"
                />
              </div>
              <div className="flex">
                <p className="text-gray-500 mr-2">Nombre:</p>
                <h2 className="text-gray-900 font-bold">
                  {selectedProduct?.name}
                </h2>
              </div>
              <div className="flex">
                <p className="text-gray-500 mr-2">Descripción:</p>
                <p className="text-gray-500">{selectedProduct?.description}</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Categoría:</p>
                <p className="text-gray-500">{selectedProduct?.category}</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Precio:</p>
                <p className="text-gray-500 font-semibold">
                  S/{selectedProduct?.price}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Stock:</p>
                <p className="text-gray-500">{selectedProduct?.stock}</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Tallas:</p>
                <p className="text-gray-500">{selectedProduct?.sizes}</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500 mr-2">Colores:</p>
                <p className="text-gray-500">{selectedProduct?.colors}</p>
              </div>
            </div>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
