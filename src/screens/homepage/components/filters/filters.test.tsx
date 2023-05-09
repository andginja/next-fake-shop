"use client";
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Filters from "./filters";

const setSelectedFiltersMock = jest.fn();
const setChosenSortMock = jest.fn();

const filters = ["category1", "category2"];

describe("Filters", () => {
  it("renders correctly", () => {
    const { getByText, getAllByTestId } = render(
      <Filters
        filters={filters}
        setSelectedFilters={setSelectedFiltersMock}
        setChosenSort={setChosenSortMock}
      />
    );

    expect(getByText("Filters")).toBeInTheDocument();
    expect(getByText("Sort by")).toBeInTheDocument();
    expect(getAllByTestId(/^label-/).length).toEqual(filters.length);
  });

  it("calls setSelectedFilters when a category checkbox is checked", async () => {
    const { getByTestId } = render(
      <Filters
        filters={filters}
        setSelectedFilters={setSelectedFiltersMock}
        setChosenSort={setChosenSortMock}
      />
    );

    const checkbox = getByTestId(`checkbox-category1`);

    fireEvent.click(checkbox);

    // Check if the setSelectedFilters mock was called
    expect(setSelectedFiltersMock).toHaveBeenCalledTimes(1);

    // Get the first argument passed to setSelectedFilters (which should be a function)
    const updateFunction = setSelectedFiltersMock.mock.calls[0][0];

    // Call the update function with an appropriate initial state
    const updatedState = updateFunction([]);

    // Assert that the updated state is the expected value
    expect(updatedState).toEqual([filters[0]]);
  });

  it("calls setChosenSort when a sort option is selected", () => {
    const { getByTestId } = render(
      <Filters
        filters={filters}
        setSelectedFilters={setSelectedFiltersMock}
        setChosenSort={setChosenSortMock}
      />
    );

    const sortSelect = getByTestId("sort-select");

    fireEvent.change(sortSelect, { target: { value: "price-lowest" } });

    expect(setChosenSortMock).toHaveBeenCalledWith("price-lowest");
  });
});
