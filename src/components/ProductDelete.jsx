import React from "react";
import { useParams } from "react-router-dom";
import { get, getById, set } from "../utils/localStorage";
import KeyValueDisplay from "./KeyValueDisplay";
import Page404 from "./ErrorPages/Page404";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const ProductDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getById("products", id);
  const { handleSubmit } = useForm();

  if (!product) {
    return <Page404 />;
  }

  const onSubmit = () => {
    const products = get("products") ?? [];
    const newProducts = products.filter((p) => p.id !== id);

    set("products", newProducts);

    navigate("/");
  };

  return (
    <div className="px-20 mt-20 flex flex-col justify-center items-start">
      <div>
        <h1 className="text-4xl">Confirm Delete Product</h1>
      </div>
      <div className="mt-5 bg-red-300 text-left rounded-md text-red-700 pl-5 pr-12 py-2 text-3xl">
        <p>Are you sure you want to delete the next product?</p>
      </div>
      <div className="w-full h-px bg-gray-300 mt-5 mb-5 rounded-md"></div>
      <KeyValueDisplay name="Product ID" value={product.id} />
      <KeyValueDisplay name="Name" value={product.name} />
      <KeyValueDisplay name="Product Number" value={product.number} />
      <KeyValueDisplay name="Color" value={product.color} />
      <KeyValueDisplay name="Standard Cost" value={product.standard_cost} />
      <KeyValueDisplay name="List price" value={product.list_price} />
      <KeyValueDisplay name="Size" value={product.size} />
      <KeyValueDisplay name="Weight" value={product.weight} />
      <KeyValueDisplay name="Sell Start Date" value={product.sell_start_date} />
      <KeyValueDisplay name="Modified Date" value={product.modified_date} />

      <form onSubmit={handleSubmit(onSubmit)} className="w-2/5">
        <div className="my-5 flex justify-end w-full items-center">
          <button className="mr-2 bg-red-600 rounded-md transition ease-in-out delay-50 px-3 py-1.5 text-white hover:bg-red-700">Delete</button>
          <Link className="bg-indigo-700 rounded-md transition ease-in-out delay-50 px-3 py-1.5 text-white hover:bg-indigo-800" to="/">
            Cancel! back to products
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ProductDelete;
