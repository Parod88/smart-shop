import { useContext } from "preact/hooks";
import { CartContext } from "../context/CartContext";

const CartIndicator = () => {
  const { cart } = useContext(CartContext);

  return <div className="text-white">Cart: {cart.length} items</div>;
};

export default CartIndicator;
