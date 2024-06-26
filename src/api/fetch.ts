import { IProduct } from "../interfaces";

const BASE_URL = "http://localhost:8080/";

export async function getProducts(): Promise<IProduct[]> {
  return await fetch(BASE_URL+"products").then((response) => response.json());
}

export async function getProduct(id: string): Promise<IProduct> {
  return await fetch(BASE_URL+`products/${id}`).then((response) => response.json());
}

export async function searchProduct(searchString: string): Promise<IProduct[]> {
  return await fetch(BASE_URL+`products/search?searchFor=${searchString}`).then((response) => response.json());
}

// make a function that can both handle a POST and PUT request to the API to add a new product or edit an existing product and handle errors 
export async function addProduct(newProduct: IProduct): Promise<IProduct> {
  const method = newProduct.id ? "PUT" : "POST";
  const url = BASE_URL + (newProduct.id ? `products/${newProduct.id}` : "products");
  const response = await fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  });

  if (!response.ok) {
    throw new Error("Failed to add product");
  }

  return response.json();
}

// make a function that can delete a product and handle errors
export async function deleteProduct(id: string): Promise<void> {
  const response = await fetch(BASE_URL+`products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }
}




//  fetchProducts = async (): Promise<IProduct[]> => {
//   const response = await fetch(BASE_URL+"products");
//   return response.json();
// };

// export const fetchProduct = async (id: string): Promise<IProduct> => {
//   const response = await fetch(BASE_URL+`products/${id}`);
//   return response.json();
// };
