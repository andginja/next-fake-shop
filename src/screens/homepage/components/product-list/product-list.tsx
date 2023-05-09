"use client";
import React from "react";
import PropTypes from "prop-types";
import { Product } from "@/utils/context/shop-context";
import { ProductListWrapper } from "./product-list.styles";
import ProductCard from "../product-card/product-card";

type ProductListProps = {
  products: Product[];
};

function ProductList({ products }: ProductListProps) {
  return (
    <ProductListWrapper>
      {products.map((product, index) => {
        return (
          <ProductCard
            key={`product${product.id}index${index}`}
            product={product}
          />
        );
      })}
    </ProductListWrapper>
  );
}

export default ProductList;
