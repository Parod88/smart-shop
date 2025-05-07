import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Home from "../../../src/pages/Home";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../../src/services/productsService", () => ({
  getAllItems: vi.fn(),
}));
import { getAllItems } from "../../../src/services/productsService";

const mockProducts = [
  {
    id: "1",
    brand: "Samsung",
    model: "Galaxy S21",
    price: "799",
    imgUrl: "https://example.com/s21.jpg",
  },
  {
    id: "2",
    brand: "Apple",
    model: "iPhone 13",
    price: "999",
    imgUrl: "https://example.com/iphone13.jpg",
  },
];

describe("Home Page (integration)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza productos desde el servicio", async () => {
    getAllItems.mockResolvedValueOnce(mockProducts);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Samsung")).toBeInTheDocument();
      expect(screen.getByText("iPhone 13")).toBeInTheDocument();
    });

    expect(getAllItems).toHaveBeenCalledTimes(1);
  });

  it("filtra productos al escribir en la búsqueda", async () => {
    getAllItems.mockResolvedValueOnce(mockProducts);

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await screen.findByText("Samsung"); // Espera hasta que se rendericen

    const input = screen.getByRole("textbox");
    fireEvent.input(input, { target: { value: "apple" } });

    await waitFor(() => {
      expect(screen.getByText("iPhone 13")).toBeInTheDocument();
      expect(screen.queryByText("Samsung")).toBeNull();
    });
  });
});
