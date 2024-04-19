import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/products/ProductPage";
import "./App.css";
import NavHeader from "./NavHeader";

function App() {
  return (
    <>
      <NavHeader/>
        <Routes>
          <Route path="/" element={<ProductPage />} />
        </Routes>
      
    </>
  );
}

export default App;
