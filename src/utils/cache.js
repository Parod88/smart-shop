const CACHE_DURATION = 1000 * 60 * 60; // 1 hora en milisegundos

export const getCachedData = (key) => {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  try {
    const parsed = JSON.parse(cached);
    const isExpired = Date.now() - parsed.timestamp > CACHE_DURATION;
    return isExpired ? null : parsed.data;
  } catch (err) {
    console.error("Error parsing cached data", err);
    return null;
  }
};

export const setCachedData = (key, data) => {
  const payload = {
    data,
    timestamp: Date.now(),
  };
  localStorage.setItem(key, JSON.stringify(payload));
};
