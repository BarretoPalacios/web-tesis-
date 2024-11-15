import React from 'react'

function Misiion() {
  return (
    <div className="container mx-auto px-4 py-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md">
            <div className="p-6 flex flex-col items-center h-full">
                <h2 className="text-2xl font-bold mb-4 text-red-900">Propósito</h2>
                <p className="text-center text-gray-700 mb-auto">
                    Los suéteres son prendas de punto que cubren la parte superior del cuerpo.
                    Pueden tener diferentes estilos, como de cuello redondo, de cuello en V,
                    con botones o sin ellos.
                </p>
                <div className="mt-6 p-4 rounded-full bg-red-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </div>
            </div>
        </div>


        <div className="bg-red-900 rounded-lg shadow-md">
            <div className="p-6 flex flex-col items-center h-full">
                <h2 className="text-2xl font-bold mb-4 text-white">Visión</h2>
                <p className="text-center text-white mb-auto">
                    Los suéteres son prendas de punto que cubren la parte superior del cuerpo.
                    Pueden tener diferentes estilos, como de cuello redondo, de cuello en V,
                    con botones o sin ellos.
                </p>
                <div className="mt-6 p-4 rounded-full bg-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
            </div>
        </div>

   
        <div className="bg-white border-2 border-gray-200 rounded-lg shadow-md">
            <div className="p-6 flex flex-col items-center h-full">
                <h2 className="text-2xl font-bold mb-4 text-red-900">Misión</h2>
                <p className="text-center text-gray-700 mb-auto">
                    La misión de Luz Textileria es brindar calidez y estilo a cada cliente, sin
                    dejar de lado sus raíces y su dedicación artesanal.
                </p>
                <div className="mt-6 p-4 rounded-full bg-red-900">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Misiion