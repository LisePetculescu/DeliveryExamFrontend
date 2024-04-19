import { IProduct } from "../../interfaces";

export default function ProductTable({ products }: { products: IProduct[] }) {
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
              <button>Redigér</button>
            </td>
            <td>
              <button>SLET</button>
            </td>
          </tr>        ))}
      </tbody>
    </table>
  );
}
