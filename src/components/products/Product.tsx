import { useState, useEffect } from "react";
import { IProduct } from "../../interfaces";
import { fetchProducts } from "../../api/fetch";

export default function Product() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    fetchProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  // return list of products
  return (
    <div>
      <h1>Produkter</h1>
      <ul>
        {products.map((product) => (
          <p key={product.id}>
            <b>{product.name}</b> <br />
            Pris: {product.price} kr. <br />
            Vægt: {product.weightInGrams} gr.
          </p>
        ))}
      </ul>
    </div>
  );
}
