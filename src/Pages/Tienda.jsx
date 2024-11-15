import Layout from "../Componentes/Layout";
import PortadaImage from "../secciones/PortadaImage";

function Tienda() {
  return (
    <Layout>
      <PortadaImage
        urlBg="https://images.unsplash.com/photo-1467541473380-93479a5a3ffa?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhbGxlfGVufDB8fDB8fHww"
        title="Tienda Luz"
      />
      <div className="flex items-center justify-center py-12">
        <div className="flex w-4/5 bg-white shadow-lg rounded-lg overflow-hidden flex-col md:flex-row">
          {/* Imagenes a la izquierda */} 
          <div className="w-full flex items-center justify-center relative p-8">
            <div className="relative space-y-4">
              <img
                src="/imagen1.png"
                alt="Imagen 1"
                className="w-full h-auto object-cover rounded-lg  "
              />
            </div>
          </div>

          {/* Texto a la derecha */}
          <div className="w-full p-8 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-red-800 mb-4">
              Visita nuestra Tienda
            </h2>
            <p className="text-gray-700 mb-6">
              Los suéteres son prendas de punto que cubren la parte superior del
              cuerpo. Pueden tener diferentes estilos, como de cuello redondo,
              de cuello en V, con botones o sin ellos.
            </p>
            <button className="bg-red-800 text-white py-2 px-6 rounded-full hover:bg-red-700 transition duration-300">
              Ver Abrigos
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tienda;
