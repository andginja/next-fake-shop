import { baseURL } from "./creds";

export async function getAllCategories() {
  const response = await fetch(`${baseURL}/products/categories`);
  const data = await response.json();
  return data;
}
