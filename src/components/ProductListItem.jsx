import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className="grid grid-cols-6 items-center gap-8 mt-5 bg-gray-100 shadow-md rounded-md hover:shadow-lg cursor-pointer py-4 transition ease-in-out delay-50">
      <div className="col-span-1">{product.product_name}</div>
      <div className="col-span-1">{product.product_number}</div>
      <div className="col-span-1">{product.color}</div>
      <div className="col-span-1">{product.list_price}</div>
      <div className="col-span-1">{product.modified_date}</div>
      <div className="col-span-1 text-md text-white ">
        <Link className="cursor-pointer mr-2 hover:bg-gray-600 bg-gray-500 rounded-md px-3 py-2 transition ease-in-out delay-50" to={`products/${product.id}/edit`}>
          Edit
        </Link>
        <button className="cursor-pointer bg-red-600 hover:bg-red-700 rounded-md px-3 py-1.5 transition ease-in-out delay-50">Delete</button>
      </div>
    </div>
  );
};

export default ProductItem;
