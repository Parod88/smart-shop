import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import * as router from "react-router-dom";
import ProductDetails from "../../../src/pages/ProductDetails";
import { getOneItem } from "../../services/productsService";
import { CartProvider } from "../../../src/context/CartContext";
import Home from "../../pages/Home";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

vi.mock("../../../src/services/productsService", () => ({
  getOneItem: vi.fn(),
}));

const mockItem = {
  id: "123",
  brand: "Xiaomi",
  model: "Mi 11",
  imgUrl: "https://example.com/mi11.jpg",
  primaryCamera: ["108MP"],
  dimentions: "160x74x8 mm",
  weight: "196g",
  options: {
    colors: [{ code: "1", name: "Black" }],
    storages: [{ code: "2", name: "128GB" }],
  },
  cpu: "Snapdragon 888",
  ram: "8GB",
  os: "Android 11",
};

describe("ProductDetails Page (integration)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza detalles del producto desde el servicio", async () => {
    getOneItem.mockResolvedValueOnce(mockItem);

    render(
      <MemoryRouter initialEntries={["/product/123"]}>
        <CartProvider value={{ addToCartContext: vi.fn() }}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    );

    await screen.findByText("Mi 11");

    expect(getOneItem).toHaveBeenCalledWith("123");
    expect(screen.getByText("Mi 11")).toBeInTheDocument();
    expect(screen.getByText("Black")).toBeInTheDocument();
    expect(screen.getByText("128GB")).toBeInTheDocument();
  });

  it("navega hacia atrás al pulsar en VOLVER", async () => {
    getOneItem.mockResolvedValueOnce(mockItem);

    const mockNavigate = vi.fn();
    router.useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter initialEntries={["/product/123"]}>
        <CartProvider value={{ addToCartContext: vi.fn() }}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </CartProvider>
      </MemoryRouter>
    );

    await screen.findByText((content) =>
      content.toLowerCase().includes("volver")
    );
    fireEvent.click(screen.getByText("VOLVER"));

    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });
});
