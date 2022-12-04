import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductEdit from "./components/ProductEdit";
import Customers from "./components/Customers";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id/edit" element={<ProductEdit />} />
        <Route path="/customers" element={<Customers />} />
      </Routes>
    </div>
  );
}

export default App;
