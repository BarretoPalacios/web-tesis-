import React from "react";
import Layout from "../Componentes/Layout";
import { Link } from "react-router-dom";
import SugerenciasCategoria from "../Componentes/secciones/SugerenciasCategoria";
import CardsCategorias from "../Componentes/secciones/CardsCategorias";

function Categorias() {
  return (
    <Layout>
      <CardsCategorias />
      <div className="flex flex-col items-center pb-5">
        <h2 className="text-3xl text-start capitalize p-5 font-bold">
          categoria 1
        </h2>
        <SugerenciasCategoria categoria={"cafarenas"} w="300px" h="400px" />
        <h2 className="text-3xl text-start capitalize p-5 font-bold">dsadsa</h2>
        <SugerenciasCategoria categoria={"camiseta"} w="300px" h="400px" />
        <h2 className="text-3xl text-start capitalize p-5 font-bold">dsadsa</h2>
        <SugerenciasCategoria
          categoria={"gorras"}
          w="300px"
          h="400px"
          limit={6}
        />
      </div>
    </Layout>
  );
}

export default Categorias;
