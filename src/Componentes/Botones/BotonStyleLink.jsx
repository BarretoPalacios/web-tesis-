import React from "react";
import { Link } from "react-router-dom";

function BotonStyleLink({ type, valor, href }) {
  return (
    <Link to={href}>
      {type == "transparent" ? (
        <button className="p-3 rounded text-[#792D2B] bg-transparent border-[#792D2B] border-2">
          {valor}
        </button>
      ) : (
        <button className="p-3 rounded bg-[#792D2B] text-white  border-[#792D2B] border-2">
          {valor}
        </button>
      )}
    </Link>
  );
}

export default BotonStyleLink;
