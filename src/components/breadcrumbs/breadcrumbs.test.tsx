import React from "react";
import { render } from "@testing-library/react";
import Breadcrumbs from "./breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders without errors", () => {
    const places = [
      { name: "Shop", url: "/shop" },
      { name: "Product", url: "/product" },
    ];
    const { getByTestId, getByText } = render(<Breadcrumbs places={places} />);
    expect(getByTestId("breadcrumb-wrapper")).toBeInTheDocument();
    expect(getByText(/Homepage/)).toBeInTheDocument();
    expect(getByText(/Shop/)).toBeInTheDocument();
    expect(getByText(/Product/)).toBeInTheDocument();
  });
});
