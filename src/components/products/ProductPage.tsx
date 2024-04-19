import { useState, useEffect } from "react";
import { IProduct } from "../../interfaces";
import { fetchProducts } from "../../api/fetch";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

export default function ProductPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productToUpdate, setProductToUpdate] = useState<IProduct | undefined>(undefined);


  useEffect(() => {
    fetchProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  // return list of products
  return (
    <>
      <ProductTable products={products} />

      <ProductForm productToUpdate={productToUpdate} setProductToUpdate={setProductToUpdate} />
    </>
  );
}
