import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductForm from "./components/ProductForm";
import Customers from "./components/Customers";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route exact path="/products/create" element={<ProductForm />} />
        <Route exact path="/products/:id/edit" element={<ProductForm />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
