"use client";
import React from "react";
import {
  CategoriesWrapper,
  CategoryWrapper,
  DropdownArea,
  DropdownWrapper,
  FilterWrapper,
  StyledInput,
  StyledOption,
  StyledSelect,
} from "./filters.styles";
import { categoryMapper } from "@/utils/mappers";

type FilterProps = {
  filters: string[];
  setSelectedFilters: (value: any) => void;
  setChosenSort: (value: any) => void;
};

function Filters({ filters, setSelectedFilters, setChosenSort }: FilterProps) {
  function updateSelectedFilters(
    event: React.ChangeEvent<HTMLInputElement>,
    filter: string
  ) {
    if (event.target.checked) {
      setSelectedFilters((previousObject: string[]) => [
        ...previousObject,
        filter,
      ]);
    } else {
      setSelectedFilters((previousObject: string[]) =>
        previousObject.filter((item) => item !== filter)
      );
    }
  }
  return (
    <FilterWrapper>
      <h2>Filters</h2>
      <CategoriesWrapper>
        {filters.map((element, index) => {
          return (
            <CategoryWrapper key={element}>
              <StyledInput
                type="checkbox"
                id={element}
                onChange={(event) => updateSelectedFilters(event, element)}
                data-testid={`checkbox-category${index + 1}`}
              />
              <label htmlFor={element} data-testid={`label-${element}`}>
                {categoryMapper[element]}
              </label>
            </CategoryWrapper>
          );
        })}
      </CategoriesWrapper>
      <DropdownArea>
        <DropdownWrapper>
          <label htmlFor="sort-price">Sort by</label>
          <StyledSelect
            id="sort-price"
            onChange={(event) => setChosenSort(event.target.value)}
            data-testid={`sort-select`}
          >
            <StyledOption value="default">Relevance</StyledOption>
            <StyledOption value="price-lowest">Price (lowest)</StyledOption>
            <StyledOption value="price-highest">Price (highest)</StyledOption>
            <StyledOption value="popularity-lowest">
              Popularity (lowest)
            </StyledOption>
            <StyledOption value="popularity-highest">
              Popularity (highest)
            </StyledOption>
          </StyledSelect>
        </DropdownWrapper>
      </DropdownArea>
    </FilterWrapper>
  );
}

export default Filters;
