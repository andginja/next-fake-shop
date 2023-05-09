import React from "react";
import { render, screen } from "@testing-library/react";
import Cart from "./cart";
import ShopContext from "@/utils/context/shop-context";

const mockShopContext = {
  cart: [],
  cartSize: 5,
  cartPrice: 100,
  addItem: () => {},
  removeItem: () => {},
  resetCart: () => {},
};

describe("Cart", () => {
  test("renders cart component with correct size and price", () => {
    render(
      <ShopContext.Provider value={mockShopContext}>
        <Cart />
      </ShopContext.Provider>
    );

    const cartElement = screen.getByTestId("cart");
    expect(cartElement).toBeInTheDocument();

    const cartPriceElement = screen.getByText("100 €");
    expect(cartPriceElement).toBeInTheDocument();

    const cartSizeElement = screen.getByText("5");
    expect(cartSizeElement).toBeInTheDocument();
  });
});
