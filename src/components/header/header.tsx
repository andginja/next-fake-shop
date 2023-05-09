"use client";
import React from "react";
import { HeaderWrapper, StyledAnchor } from "./header.styles";
import Cart from "../cart/cart";

function Header() {
  return (
    <HeaderWrapper data-testid={`header`}>
      <StyledAnchor href={`/`} rel="noopener noreferrer">
        Next Fake Shop
      </StyledAnchor>
      <StyledAnchor href={`/cart`} rel="noopener noreferrer">
        <Cart />
      </StyledAnchor>
    </HeaderWrapper>
  );
}

export default Header;
