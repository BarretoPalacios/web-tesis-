import { Link } from "react-router-dom";
import BotonLink from "../Botones/BotonLink";
import { useEffect, useState } from "react";

function Navbar() {
  const [cartCount, setCartCount] = useState(0); // Estado para el número de productos en el carrito

  // Función para contar los productos en el carrito desde localStorage
  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  // Actualizar el contador al montar el componente y cada vez que cambie el localStorage
  useEffect(() => {
    updateCartCount();

    const handleStorageChange = () => {
      updateCartCount();
    };

    window.addEventListener("storage", handleStorageChange);

    // Limpiar el evento al desmontar el componente
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="mb-[0.5px] bg-white p-3 flex w-full justify-evenly items-center shadow-lg ">
      <Link to={"/"}>
        <div className="max-w-[50px]">
          <img src="/public/logo.png" alt="logo de textileria luz" />
        </div>
      </Link>

      <BotonLink text={"Tienda"} href={"/tienda"} />
      <BotonLink text={"Categoria"} href={"/categorias"} />
      <BotonLink text={"Contacto"} href={"/contacto"} />
    </div>
  );
}

export default Navbar;
