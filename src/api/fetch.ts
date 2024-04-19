import { IProduct } from "../interfaces";

const BASE_URL = "http://localhost:8080/";

export const fetchProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(BASE_URL+"products");
  return response.json();
};

export const fetchProduct = async (id: string): Promise<IProduct> => {
  const response = await fetch(BASE_URL+`products/${id}`);
  return response.json();
};
