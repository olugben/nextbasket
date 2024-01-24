import { Products } from "../pages";

export async function fetchProducts(url: string): Promise<Products> {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export const baseUrl = "https://dummyjson.com";
