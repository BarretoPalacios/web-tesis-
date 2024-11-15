import React from 'react'

function Productos() {
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center p-6 mb-4  text-4xl font-bold leading-tight md:text-5xl text-[#722F37]">Nuestros Productos</h2>
        
        {/* Products Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border-2 border-[#722F37] p-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQffec3KSEizQV5IWHyEnfM4pnOWF5LySbD1g&s"
              alt="Abrigo modelo 1"
              
              className="mx-auto mb-4 rounded-lg object-cover w-[300px] h-[400px]"
            />
            <p className="text-center text-sm sm:text-lg text-[#722F37]">
              Los suéteres son prendas de punto que cubren la parte superior del cuerpo. Pueden teñi
            </p>
          </div>
          
          <div className="rounded-lg border-2 border-[#722F37] p-4">
            <img
              src="https://www.vendemas.com.pe/wp-content/uploads/2023/07/tienda-ropa-invierno-para-mascotas.jpg"
              alt="Abrigo modelo 2"
              
              className="mx-auto mb-4 rounded-lg object-cover w-[300px] h-[400px]"
            />
            <p className="text-center text-sm sm:text-lg text-[#722F37]">
              Los suéteres son prendas de punto que cubren la parte superior del cuerpo. Pueden teñi
            </p>
          </div>
          
          <div className="rounded-lg border-2 border-[#722F37] p-4">
            <img
              src="https://mnegociopbr2.spira.co/wp-content/uploads/2021/12/1-Productos-que-mas-se-venden-en-diciembre.jpg"
              alt="Abrigo modelo 3"
              
              className="mx-auto mb-4 rounded-lg object-cover w-[300px] h-[400px]"
            />
            <p className="text-center text-sm sm:text-lg text-[#722F37]">
              Los suéteres son prendas de punto que cubren la parte superior del cuerpo. Pueden teñi
            </p>
          </div>
        </div>

        {/* Satisfied Customers Section */}
        <div className="mb-8">
          <h2 className="text-center p-6 mb-4  text-4xl font-bold leading-tight md:text-5xl text-[#722F37]">Clientes Satisfechos</h2>

          <p className="mb-8 text-center text-sm sm:text-lg  text-[#722F37]">
            Nuestros clientes siempre nos eligen a nosotros por que tenemos prendas de alta calidad y a buen precio
          </p>
          
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {/* Brand Logos */}
            <div className="bg-pink-50 flex items-center justify-center rounded-lg border p-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd01oflyHnTd6P-CdCFb7Du0e64B56qRIPpw&s" alt="Pixabay" width={120} height={50} />
            </div>
            <div className="bg-pink-50 flex items-center justify-center rounded-lg border p-4">
              <img src="https://img.freepik.com/vector-gratis/logotipo-tecnologia-marca-comercial-moderna-empresa-digital-vector-inicio_53876-136234.jpg" alt="Pure" width={120} height={50} />
            </div>
            <div className="bg-pink-50 flex items-center justify-center rounded-lg border p-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl3TBpPeBOjbyvZx4zjz2vumLO7aaTctHAgw&s" alt="Kuna" width={120} height={50} />
            </div>
            <div className="bg-pink-50 flex items-center justify-center rounded-lg border p-4">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2alyluWDDelVtMGwuoQUHCZAARFSjn85GDQ&s" alt="Brand 4" width={120} height={50} />
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Productos