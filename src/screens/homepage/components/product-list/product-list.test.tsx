import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "./product-list";

const mockProducts = [
  {
    id: 1,
    title: "Product 1",
    image: "https://test-image-1.jpg",
    description: "This is a test product 1.",
    price: 9.99,
    rating: {
      rate: 4,
      count: 2,
    },
    category: "mock category",
  },
  {
    id: 1,
    title: "Product 2",
    image: "https://test-image-1.jpg",
    description: "This is a test product 2.",
    price: 14.99,
    rating: {
      rate: 3.5,
      count: 4,
    },
    category: "mock category",
  },
];

describe("ProductList", () => {
  test("should render a list of products", () => {
    render(<ProductList products={mockProducts} />);

    mockProducts.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(`${product.price} €`)).toBeInTheDocument();
      expect(screen.getByText(`${product.rating.rate}`)).toBeInTheDocument();
      expect(
        screen.getByText(`(${product.rating.count} Reviews)`)
      ).toBeInTheDocument();
    });
  });

  test("should render a message when there are no products", () => {
    render(<ProductList products={[]} />);

    setTimeout(() => {
      expect(screen.getByText("No products found.")).toBeInTheDocument();
    });
  }, 500);
});
