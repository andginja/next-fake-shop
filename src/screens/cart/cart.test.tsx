import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CartScreen from "./cart";
import ShopContext from "@/utils/context/shop-context";

const mockCartItems = [
  {
    id: 1,
    title: "Product 1",
    image: "https://test-image-1.jpg",
    description: "This is a test product 1.",
    price: 9.99,
    rating: { rate: 4, count: 2 },
    category: "mock category",
  },
  {
    id: 2,
    title: "Product 2",
    image: "https://test-image-2.jpg",
    description: "This is a test product 2.",
    price: 14.99,
    rating: { rate: 3.5, count: 4 },
    category: "mock category",
  },
];

const testProviderValue = {
  cart: mockCartItems,
  cartSize: mockCartItems.length,
  addItem: jest.fn(),
  removeItem: jest.fn(),
  resetCart: jest.fn(),
  cartPrice: 0,
};

const emptyCartProviderValue = {
  cart: [],
  cartSize: 0,
  addItem: jest.fn(),
  removeItem: jest.fn(),
  resetCart: jest.fn(),
  cartPrice: 0,
};

describe("CartScreen", () => {
  it("renders correctly", () => {
    const { getByText } = render(
      <ShopContext.Provider value={testProviderValue}>
        <CartScreen />
      </ShopContext.Provider>
    );

    expect(getByText("Product 1")).toBeInTheDocument();
    expect(getByText("Product 2")).toBeInTheDocument();
  });

  it("calls removeItem when remove item icon is clicked", () => {
    const { getAllByTestId } = render(
      <ShopContext.Provider value={testProviderValue}>
        <CartScreen />
      </ShopContext.Provider>
    );

    fireEvent.click(getAllByTestId("remove-item-icon")[0]);
    expect(testProviderValue.removeItem).toHaveBeenCalledTimes(1);
    expect(testProviderValue.removeItem).toHaveBeenCalledWith(0);
  });

  it("calls resetCart when reset cart button is clicked", () => {
    const { getByText } = render(
      <ShopContext.Provider value={testProviderValue}>
        <CartScreen />
      </ShopContext.Provider>
    );

    fireEvent.click(getByText("Reset Cart"));
    expect(testProviderValue.resetCart).toHaveBeenCalledTimes(1);
  });

  it("displays 'No items' message when cart is empty", async () => {
    jest.useFakeTimers();
    const { getByText } = render(
      <ShopContext.Provider value={emptyCartProviderValue}>
        <CartScreen />
      </ShopContext.Provider>
    );

    jest.advanceTimersByTime(1500);
    await waitFor(() => expect(getByText("No items")).toBeInTheDocument());
    jest.useRealTimers();
  });
});
