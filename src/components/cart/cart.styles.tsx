import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import * as colors from "@/styles/colors.js";

export const CartWrapper = styled("div")`
  position: relative;
  transition: 0.8s all ease;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledShoppingCart = styled(FaShoppingCart)`
  color: ${colors.brandLight};
  font-size: 1.4rem;
`;

export const CartSizeWrapper = styled(`div`)`
  position: absolute;
  top: -0.5rem;
  left: 0.9rem;
  background-color: black;
  color: ${colors.brandLight};
  font-size: 0.6rem;
  padding: 0.2rem;
  border-radius: 50px;
`;

export const CartPriceWrapper = styled(`div`)`
  font-size: 0.8rem;
`;

export const CartJunction = styled(`div`)`
  position: relative;
  cursor: pointer;
  :hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.1);
  }
`;
