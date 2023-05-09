import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  test("renders header component", () => {
    render(<Header />);

    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders Logo link", () => {
    render(<Header />);

    const logoLink = screen.getByText("Logo");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink.getAttribute("href")).toBe("/");
  });

  test("renders Cart link", () => {
    render(<Header />);

    const cartLink = screen.getByRole("link", { name: /0 € 0/i });
    expect(cartLink).toBeInTheDocument();
    expect(cartLink.getAttribute("href")).toBe("/cart");
  });

  test("renders Cart component", () => {
    render(<Header />);

    const cartElement = screen.getByTestId("cart");
    expect(cartElement).toBeInTheDocument();
  });
});
