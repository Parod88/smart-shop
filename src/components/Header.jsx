import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import CartIndicator from "./CartIndicator";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-between items-center">
      <Link to="/" className="text-white text-xl font-bold">
        Mobile Store
      </Link>
      <Breadcrumbs />
      <CartIndicator />
    </header>
  );
};

export default Header;
