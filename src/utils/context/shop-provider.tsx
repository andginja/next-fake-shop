"use client";
import React, { useEffect, useState } from "react";
import ShopContext, { Product } from "./shop-context";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ShopProviderProps {
  children: React.ReactNode;
}

const ShopProvider = ({ children }: ShopProviderProps) => {
  const [cart, setCart] = useLocalStorage<Product[]>("cart", []);
  const [cartPrice, setCartPrice] = useState(0);
  const [cartSize, setCartSize] = useState(0);

  useEffect(() => {
    const totalPrice = +cart
      .reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0)
      .toFixed(2);
    setCartPrice(totalPrice);
    setCartSize(cart.length);
  }, [cart]);

  const addItem = (item: Product) => {
    setCart((prevCart: Product[]) => [...prevCart, item]);
  };

  const removeItem = (index: number) => {
    setCart((prevCart: Product[]) => {
      return [...prevCart.slice(0, index), ...prevCart.slice(index + 1)];
    });
  };

  const resetCart = () => {
    setCart(() => []);
  };

  const value = {
    cart,
    cartSize,
    addItem,
    removeItem,
    resetCart,
    cartPrice,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopProvider;
