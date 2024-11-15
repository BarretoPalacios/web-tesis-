import { Link } from "react-router-dom";
import BotonLink from "../Botones/BotonLink";
import { useState } from "react";

function Navbar() {
  return (
    <div className="mb-[0.5px] bg-white p-3 flex w-full justify-evenly items-center shadow-lg ">
      <Link to={"/"}>
        <div className="max-w-[50px]">
          <img src="/public/logo.png" alt="logo de textileria luz" />
        </div>
      </Link>
      <BotonLink text={"Inicio"} href={"/"} />
      <BotonLink text={"Nosotros"} href={"/nosotros"} />
      <BotonLink text={"Tienda"} href={"/tienda"} />
      <BotonLink text={"Contacto"} href={"/contacto"} />
    </div>
  );
}

export default Navbar;
