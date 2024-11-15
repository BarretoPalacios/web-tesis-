import React from "react";

const TextileriaLuz = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h2 className="mb-4 text-center text-4xl font-bold leading-tight md:text-5xl text-[#792D2B]">
          Textileria Luz
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-12 md:24 items-center ">
        <div className="col-span-1 h-full">
          <img
            src="https://cdn.pixabay.com/photo/2019/10/03/19/17/alpaca-4524200_1280.jpg"
            alt="Llama"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="col-span-1 h-full rounded-lg bg-[#792D2B] flex items-center">
          <img
            src="/public/logo.png"
            alt="Logo"
            className="w-fit  rounded-full m-auto"
          />
        </div>
        <div className="col-span-1 h-full">
          <img
            src="https://cdn.pixabay.com/photo/2012/04/26/22/31/fabric-43354_1280.jpg"
            alt="Colorful textiles"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="bg-[#792D2B] text-white p-6 rounded-lg mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-2">
              {["Fashion 1", "Fashion 2", "Fashion 3", "Fashion 4"].map(
                (alt, index) => (
                  <img
                    key={index}
                    src={`https://cdn.pixabay.com/photo/2016/03/27/19/31/fashion-1283863_960_720.jpg`}
                    alt={alt}
                    className="w-full h-auto rounded-lg"
                  />
                )
              )}
            </div>
          </div>
          <div className="col-span-1">
            <h2 className="my-8 text-center text-4xl font-bold leading-tight md:text-5xl text-white">
              Historia
            </h2>
            <p className="mb-4">
              Los textiles son prendas de punto que cubren la parte superior del
              cuerpo. Pueden ser de manga corta o larga, y están hechos de
              diversos materiales como algodón, lana, seda o fibras sintéticas.
            </p>
            <p>
              Los textiles son versátiles y se usan en una variedad de
              ocasiones, desde ropa casual hasta atuendos más formales. Vienen
              en diferentes estilos, colores y diseños.
            </p>
            <div className="mt-8 flex justify-center space-x-4  p-4">
              <a
                href="#"
                className="rounded-full bg-white p-4  text-[#722F37] hover:bg-white/90 border"
                aria-label="WhatsApp"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-4  text-[#722F37] hover:bg-white/90 border"
                aria-label="Facebook"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full bg-white p-4  text-[#722F37] hover:bg-white/90 border"
                aria-label="TikTok"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 rounded-lg overflow-hidden">
            {/* Map Section */}
            <div className="relative h-[300px] md:h-[400px] bg-gray-100">
              <iframe
                title="Location Map"
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.3839749806856!2d-71.5436247!3d-16.4034899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI0JzEyLjYiUyA3McKwMzInMzcuMSJX!5e0!3m2!1sen!2spe!4v1620000000000!5m2!1sen!2spe"
                loading="lazy"
              ></iframe>
            </div>

            {/* Address Section */}
            <div className="bg-[#792D2B] p-8 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white mb-6">Dirección:</h2>
              <div className="flex items-start gap-4">
                <p className="text-white text-xl leading-relaxed">
                  Cal. Condor Nro.100.
                  <br />
                  Urb.Tahuaycani
                  <br />
                  Sachaca - Arequipa -
                  <br />
                  Arequipa
                </p>
              </div>
            </div>
          </div>
    </div>
  );
};

export default TextileriaLuz;
