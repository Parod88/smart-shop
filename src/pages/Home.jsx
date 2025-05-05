import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "preact/hooks";
import { getAllItems } from "../services/productsService";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const removeAccents = (str) =>
  str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const data = await getAllItems();
      setProducts(data);
    };
    loadData();
  }, []);

  const handleClick = (productId) => navigate(`/product/${productId}`);

  const filteredProducts = products.filter((product) => {
    const brand = removeAccents(product.brand.toLowerCase());
    const model = removeAccents(product.model.toLowerCase());
    return brand.includes(searchTerm) || model.includes(searchTerm);
  });

  return (
    <Layout>
      <section className="flex justify-end">
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      </section>
      <div className="p-4 grid grid-cols-3 min-sm:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
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
