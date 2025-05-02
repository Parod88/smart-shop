const CACHE_DURATION = 1000 * 60 * 60;

const updateLocalStorageProperty = (key, property, newValue) => {
  const storedData = JSON.parse(localStorage.getItem(key));

  storedData[property] = newValue;

  localStorage.setItem(key, JSON.stringify(storedData));
};

export const getCachedData = (key) => {
  const cached = localStorage.getItem(key);
  if (!cached) return null;

  try {
    const parsed = JSON.parse(cached);
    const isExpired = Date.now() - parsed.timestamp > CACHE_DURATION;
    return isExpired ? null : parsed;
  } catch (err) {
    console.error("Error parsing cached data", err);
    return null;
  }
};

export const setCachedData = (key, data) => {
  const existing = localStorage.getItem(key);

  if (existing) {
    updateLocalStorageProperty(key, "data", data);
    updateLocalStorageProperty(key, "timestamp", Date.now());
    updateLocalStorageProperty(key, "detailedDevice", null);
  } else {
    const payload = {
      data,
      timestamp: Date.now(),
      detailedDevice: {},
    };
    localStorage.setItem(key, JSON.stringify(payload));
  }
};
