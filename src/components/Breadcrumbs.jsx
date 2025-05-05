import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-white text-sm p-4">
      <ul className="flex space-x-2 items-center">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const isLast = index === pathnames.length - 1;
          const isDetail = pathnames.length === 2;

          const routeTo =
            isDetail && index === 0
              ? `/${pathnames[0]}/${pathnames[1]}`
              : `/${pathnames.slice(0, index + 1).join("/")}`;

          const label = isDetail && index === 0 ? "Product" : name;

          return (
            <li key={index} className="flex items-center space-x-2">
              <span>/</span>
              {isLast ? (
                <span className="capitalize text-gray-300">{label}</span>
              ) : (
                <Link to={routeTo} className="hover:underline capitalize">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
