import { createContext } from "react";
import { useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(() => {
    const stored = localStorage.getItem("cartCount");
    return stored ? parseInt(stored, 10) : 0;
  });

  const addToCartContext = () => {
    const newCount = cartCount + 1;
    setCartCount(newCount);
    localStorage.setItem("cartCount", newCount);
  };

  useEffect(() => {
    const handleStorage = (e) => {
      if (e.key === "cartCount") {
        setCartCount(parseInt(e.newValue, 10) || 0);
      }
    };

    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <CartContext.Provider value={{ cartCount, addToCartContext }}>
      {children}
    </CartContext.Provider>
  );
};
