import { useState, useEffect } from "react";
import { IProduct } from "../../interfaces";
import { getProducts } from "../../api/fetch";
// TODO: add so one product gets fetched --- getProduct;
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
      <ProductTable products={products} setProductToUpdate={setProductToUpdate} setProducts={setProducts} />

      <ProductForm productToUpdate={productToUpdate} setProductToUpdate={setProductToUpdate} setProducts={setProducts} />
    </>
  );
}
