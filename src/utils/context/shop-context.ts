import { createContext } from "react";

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

interface ShopContextType {
  cart: Product[];
  cartSize: number;
  addItem: (item: Product) => void;
  removeItem: (itemId: number) => void;
  resetCart: () => void;
  cartPrice: number;
}

const ShopContext = createContext<ShopContextType>({
  cart: [],
  cartSize: 0,
  addItem: () => {},
  removeItem: () => {},
  resetCart: () => {},
  cartPrice: 0,
});

export default ShopContext;
