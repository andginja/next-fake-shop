"use client";
import { getProduct } from "@/utils/fetch/products";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import {
  AddToCartButtonWrapper,
  ContentWrapper,
  HeadingWrapper,
  ImageWrapper,
  Layout,
  PricingWrapper,
  RatingRate,
  RatingWrapper,
  ReviewNumberWrapper,
  StarRatingWapper,
  StyledButton,
  StyledCart,
  StyledDescription,
  StyledTitle,
} from "./product.styles";
import ShopContext, { Product } from "@/utils/context/shop-context";
import StarRatings from "@/components/star-ratings/star-ratings";
import Image from "next/image";
import Spinner from "@/components/spinner/spinner";
import Lightbox from "@/components/lightbox/lightbox";

function ProductScreen(props: any) {
  const { addItem } = useContext(ShopContext);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const productId = props.params.product;
  const { isLoading: isLoadingProduct, data: product } = useQuery<Product>({
    queryKey: ["categories"],
    queryFn: () => getProduct(productId),
  });

  function activateLightbox() {
    setIsLightboxOpen(true);
  }

  function closeLightbox() {
    setIsLightboxOpen(false);
  }
  if (!productId) {
    <Layout>Error</Layout>;
  }

  if (isLoadingProduct || !product) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <Layout>
      {product && (
        <>
          <HeadingWrapper>
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
          </HeadingWrapper>
          <ContentWrapper>
            <ImageWrapper onClick={activateLightbox}>
              <Image src={product.image} alt={product.title} fill />
            </ImageWrapper>
            <StyledDescription>{product.description}</StyledDescription>
            <PricingWrapper>
              <h2>{`${product.price} €`}</h2>
              <AddToCartButtonWrapper>
                <StyledButton
                  onClick={() => addItem(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <StyledCart />
                  Add to cart
                </StyledButton>
              </AddToCartButtonWrapper>
            </PricingWrapper>
          </ContentWrapper>
          {isLightboxOpen && (
            <Lightbox closeLightbox={closeLightbox} url={product.image} />
          )}
        </>
      )}
    </Layout>
  );
}

export default ProductScreen;
