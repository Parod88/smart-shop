import { useContext } from "preact/hooks";
import { CartContext } from "../context/CartContext";

const CartIndicator = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <div className="text-blue-500 text-2xl rounded-xl ml-2 p-1 bg-amber-50">
      {cartCount}
      <span> 🛒</span>
    </div>
  );
};

export default CartIndicator;
