import styled from "styled-components";
import * as mq from "@/styles/media-queries.js";
import * as colors from "@/styles/colors.js";

export const FilterWrapper = styled("div")`
  text-align: center;
  width: 100%;
  position: relative;
  background-color: white;
  display: flex;
  padding: 2rem 0;
  height: 25rem;
  flex-direction: column;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  flex-basis: 20%;
  flex-grow: 0;
  flex-shrink: 0;
  ${mq.mediumBreakpoint} {
    width: 70%;
    margin: 0 auto;
  }
  ${mq.tabletPortrait} {
    width: 100%;
    margin: 0 auto;
  }
`;

export const CategoriesWrapper = styled(`div`)`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const StyledInput = styled(`input`)`
  cursor: pointer;
  width: 2rem;
  height: auto;
`;

export const CategoryWrapper = styled(`div`)`
  display: flex;
  gap: 0.5rem;
  margin-left: 3rem;
  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.01);
  }
`;

export const DropdownWrapper = styled("div")`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const StyledOption = styled(`option`)`
  padding: 2rem;
  font-size: 1.2rem;
`;
export const StyledSelect = styled(`select`)`
  width: 50%;
  margin: 0 auto;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;
`;

export const DropdownArea = styled(`div`)`
  display: flex;
  flex-direction: column;
`;
