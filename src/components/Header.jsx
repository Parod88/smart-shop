import { Link } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";
import CartIndicator from "./CartIndicator";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 flex justify-center items-center">
      <div className="flex w-full max-w-[1920px] justify-between">
        <Link to="/" className="text-white text-xl font-bold">
          Mobile Store
        </Link>
        <Breadcrumbs />
        <CartIndicator />
      </div>
    </header>
  );
};

export default Header;
