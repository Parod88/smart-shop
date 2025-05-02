import api from "../axios/fetchers";
import { getCachedData, setCachedData } from "../utils/cache";

const cacheKey = "products";

export const getAllItems = async () => {
  const cached = getCachedData(cacheKey);
  if (cached) {
    return cached.data;
  }

  const { data } = await api.get("/api/product");
  setCachedData(cacheKey, data);
  return data;
};

export const getOneItem = async (itemId) => {
  try {
    const { data } = await api.get(`/api/product/${itemId}`);
    return data;
  } catch (err) {
    console.error("Error obteniendo el detalle: ", err);
    return;
  }
};

export const addToCart = async ({ id, colorCode, storageCode }) => {
  try {
    const response = await api.post("/api/cart", {
      id,
      colorCode,
      storageCode,
    });

    return response.data;
  } catch (err) {
    console.error("Error añadiendo al carrito: ", err);
    return;
  }
};
