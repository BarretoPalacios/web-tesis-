import { Link } from "react-router-dom";

function CardsCategorias() {
  const colors = [
    "#e88481", // 400
    "#da5c59", // 500
    "#c6403c", // 600
    "#a6322f", // 700
    "#8a2c2a", // 800
    "#792d2b", // 900
    "#3e1211", // 950
    "#f2a6a1", // 350
    "#d88a8a", // 450
    "#b76666", // 550
    "#9e4a4a", // 650
    "#7d3838", // 750
    "#6d2f2f", // 850
    "#5b2424", // 900
  ];
  
  const categories = [
    "gorras",
    "chompa",
    "abrigo",
    "polos",
    "cafarenas",
    "pantalones",
    "falda",
    "vestido",
    "chaqueta",
    "camiseta",
    "shorts",
    "bufanda",
    "guantes",
    "calcetines",
    "traje",
  ];
  

  return (
    <div className="m-auto max-w-[1200px] flex justify-center flex-wrap gap-4 p-4">
      {categories.map((category, index) => (
        <Link
          key={index}
          to={`/categorias/${category}`}
          className={`min-w-[120px] h-[50px]  flex justify-center items-center text-white p-4 shadow-lg rounded-lg max-sm:h-[20px] max-sm:min-w-[50px]`}
          style={{ backgroundColor: colors[index % colors.length] }}
        >
          <p className="capitalize text-xl max-sm:text-xs">{category}</p>
        </Link>
      ))}
    </div>
  );
}

export default CardsCategorias;
