import React from "react";

function PortadaImage({ isImage, urlBg, title, altura = "h-52" }) {
  return isImage ? (
    <div
      className={`bg-cover w-full ${altura} `}
      style={{ backgroundImage: `url(${urlBg})` }}
    >
      <div className="w-full h-full  flex justify-center items-center">
        <h2 className="text-[7vw] text-white caveat-font">{title}</h2>
      </div>
    </div>
  ) : (
    <div
      className={`bg-cover w-full ${altura} `}
      style={{ backgroundImage: `url(${urlBg})` }}
    >
      <div className="w-full h-full bg-black/50 flex justify-center items-center">
        <h2 className="text-[7vw] text-white caveat-font">{title}</h2>
      </div>
    </div>
  );
}

export default PortadaImage;
