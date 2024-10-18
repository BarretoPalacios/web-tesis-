import React from "react";
import { useParams } from "react-router-dom"; // Para obtener el parámetro de la URL
import SugerenciasCategoria from "../Componentes/secciones/SugerenciasCategoria";
import Layout from "../Componentes/Layout";
import CardsCategorias from "../Componentes/secciones/CardsCategorias";

function DetalleCategoria() {
  const { nameCategoria } = useParams(); // Obtener el parámetro de la URL

  return (
    <Layout>
      <div className="p-4">
        <CardsCategorias />
        {/* Título dinámico basado en el parámetro de la URL */}
        <h1 className="capitalize pb-3 pt-3 text-3xl font-bold mb-4 text-center text-[#792d2b]">
          {nameCategoria}
        </h1>

        {/* Componente que recibe la categoría como prop */}

       <div>
       <SugerenciasCategoria categoria={nameCategoria} limit={20} w="350px" h="400px" />
       </div>
      </div>
    </Layout>
  );
}

export default DetalleCategoria;
