import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import { getOneItem } from "../services/productsService";
import DetailImage from "../components/DetailImage";
import ProductActions from "../components/ProductActions";
import DetailDescription from "../components/DetailDescription";

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
            className="hover:cursor-pointer text-blue-500 text-xl hover:text-blue-700 w-full my-4"
            onClick={handleGoBackClick}
          >
            {"volver".toUpperCase()}
          </h3>
          <section className="flex w-full justify-center gap-4">
            <DetailImage image={item.imgUrl} />
            <div className="flex flex-col">
              <DetailDescription item={item} />
              <div className="flex flex-col justify-center h-[10rem]">
                <ProductActions
                  productId={item.id}
                  colorOptions={item.options.colors}
                  storageOptions={item.options.storages}
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
