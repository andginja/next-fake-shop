import ShopContext from "@/utils/context/shop-context";
import React, { useContext } from "react";
import {
  CartJunction,
  CartPriceWrapper,
  CartSizeWrapper,
  CartWrapper,
  StyledShoppingCart,
} from "./cart.styles";

function Cart() {
  const { cartSize, cartPrice } = useContext(ShopContext);
  return (
    <CartWrapper data-testid={`cart`}>
      <CartPriceWrapper>{`${cartPrice} €`}</CartPriceWrapper>
      <CartJunction>
        <StyledShoppingCart />
        <CartSizeWrapper>{cartSize}</CartSizeWrapper>
      </CartJunction>
    </CartWrapper>
  );
}

export default Cart;
