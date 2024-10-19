import axios from "axios";
import {
  Button,
  SelectField,
  TagInput,
  TextareaField,
  TextInputField,
} from "evergreen-ui";
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const FormularioCreate = () => {
  const navigate = useNavigate();
  const { productId } = useParams(); // Extraer el parámetro productId
  const isEdit = Boolean(productId); // Saber si es edición o creación

  // Estados del formulario
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("gorras");
  const [image, setImage] = useState(null);
  const [sizes, setSizes] = useState(["L"]);
  const [colors, setColors] = useState(["Negro"]);

  const allSizes = useMemo(() => ["XS", "S", "M", "L", "XL", "XXL"], []);
  const allColors = useMemo(
    () => ["Negro", "Blanco", "Azul", "Rojo", "Verde", "otro"],
    []
  );

  const autocompleteSizes = useMemo(
    () => allSizes.filter((i) => !sizes.includes(i)),
    [allSizes, sizes]
  );
  const autocompleteColors = useMemo(
    () => allColors.filter((i) => !colors.includes(i)),
    [allColors, colors]
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Cargar datos del producto si es edición
  useEffect(() => {
    if (isEdit) {
      axios
        .get(`http://127.0.0.1:8000/products/${productId}/`)
        .then((response) => {
          const product = response.data;
          setName(product.name);
          setPrice(product.price);
          setStock(product.stock);
          setDescription(product.description);
          setCategory(product.category);
          setSizes(JSON.parse(product.sizes));
          setColors(JSON.parse(product.colors));
        })
        .catch((error) => {
          console.error("Error al cargar el producto:", error);
        });
    }
  }, [isEdit, productId]);

  const handleSaveProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("stock", stock);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("sizes", JSON.stringify(sizes));
    formData.append("colors", JSON.stringify(colors));

    if (image) {
      formData.append("image", image);
    }

    try {
      if (isEdit) {
        // Petición PUT para actualizar
        await axios.put(
          `http://127.0.0.1:8000/products/${productId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",

              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log("Producto actualizado");
      } else {
        // Petición POST para crear
        await axios.post("http://127.0.0.1:8000/products/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        console.log("Producto creado");
      }

      navigate("/admin");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      console.error("Error al guardar el producto:", error);
    }
  };

  return (
    <div className="p-4 max-w-[700px] m-auto">
      <h2 className="text-3xl black mb-4">
        {isEdit ? "Editar Producto" : "Nuevo Producto"}
      </h2>
      <form
        onSubmit={handleSaveProduct}
        className="w-full flex flex-col gap-4 border p-4"
      >
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Imagen
            </label>
            <input
              accept="image/*"
              className="p-1 block w-full text-sm text-gray-600 border cursor-pointer"
              type="file"
              onChange={handleImageChange}
              required={!isEdit} // Solo obligatorio en creación
            />
          </div>

          <TextInputField
            label="Nombre"
            placeholder="Nombre del Producto"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />

          <TextInputField
            label="Precio"
            placeholder="Precio del Producto"
            type="number"
            step="0.01"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />

          <TextInputField
            label="Stock"
            placeholder="Stock del Producto"
            type="number"
            onChange={(e) => setStock(e.target.value)}
            value={stock}
            required
          />

          <TextareaField
            label="Descripcion"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            required
          />

          <SelectField
            label="Categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="gorras">gorras</option>
            <option value="chompa">chompa</option>
            <option value="abrigo">abrigo</option>
            <option value="polos">polos</option>
            <option value="cafarenas">cafarenas</option>
            <option value="pantalones">pantalones</option>
            <option value="falda">falda</option>
            <option value="vestido">vestido</option>
            <option value="chaqueta">chaqueta</option>
            <option value="camiseta">camiseta</option>
            <option value="shorts">shorts</option>
            <option value="bufanda">bufanda</option>
            <option value="guantes">guantes</option>
            <option value="calcetines">calcetines</option>
            <option value="traje">traje</option>
          </SelectField>

          <TagInput
            inputProps={{ placeholder: "Elije o escribe las tallas" }}
            values={sizes}
            onChange={setSizes}
            autocompleteItems={autocompleteSizes}
            required
          />

          <TagInput
            inputProps={{ placeholder: "Elije o escribe los colores" }}
            values={colors}
            onChange={setColors}
            autocompleteItems={autocompleteColors}
            required
          />
        </div>

        <div className="flex justify-center w-full mt-4 mb-4">
          <Button marginRight={16} appearance="primary" type="submit">
            Guardar
          </Button>
          <Button
            marginRight={16}
            appearance="primary"
            intent="danger"
            onClick={() => navigate("/admin")}
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCreate;
