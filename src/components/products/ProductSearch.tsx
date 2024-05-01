import React from 'react';
import { searchProduct } from '../../api/fetch';

export default function ProductSearch() {

    // når man søger skal product search fortælle product page at product table skal vise resultaterne

    const searchProductRef = React.useRef<HTMLInputElement>(null);

    async function handleSearch(event: React.FormEvent<HTMLButtonElement>) {
        event.preventDefault();
        console.log("Search was clicked");
        console.log("Search product: ", searchProductRef.current?.value);
        const searchString = searchProductRef.current?.value;
        if (!searchString) {
            console.error("Search string is empty");
            // fortæl productpage at den skal vise alle produkter igen 
            // + det du søgte fandtes ikke pop up eller noget
            return;
        
        } 
        const result = await searchProduct(searchString);
        console.log("Search result: ", result);
        
    }

    return (
        <form>
            <label>Søg Produkt:
                <input type="text" name="searchProduct" ref={searchProductRef} placeholder="Skriv produktnavn"></input>
            </label>
            <button type="submit" onClick={handleSearch}>Søg</button>
        </form>
    )
}