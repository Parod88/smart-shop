import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "preact/hooks";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://itx-frontend-test.onrender.com/api/product")
      .then((response) => setProducts(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-4 grid grid-cols-5 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
