import { useState } from "react";

export default function Preguntas() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqQuestions = [
    {
      question: "¿Las prendas son de calidad?",
      answer:
        "Sí, todas nuestras prendas son fabricadas con los más altos estándares de calidad.",
    },
    {
      question: "¿Hasta que país llegan nuestros productos?",
      answer: "Realizamos envíos a nivel nacional e internacional.",
    },
    {
      question: "¿Las prendas son de buena calidad?",
      answer:
        "Nuestras prendas son elaboradas con los mejores materiales y procesos de fabricación.",
    },
    {
      question: "¿Qué método de pago utilizan?",
      answer:
        "Aceptamos diversos métodos de pago incluyendo tarjetas de crédito, débito y transferencias bancarias.",
    },
  ];

  return (
    <div className=" bg-[#722F37] text-white">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="text-center p-6 mb-12  text-4xl font-bold leading-tight md:text-5xl text-white">
          Preguntas Frecuentes
        </h2>

        <div className=" space-y-4">
          {faqQuestions.map((faq, index) => (
            <div key={index} className="rounded-lg border border-white/20">
              <button
                className="flex w-full items-center justify-between p-4 text-left"
                onClick={() => toggleQuestion(index)}
              >
                <span>{faq.question}</span>
                {openQuestion === index ? (
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-caret-up"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M18 14l-6 -6l-6 6h12" />
                  </svg>
                ) : (
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-caret-down"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M6 10l6 6l6 -6h-12" />
                  </svg>
                )}
              </button>
              {openQuestion === index && (
                <div className="border-t border-white/20 p-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
