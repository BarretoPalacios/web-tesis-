import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-evenly flex-wrap items-center bg-[#792D2B] text-white pt-12 pb-12">
      <div className="flex flex-col font-bold text-xl">
        <p><Link to="/">Inicio</Link> </p>
        <p><Link to="/tienda">Tienda</Link> </p>
        <p><Link to="/categorias">Categorias</Link> </p>
        <p><Link to="/contacto">Contacto</Link> </p>
        <p><Link to="/admin">Administrar</Link> </p>
      </div>
      <div>
      <img src="/public/logo.png" alt="logo de textileria luz"  className="w-full max-w-24 max-h-24"/>
      </div>
    </div>
  );
}

export default Footer;
