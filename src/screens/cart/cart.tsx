"use client";
import React, { useContext, useState, useEffect } from "react";
import {
  CardWrapper,
  ContentWrapper,
  ImageWrapper,
  Layout,
  PricingWrapper,
  ProductListWrapper,
  ResetCartWrapper,
  StyledButton,
  StyledPricer,
  StyledRemoveItemIcon,
  StyledResetCart,
  StyledTitle,
} from "./cart.styles";
import ShopContext from "@/utils/context/shop-context";
import Image from "next/image";
import * as colors from "@/styles/colors.js";
import Spinner from "@/components/spinner/spinner";

function CartScreen() {
  const { cart, removeItem, resetCart, cartSize } = useContext(ShopContext);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <Layout>
      {cart && cartSize === 0 && <div>No items</div>}

      {cart && cartSize > 0 && (
        <>
          <ProductListWrapper>
            {cart.map((product, index) => {
              return (
                <CardWrapper key={`cartItemPages-${index}blabla`}>
                  <ImageWrapper>
                    <Image src={product.image} alt={product.title} fill />
                  </ImageWrapper>
                  <ContentWrapper>
                    <StyledTitle>{product.title}</StyledTitle>
                    <PricingWrapper>
                      <StyledPricer>{`${product.price} €`}</StyledPricer>
                    </PricingWrapper>
                    <StyledRemoveItemIcon
                      color={colors.brandPrimary}
                      onClick={() => removeItem(index)}
                      data-testid={`remove-item-icon`}
                    />
                  </ContentWrapper>
                </CardWrapper>
              );
            })}
          </ProductListWrapper>
          <ResetCartWrapper>
            <StyledButton onClick={() => resetCart()}>
              <StyledResetCart color={colors.brandLight} />
              Reset Cart
            </StyledButton>
          </ResetCartWrapper>
        </>
      )}
    </Layout>
  );
}

export default CartScreen;
