import { IProduct } from "../../interfaces";
import { deleteProduct, getProducts } from "../../api/fetch";



export default function ProductTable({ products, setProducts, setProductToUpdate }: { products: IProduct[]; setProducts: (product: IProduct[]) => void; setProductToUpdate: (product: IProduct | undefined) => void }) {

  // make a function that return the object that is clicked on
 function handleEditClicked(product: IProduct) {
   setProductToUpdate(product);
  //  console.log(setProductToUpdate(product));
 }

 async function handleDeleteClicked(product: IProduct) {
    console.log("Delete product: ", product);
    if (window.confirm("Er du sikker på at du vil slette dette produkt?")) {
      if (product.id === undefined) {
        console.error("Product ID is undefined");
        return;
      }
      await deleteProduct(product.id?.toString());
      console.log("Produktet blev slettet");
      setProducts(await getProducts());
    } else {
      console.log("Produktet blev ikke slettet");
      window.alert("Produktet blev ikke slettet");
    }

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
              <button onClick={() => handleDeleteClicked(product)}>SLET</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
