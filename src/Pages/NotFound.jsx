import React from 'react'
import BotonStyleLink from '../Componentes/Botones/BotonStyleLink'

function NotFound() {
  return (
    <div className='w-full min-h-screen bg-[#fff] flex flex-col gap-10 justify-center items-center p-5'>
        <h2 className='text-5xl capitalize font-bold '>Pagina No encontyrada :( </h2>
        <BotonStyleLink 
        type={""}
        href={"/"}
        valor={"Volver Al Inicio"}
        />
    </div>
  )
}

export default NotFound