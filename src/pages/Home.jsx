import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "preact/hooks";
import axios from "axios";
import { fetchProducts } from "../services/productsService";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    loadData();
  }, []);

  const handleClick = (productId) => navigate(`/product/${productId}`);

  return (
    <Layout>
      <div className="p-4 grid grid-cols-3  min-sm:grid-cols-4 gap-8 ">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onClick={() => handleClick(product.id)}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
