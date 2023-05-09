import { baseURL } from "./creds";

export async function getAllProducts() {
  const response = await fetch(`${baseURL}/products`);
  const data = await response.json();
  return data;
}

export async function getProduct(id: string) {
  const response = await fetch(`${baseURL}/products/${id}`);
  const data = await response.json();
  return data;
}
