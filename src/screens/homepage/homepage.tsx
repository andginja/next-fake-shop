"use client";
import { Product } from "@/utils/context/shop-context";
import { getAllCategories } from "@/utils/fetch/categories";
import { getAllProducts } from "@/utils/fetch/products";
import { useQuery } from "@tanstack/react-query";
import React, { useState, useCallback } from "react";
import { Layout } from "./homepage.styles";
import Filters from "./components/filters/filters";
import ProductList from "./components/product-list/product-list";
import Spinner from "@/components/spinner/spinner";
import { sortProducts } from "./utils/sorting";
import Head from "next/head";

function Homepage() {
  const { isLoading: areProductsLoading, data: products } = useQuery<Product[]>(
    {
      queryKey: ["products"],
      queryFn: () => getAllProducts(),
    }
  );

  const { isLoading: areCategoriesLoading, data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [chosenSort, setChosenSort] = useState<string>("default");
  const filteredResults = useCallback((): Product[] => {
    if (!products) return [];
    let newProducts = sortProducts([...products], chosenSort);

    if (selectedFilters.length === 0) {
      return newProducts;
    } else {
      return newProducts.filter((product) =>
        selectedFilters.includes(product.category)
      );
    }
  }, [products, selectedFilters, chosenSort]);

  return (
    <>
      {areProductsLoading || areCategoriesLoading ? (
        <Spinner />
      ) : (
        <Layout>
          {categories && (
            <Filters
              filters={categories}
              setSelectedFilters={setSelectedFilters}
              setChosenSort={setChosenSort}
            />
          )}
          {products && filteredResults && (
            <ProductList products={filteredResults()} />
          )}
        </Layout>
      )}
    </>
  );
}
export default Homepage;
