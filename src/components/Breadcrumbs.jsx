import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <nav>
      <Link to="/" className="text-white hover:text-gray-300">
        Home
      </Link>
      {/* Aquí podrías agregar más links según la ruta */}
    </nav>
  );
};

export default Breadcrumbs;
