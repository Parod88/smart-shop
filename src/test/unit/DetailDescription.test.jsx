import { render, screen } from "@testing-library/react";
import DetailDescription from "../../components/DetailDescription.jsx";
import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../components/DescriptionRow.jsx", () => {
  const mockFn = vi.fn(() => <span>Mocked DescriptionRow</span>);
  return {
    __esModule: true,
    default: mockFn,
    mock: mockFn, // agregamos esto para acceder luego
  };
});
const mockItem = {
  brand: "Samsung",
  model: "Galaxy S21",
  price: 799,
  cpu: "Exynos 2100",
  ram: "8GB",
  os: "Android 11",
  displaySize: "6.2 pulgadas",
  displayResolution: "2400x1080",
  battery: "4000mAh",
  primaryCamera: ["64MP"],
  secondaryCmera: "10MP",
  dimentions: "151.7 x 71.2 x 7.9 mm",
  weight: "169",
};

describe("DetailDescription", () => {
  let mockDescriptionRow;

  beforeEach(async () => {
    const mod = await import("../../components/DescriptionRow.jsx");
    mockDescriptionRow = mod.mock;
    mockDescriptionRow.mockClear();
  });

  it("renderiza DescriptionRow el número correcto de veces", async () => {
    render(<DetailDescription item={mockItem} />);
    expect(await screen.findAllByText("Mocked DescriptionRow")).toHaveLength(8);
    expect(mockDescriptionRow).toHaveBeenCalledTimes(8);
  });

  it("no muestra las dimensiones si no están presentes", () => {
    const newItem = { ...mockItem, dimentions: null };
    render(<DetailDescription item={newItem} />);
    expect(screen.queryByText(/Dimensiones/i)).not.toBeInTheDocument();
  });

  it("no muestra el peso si no está presente", () => {
    const newItem = { ...mockItem, weight: null };
    render(<DetailDescription item={newItem} />);
    expect(screen.queryByText(/Peso/i)).not.toBeInTheDocument();
  });
});
