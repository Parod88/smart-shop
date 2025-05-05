import { useContext, useState } from "preact/hooks";
import { CartContext } from "../context/CartContext";
import { addToCart } from "../services/productsService";

const ProductActions = ({
  productId,
  colorOptions = [],
  storageOptions = [],
}) => {
  const [selectedColorCode, setSelectedColorCode] = useState(
    colorOptions[0]?.code
  );
  const [selectedStorageCode, setSelectedStorageCode] = useState(
    storageOptions[0]?.code
  );
  const { addToCartContext } = useContext(CartContext);

  const handleAddClick = async () => {
    const response = await addToCart({
      id: productId,
      colorCode: selectedColorCode,
      storageCode: selectedStorageCode,
    });
    if (response.status === 200)
      addToCartContext({
        productId,
        colorCode: selectedColorCode,
        storageCode: selectedStorageCode,
      });

    window.alert("Teléfono añadido a la cesta");
    return response.data;
  };

  return (
    <div className="flex flex-col gap-4">
      <label>
        Almacenamiento:
        <select
          className="border rounded p-1 ml-2"
          value={selectedStorageCode}
          onChange={(e) => setSelectedStorageCode(Number(e.target.value))}
        >
          {storageOptions.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>
      </label>

      <label>
        Color:
        <select
          className="border rounded-md p-1 ml-2"
          value={selectedColorCode}
          onChange={(e) => setSelectedColorCode(Number(e.target.value))}
        >
          {colorOptions.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
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
