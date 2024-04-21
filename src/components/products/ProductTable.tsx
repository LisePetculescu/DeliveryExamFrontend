import { IProduct } from "../../interfaces";



export default function ProductTable({ products,  productToUpdate, setProductToUpdate }: { products: IProduct[]; productToUpdate: IProduct | undefined; setProductToUpdate: (product: IProduct | undefined) => void }) {

  // make a function that return the object that is clicked on
 function handleEditClicked(product: IProduct) {
   setProductToUpdate(product);
   console.log(setProductToUpdate(product));
   
   console.log("Product to update: ", productToUpdate);
   
 }
 
  
  // return table of products
  return (
    <table>
      <thead>
        <tr>
          <th>Produkt ID</th>
          <th>Navn</th>
          <th>Pris</th>
          <th>Vægt</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.weightInGrams}</td>
            <td>
              <button>Detaljer</button>
            </td>
            <td>
              <button onClick={() => handleEditClicked(product)}>Redigér</button>
            </td>
            <td>
              <button>SLET</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
