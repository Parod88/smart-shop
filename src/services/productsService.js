import api from "../axios/fetchers";
import { getCachedData, setCachedData } from "../utils/cache";

export const fetchProducts = async () => {
  const cacheKey = "products";

  const cached = getCachedData(cacheKey);
  if (cached) {
    return cached;
  }

  const { data } = await api.get("/api/product");
  setCachedData(cacheKey, data);
  return data;
};
