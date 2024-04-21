import { useState, useEffect } from "react";
import { IProduct } from "../../interfaces";
import { getProducts, getProduct } from "../../api/fetch";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

export default function ProductPage() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productToUpdate, setProductToUpdate] = useState<IProduct | undefined>(undefined);


  useEffect(() => {
    getProducts()
      .then((products: IProduct[]) => setProducts(products))
      .catch((error: Error ) => console.error(error));
  }, []);


  // return list of products
  return (
    <>
      <ProductTable products={products} productToUpdate={productToUpdate} setProductToUpdate={setProductToUpdate} />

      <ProductForm productToUpdate={productToUpdate} setProductToUpdate={setProductToUpdate} />
    </>
  );
}
