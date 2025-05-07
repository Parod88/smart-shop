import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductItem from "../../components/ProductItem";

describe("ProductItem", () => {
  const mockProduct = {
    id: "1",
    brand: "Samsung",
    model: "Galaxy S21",
    price: "799",
    imgUrl: "https://example.com/s21.jpg",
  };

  it("renderiza correctamente la información del producto", () => {
    render(<ProductItem product={mockProduct} onClick={() => {}} />);

    expect(screen.getByText("Samsung")).toBeInTheDocument();
    expect(screen.getByText("Galaxy S21")).toBeInTheDocument();
    expect(screen.getByText("799€")).toBeInTheDocument();

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src", mockProduct.imgUrl);
    expect(image).toHaveAttribute("alt", "Samsung Galaxy S21");
  });

  it("dispara el evento onClick al hacer click", () => {
    const handleClick = vi.fn();
    render(<ProductItem product={mockProduct} onClick={handleClick} />);

    fireEvent.click(screen.getByRole("img").parentElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
