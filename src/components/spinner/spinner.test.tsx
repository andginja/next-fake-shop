import React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from "./spinner";

describe("Spinner", () => {
  test("renders spinner component", () => {
    render(<Spinner />);

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument();
  });
});
