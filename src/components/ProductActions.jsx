import { useContext, useState } from "preact/hooks";
import { CartContext } from "../context/CartContext";
import { addToCart } from "../services/productsService";

const ProductActions = ({
  productId,
  colorCode,
  colorNames = [],
  storageCode,
  storageName = [],
}) => {
  const [selectedColor, setSelectedColor] = useState(colorNames[0]);
  const [selectedStorage, setSelectedStorage] = useState(storageName[0]);
  const { addToCartContext } = useContext(CartContext);

  const handleAddClick = async () => {
    const response = await addToCart({ id: productId, colorCode, storageCode });

    addToCartContext({
      productId,
      colorCode,
      storageCode,
    });
    window.alert("Teléfono añadido a la cesta");
    return response;
  };

  return (
    <div className="flex flex-col gap-4">
      <label>
        Almacenamiento:
        <select
          className="border rounded p-1 ml-2"
          value={selectedStorage}
          onChange={(e) => setSelectedStorage(e.target.value)}
        >
          {storageName.map((storage, i) => (
            <option key={i} value={storage}>
              {storage} gb
            </option>
          ))}
        </select>
      </label>

      <label>
        Color:
        <select
          className="border rounded-md p-1 ml-2"
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          {colorNames.map((color, i) => (
            <option key={i} value={color}>
              {color}
            </option>
          ))}
        </select>
      </label>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-white hover:text-blue-500 hover:border-2 hover:cursor-pointer hover:py-[6px] max-w-[10rem]"
        onClick={handleAddClick}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default ProductActions;
