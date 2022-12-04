import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductForm from "./components/ProductForm";
import ComingSoon from "./components/ComingSoon";
import ProductDelete from "./components/ProductDelete";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route exact path="/products/create" element={<ProductForm />} />
        <Route exact path="/products/:id/edit" element={<ProductForm />} />
        <Route exact path="/products/:id/delete" element={<ProductDelete />} />
        <Route path="/customers" element={<ComingSoon />} />
        <Route path="/orders" element={<ComingSoon />} />
        <Route path="/reports" element={<ComingSoon />} />
      </Routes>
    </div>
  );
}

export default App;
