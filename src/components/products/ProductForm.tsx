import { IProduct } from "../../interfaces";


export default function ProductForm({productToUpdate, setProductToUpdate}: {productToUpdate: IProduct | undefined; setProductToUpdate: (product: IProduct | undefined) => void}) {


    const productToEdit = productToUpdate ? productToUpdate : { name: "", price: 0, weightInGrams: 0};


    function handleEdit(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target;
        setProductToUpdate({...productToEdit, [name]: value});
    }

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
      event.preventDefault();

      console.log("Product to update: ", productToUpdate);

      // change data type from string to number on price and weightInGrams
      const updatedProduct: IProduct = {
        name: productToEdit.name,
        price: Number(productToEdit.price),
        weightInGrams: Number(productToEdit.weightInGrams),
      };

      console.log("Submit product: ", updatedProduct);

      // TODO: Submit product to API
      
      setProductToUpdate({ name: "", price: 0, weightInGrams: 0 });
    }


    return (
      <div>
        <h2>Produkt Formular</h2>
        <form>
          <label>
            Navn:
            <input type="text" name="name" value={productToEdit.name} onChange={handleEdit} />
          </label>
          <label>
            Pris:
            <input type="number" name="price" value={productToEdit.price} onChange={handleEdit} />
          </label>
          <label>
            Vægt:
            <input type="number" name="weightInGrams" value={productToEdit.weightInGrams} onChange={handleEdit} />
          </label>
          <button type="submit" onClick={handleSubmit}>Opret produkt</button>
        </form>
      </div>
    );
    }