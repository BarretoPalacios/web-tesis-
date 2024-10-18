import React from "react";
import BotonStyleLink from "../Botones/BotonStyleLink";

function SeccionMultiImage({
  isFull,
  direccion,
  hrefImage,
  titulo,
  texto,
  btnValue,
  linkBtn,
}) {
  return  !isFull ? (
    <div
        className={`flex   ${
          direccion == "izquierda" ? "flex-row-reverse" : ""
        }  w-full min-h-auto h-full max-sm:flex-col max-sm:items-start`}
      >
        {/* Imagen de portada */}
        <div className=" max-sm:w-full bg-[#792D2B] w-1/2 h-auto   flex justify-center items-center p-3">
          <div className="max-w-[330px]">
            <img className="w-full " src={hrefImage} />
          </div>
        </div>
        {/* iformacion de portada */}
        <div className="max-sm:w-full  bg-white w-1/2 h-screen flex justify-center items-center p-3">
          <div
            className={` max-w-[400px] flex flex-col gap-5 justify-center ${
              direccion == "derecha"
                ? "items-end text-end max-sm:text-center max-sm:items-center"
                : "items-start text-start max-sm:text-center max-sm:items-center"
            }`}
          >
            <h1 className="caveat-font text-5xl text-[#792D2B]">{titulo}</h1>
            <p className="text-black/70">{texto}</p>
            <BotonStyleLink
              valor={btnValue}
              href={linkBtn}
              type={"transparent"}
            />
          </div>
        </div>
      </div>
  ):(
    <div
        className={`flex   ${
          direccion == "izquierda" ? "flex-row-reverse" : ""
        }  w-full min-h-auto h-full max-sm:flex-col max-sm:items-start`}
      >
        {/* Imagen de portada */}
        <div className=" max-sm:w-full bg-[#792D2B] w-1/2 h-screen overflow-y-hidden   flex justify-center items-center ">

            <img className="w-full " src={hrefImage} />

        </div>
        {/* iformacion de portada */}
        <div className="max-sm:w-full  bg-white w-1/2 h-screen flex justify-center items-center p-3">
          <div
            className={` max-w-[400px] flex flex-col gap-5 justify-center ${
              direccion == "derecha"
                ? "items-end text-end max-sm:text-center max-sm:items-center"
                : "items-start text-start max-sm:text-center max-sm:items-center"
            }`}
          >
            <h1 className="caveat-font text-5xl text-[#792D2B]">{titulo}</h1>
            <p className="text-black/70">{texto}</p>
            <BotonStyleLink
              valor={btnValue}
              href={linkBtn}
              type={"transparent"}
            />
          </div>
        </div>
      </div>
  )

  
}

export default SeccionMultiImage;
