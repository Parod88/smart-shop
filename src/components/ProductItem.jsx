import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  console.log(product.imgUrl);
  return (
    <div className="bg-white p-4 rounded shadow-md hover:shadow-lg">
      <img
        src={product.imgUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <p>{`${product.price ? product.price + "€" : "Precio no disponible"}`}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500">
        Ver detalles
      </Link>
    </div>
  );
};

export default ProductItem;
