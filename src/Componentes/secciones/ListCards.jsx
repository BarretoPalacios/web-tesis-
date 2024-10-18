import React from "react";
import IconCard from "../Iconos/IconCard";
import PortadaImage from "./PortadaImage";
import { Link } from "react-router-dom";

function ListCards({ product, w = "300px", h = "400px" }) {
  return (
    <Link to={`/tienda/${product.id}`}>
      <div
        className=" border flex flex-col p-3 shadow-lg"
      >
        {/* imagen */}
        <div className=" relative  bg-[#792D2B]/30 " style={{
          width:w,
          height:h
        }}>
          <span className="absolute bottom-2 left-0 p-2 bg-white  w-fit">
            S/{product.price}
          </span>
          <img
            src={`http://127.0.0.1:8000${product.image_url.replace(".", "")}`}
            alt={product.description}
            className={`w-full h-full object-cover object-top`}
            // style={{
            //   width: w,
            // }}
          />
        </div>
        {/* informacion */}
        <div className="flex flex-col">
         {/* informacion texto */}
         <div className="capitalize p-1">
         <h3 className="font-bold">{product.name}</h3>
            <h4 className=" text-sm italic text-wrap w-[25ch] line-clamp-1">
              {product.description}
            </h4>

            <h4 >{product.category}</h4>
          </div>
          {/* informacion boton */}
          <div className="flex justify-center items-center bg-[#792D2B] text-white">
            Comprar
            <button className="p-1 ">
              <IconCard size={24} color="white" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListCards;
