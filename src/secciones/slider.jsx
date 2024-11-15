import React, { useState } from "react";

const Slider = () => {
  const slides = [
    {
      image:
        "https://img.freepik.com/foto-gratis/hermosos-arboles-cerezos-flor-que-florecen-primavera_335224-878.jpg",
      title:
        "Información o descripción relevante de la empresa o algo llamativo",
      description:
        "Información o descripción relevante de la empresa o algo llamativo",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQpNMnn4v_uiWg_8ztSAeeViMQKfOWdvoN9VKnJrreGrG72_4LQYlzccVPquKir962cM&usqp=CAU",
      title: "Nuestros Productos",
      description: "Descubre nuestra colección de productos de alpaca",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute h-full w-full transition-transform duration-500 ease-in-out ${
            index === currentSlide ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="h-full  object-cover w-full h-800"
            
          />
          <div className="absolute inset-0 bg-black/40">
            <div className="flex h-full flex-col items-center justify-center px-4 text-center text-white">
              <h2 className="mb-4 max-w-2xl text-4xl font-bold leading-tight md:text-5xl">
                {slide.title}
              </h2>
              <p className="mb-8 max-w-lg text-lg">{slide.description}</p>
              <button className="p-3 rounded bg-[#792D2B] text-white border-[#792D2B] border-2">
                Ver Tienda
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={previousSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-caret-left"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M14 6l-6 6l6 6v-12" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur-sm transition-all hover:bg-white/20"
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-caret-right"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 18l6 -6l-6 -6v12" />
        </svg>
      </button>
    </div>
  );
};

export default Slider;
