import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "preact/hooks";
import { getOneItem } from "../services/productsService";
import DetailImage from "../components/DetailImage";
import ProductActions from "../components/ProductActions";

const ProductDetails = () => {
  const itemId = useParams().id;
  const navigate = useNavigate();
  const [item, setItem] = useState();
  useEffect(() => {
    const loadData = async () => {
      const data = await getOneItem(itemId);
      setItem(data);
    };

    loadData();
  }, []);

  const handleGoBackClick = () => navigate(-1);
  return (
    <Layout>
      {item && (
        <>
          <h3
            className="hover:cursor-pointer text-blue-500"
            onClick={handleGoBackClick}
          >
            volver
          </h3>
          <section className="flex w-full justify-center gap-4">
            <DetailImage image={item.imgUrl} />
            <div className="flex flex-col">
              <div className="flex flex-col justify-center h-[10rem]">
                <ul className="flex flex-col hover:cursor-default text-blue-500">
                  <span className="text-lg font-bold">{item.brand}</span>
                  <span>{item.model}</span>
                  <span>{item.price} €</span>
                </ul>
              </div>
              <div className="flex flex-col justify-center h-[10rem]">
                <ProductActions
                  productId={item.id}
                  colorCode={1}
                  colorNames={["rojo", "dorado", "blanco", "negro"]}
                  storageCode={1}
                  storageName={["128", "256", "512", "1024"]}
                  onCartUpdate={(count) => {}}
                />
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default ProductDetails;
