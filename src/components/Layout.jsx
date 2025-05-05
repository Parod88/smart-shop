const Layout = ({ children }) => {
  return (
    <div className="flex items-start justify-center min-h-screen w-full p-4">
      <div className="w-full max-w-5xl">{children}</div>
    </div>
  );
};

export default Layout;
