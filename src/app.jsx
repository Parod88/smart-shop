import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/*           <Route path="/product/:id" element={<ProductDetails />} />
             */}{" "}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
