import { Product } from "@/utils/context/shop-context";

export function sortProducts(products: Product[], chosenSort: string) {
  return products.sort((a, b) => {
    switch (chosenSort) {
      case "price-lowest":
        return a.price - b.price;
      case "price-highest":
        return b.price - a.price;
      case "popularity-lowest":
        return a.rating.rate - b.rating.rate;
      case "popularity-highest":
        return b.rating.rate - a.rating.rate;
      default:
        return 0;
    }
  });
}
