import { IProduct } from "../../interfaces";
import { getProducts, addProduct } from "../../api/fetch";

export default function ProductForm({
  setProducts,
  productToUpdate,
  setProductToUpdate,
}: {
  setProducts: (product: IProduct[]) => void;
  productToUpdate: IProduct | undefined;
  setProductToUpdate: (product: IProduct | undefined) => void;
}) {
  const EMPTY_PRODUCT: IProduct = { name: "", price: 0, weightInGrams: 0 };
  const productToEdit = productToUpdate ? productToUpdate : EMPTY_PRODUCT;

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setProductToUpdate({ ...productToEdit, [name]: value });
  }

  async function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    console.log("Product to update: ", productToUpdate);

    // change data type from string to number on price and weightInGrams
    const updatedProductData: IProduct = {
      ...productToEdit,
      price: Number(productToEdit.price),
      weightInGrams: Number(productToEdit.weightInGrams),
    };

    const addedOrEdited = updatedProductData.id ? "edited" : "added";
    console.log(`Product ${addedOrEdited}: `, updatedProductData);
    // console.log("Submit product: ", updatedProduct);

    const newProduct = await addProduct(updatedProductData);
    alert(`Produkt ${addedOrEdited}: ${newProduct.name}`);

    setProductToUpdate(EMPTY_PRODUCT);
    setProducts(await getProducts());
  }

  return (
    <div>
      <h2>Produkt Formular</h2>
      <form>
        <label>
          Navn:
          <input type="text" name="name" value={productToEdit.name} onChange={handleChange} />
        </label>
        <label>
          Pris:
          <input type="number" name="price" value={productToEdit.price} onChange={handleChange} />
        </label>
        <label>
          Vægt:
          <input type="number" name="weightInGrams" value={productToEdit.weightInGrams} onChange={handleChange} />
        </label>
        <button type="submit" onClick={handleSubmit}>
          {productToUpdate && productToUpdate.id ? "Rediger produkt" : "Opret produkt"}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setProductToUpdate(EMPTY_PRODUCT);
          }}
        >
          Annullér
        </button>
      </form>
    </div>
  );
}
