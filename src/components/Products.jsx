import React from "react";
// import { Link } from "react-router-dom";
import ProductListItem from "./ProductListItem";
import { useState } from "react";

const initialProducts = [
  {
    id: 1,
    product_name: "HL Road Frame - Black, 58",
    product_number: "FR-R928-58",
    color: "Black",
    list_price: "900.00",
    modified_date: "11/11/2021",
  },
  {
    id: 2,
    product_name: "HL Road Frame - Black, 59",
    product_number: "FR-R928-59",
    color: "Red",
    list_price: "1200.00",
    modified_date: "11/10/2021",
  },
];
const Products = () => {
  const [filtersShown, setFiltersShown] = useState(false);
  const [search, setSearch] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [products, setProducts] = useState(initialProducts);

  const handleSearchChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handlePriceFromChange = ({ target: { value } }) => {
    setPriceFrom(value);
  };

  const handlePriceToChange = ({ target: { value } }) => {
    setPriceTo(value);
  };

  const handleFilter = (e) => {
    e.preventDefault();
    let newProducts = [...initialProducts];
    if (search) {
      newProducts = newProducts.filter((p) => p.product_name.toLowerCase().includes(search.toLowerCase()));
    }

    if (priceFrom) {
      newProducts = newProducts.filter((p) => +p.list_price >= +priceFrom);
    }
    if (priceTo) {
      newProducts = newProducts.filter((p) => +p.list_price <= +priceTo);
    }

    setProducts(newProducts);
  };

  const handleClearFilter = (e) => {
    e.preventDefault();
    setSearch("");
    setPriceFrom("");
    setPriceTo("");

    setProducts(initialProducts);
  };

  return (
    <div className="px-20 mt-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">Products</h1>
        <div>
          <button onClick={() => setFiltersShown(!filtersShown)} className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 transition ease-in-out delay-50 rounded-md text-white">
            {filtersShown ? "Hide" : "Show"} Filters
          </button>
        </div>
      </div>
      {filtersShown && (
        <form className="flex justify-start gap-8 items-center my-5">
          <div>
            <label className="mr-2 text-lg">Name</label>
            <input type="text" className="rounded-md border-2 border-gray-400 px-2 py-[2px]" value={search} onChange={handleSearchChange} />
          </div>
          <div>
            <label className="mr-2 text-lg">Price range</label>
            <input
              type="number"
              placeholder="Price From"
              step="0.01"
              className="rounded-md border-2 border-gray-400 px-2 py-[2px]"
              value={priceFrom}
              onChange={handlePriceFromChange}
            />
          </div>
          <div>
            <input type="number" placeholder="Price To" step="0.01" className="rounded-md border-2 border-gray-400 px-2 py-[2px]" value={priceTo} onChange={handlePriceToChange} />
          </div>
          <div>
            <button type="submit" onClick={handleFilter} className="bg-green-600 hover:bg-green-800 px-3 py-1.5 transition ease-in-out delay-50 text-white rounded-md ">
              Apply
            </button>
            <button onClick={handleClearFilter} className="ml-5 text-gray-700">
              Clear filters
            </button>
          </div>
        </form>
      )}
      <div className="grid grid-cols-6 gap-8 bg-gray-600 text-white mt-2 py-2 shadow-md rounded-md">
        <div className="col-span-1">Product Name</div>
        <div className="col-span-1">Product Number</div>
        <div className="col-span-1">Color</div>
        <div className="col-span-1">List Price</div>
        <div className="col-span-1">Modified Date</div>
        <div className="col-span-1">Actions</div>
      </div>
      {products && products.map((product) => <ProductListItem key={product.id} product={product} />)}
    </div>
  );
};

export default Products;
