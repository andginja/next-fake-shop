import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ShopContext from "@/utils/context/shop-context";
import ProductCard from "./product-card";
import { mockShopContext } from "@/utils/testing/utils";

const product = {
  id: 1,
  title: "Product 1",
  price: 19.99,
  image: "/images/product1.jpg",
  description: "This is a product description.",
  rating: {
    rate: 4.5,
    count: 10,
  },
  category: "mock",
};

describe("ProductCard", () => {
  it("should render product details correctly", () => {
    const { getByText } = render(
      <ShopContext.Provider value={mockShopContext}>
        <ProductCard product={product} />
      </ShopContext.Provider>
    );
    expect(getByText(product.title)).toBeInTheDocument();
    expect(getByText(`${product.price} €`)).toBeInTheDocument();
    expect(getByText(product.description)).toBeInTheDocument();
    expect(getByText(`(${product.rating.count} Reviews)`)).toBeInTheDocument();
  });

  it("should call addItem function when Add to Cart button is clicked", () => {
    const { getByText } = render(
      <ShopContext.Provider value={mockShopContext}>
        <ProductCard product={product} />
      </ShopContext.Provider>
    );
    fireEvent.click(getByText("Add to cart"));
    expect(mockShopContext.addItem).toHaveBeenCalledTimes(1);
    expect(mockShopContext.addItem).toHaveBeenCalledWith(product);
  });
});
