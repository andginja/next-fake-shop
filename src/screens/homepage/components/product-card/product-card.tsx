"use client";
import React, { useContext } from "react";
import ShopContext, { Product } from "@/utils/context/shop-context";
import Image from "next/image";
import {
  AddToCartButtonWrapper,
  CardWrapper,
  ContentWrapper,
  ImageWrapper,
  PricingWrapper,
  RatingRate,
  RatingWrapper,
  ReviewNumberWrapper,
  StarRatingWapper,
  StyledDescription,
  StyledPricer,
  StyledTitle,
  AnchorWrapper,
  StyledAnchor,
  StyledButton,
  StyledCart,
} from "./product-card.styles";
import StarRatings from "@/components/star-ratings/star-ratings";

type ProductCardProps = {
  product: Product;
};
function ProductCard({ product }: ProductCardProps) {
  console.log(product);
  const { addItem } = useContext(ShopContext);
  return (
    <CardWrapper>
      <StyledAnchor href={`/products/${product.id}`} rel="noopener noreferrer">
        <AnchorWrapper>
          <ImageWrapper>
            <Image src={product.image} alt={product.title} fill />
          </ImageWrapper>
          <ContentWrapper>
            <StyledTitle>{product.title}</StyledTitle>
            <RatingWrapper>
              <StarRatings rating={product.rating.rate} />
              <StarRatingWapper>
                <RatingRate>
                  <b>{product.rating.rate}</b>
                </RatingRate>
              </StarRatingWapper>
              <ReviewNumberWrapper>
                ({product.rating.count} Reviews)
              </ReviewNumberWrapper>
            </RatingWrapper>
            <StyledDescription>{product.description}</StyledDescription>
            <PricingWrapper>
              <StyledPricer>{`${product.price} €`}</StyledPricer>
            </PricingWrapper>
          </ContentWrapper>
        </AnchorWrapper>
      </StyledAnchor>
      <AddToCartButtonWrapper>
        <StyledButton
          onClick={() => addItem(product)}
          rel="noopener noreferrer"
        >
          <StyledCart />
          Add to cart
        </StyledButton>
      </AddToCartButtonWrapper>
    </CardWrapper>
  );
}

export default ProductCard;
