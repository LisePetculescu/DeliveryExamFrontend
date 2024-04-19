import { Route, Routes } from "react-router-dom";
import Product from "./components/products/Product";
import "./App.css";
import NavHeader from "./NavHeader";

function App() {
  return (
    <>
      <NavHeader/>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      
    </>
  );
}

export default App;
