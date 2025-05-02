import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <nav>
      <Link to="/" className="text-white hover:text-gray-300">
        Home
      </Link>
    </nav>
  );
};

export default Breadcrumbs;
