const ProductItem = ({ product, onClick }) => {
  return (
    <div
      className="bg-white py-2 rounded shadow-md hover:shadow-lg hover:shadow-blue-200 ease-in-out transition-transform duration-300 group-hover:scale-105 group-hover:z-10 group-hover:absolute cursor-pointer"
      onClick={onClick}
    >
      <img
        src={product.imgUrl}
        alt={product.brand + " " + product.model}
        className="w-full h-48 object-contain rounded"
      />
      <section className="text-blue-500 pl-2">
        <h3 className="mt-2 text-lg font-bold">{product.brand}</h3>
        <span className="text-ellipsis">{product.model}</span>
        <p>{product.price ? `${product.price}€` : "Precio no disponible"}</p>
      </section>
    </div>
  );
};

export default ProductItem;
