import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ShopContext from "@/utils/context/shop-context";
import ProductScreen from "./product";

const mockProduct = {
  id: 1,
  title: "Test Product",
  price: 10.99,
  description: "A test product for the ProductScreen tests",
  image: "/path/to/mock/image.jpg",
  rating: {
    rate: 4.5,
    count: 10,
  },
};

// Mock the getProduct function
jest.mock("@/utils/fetch/products", () => ({
  getProduct: () => Promise.resolve(mockProduct),
}));

// Set up the QueryClient
const queryClient = new QueryClient();

describe("ProductScreen", () => {
  const addItemMock = jest.fn();
  const removeItemMock = jest.fn();
  const resetCartMock = jest.fn();

  const shopContextValue = {
    cart: [],
    cartSize: 0,
    addItem: addItemMock,
    removeItem: removeItemMock,
    resetCart: resetCartMock,
    cartPrice: 0,
  };

  const renderProductScreen = () => {
    return render(
      <QueryClientProvider client={queryClient}>
        <ShopContext.Provider value={shopContextValue}>
          <ProductScreen params={{ product: mockProduct.id }} />
        </ShopContext.Provider>
      </QueryClientProvider>
    );
  };

  test("renders product details", async () => {
    renderProductScreen();

    expect(await screen.findByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`${mockProduct.price} €`)).toBeInTheDocument();
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();
    expect(
      screen.getByText(`(${mockProduct.rating.count} Reviews)`)
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toBeInTheDocument();
  });

  test("adds product to cart", async () => {
    renderProductScreen();

    fireEvent.click(await screen.findByText("Add to cart"));
    expect(addItemMock).toHaveBeenCalledTimes(1);
    expect(addItemMock).toHaveBeenCalledWith(mockProduct);
  });
});
