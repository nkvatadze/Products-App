import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { get, getById, set } from "../utils/localStorage";
import ProductInput from "./ProductInput";
import { v4 as uuidv4 } from "uuid";

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = getById("products", id);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: product?.name ?? "",
      number: product?.number ?? "",
      color: product?.color ?? "",
      standard_cost: product?.standard_cost ?? "",
      list_price: product?.list_price ?? "",
      size: product?.size ?? "",
      weight: product?.weight ?? "",
      sell_start_date: product?.sell_start_date ?? "",
    },
  });

  const onSubmit = (data) => {
    data.id = uuidv4();
    data.modified_date = new Date();
    let newProducts = get("products") ?? [];

    if (product) {
      // Update action
      newProducts = newProducts.filter((p) => p.id !== product.id);
    }

    newProducts.push(data);

    set("products", newProducts);
    navigate("/");
  };
  return (
    <div className="px-20 mt-12">
      <div className="flex text-3xl mb-12">
        <h1>Create a new Product</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col justify-center items-start gap-2 w-3/5">
          <ProductInput type="text" name="Name" attributes={register("name", { required: { value: true, message: "Name field is required" } })} error={errors.name} />
          <ProductInput
            type="text"
            name="Product Number"
            attributes={register("number", { required: { value: true, message: "Product number field is required" } })}
            error={errors.number}
          />
          <ProductInput type="text" name="Color" attributes={register("color", { required: { value: true, message: "Product number field is required" } })} error={errors.color} />
          <ProductInput
            type="number"
            name="Standard Cost"
            attributes={register("standard_cost", {
              required: { value: true, message: "Standard Cost field is required" },
              min: { value: 0.0, message: "Standard cost must be minimum 0.0" },
              max: { value: 9999999999999999.99, message: "Standard cost must be maximum 9999999999999999.99" },
            })}
            error={errors.standard_cost}
          />
          <ProductInput
            type="number"
            name="List Price"
            attributes={register("list_price", {
              required: { value: true, message: "List Price field is required" },
              min: { value: 0.0, message: "List Price must be minimum 0.0" },
              max: { value: 9999999999999999.99, message: "List Price must be maximum 9999999999999999.99" },
            })}
            error={errors.list_price}
          />
          <ProductInput type="text" name="Size" attributes={register("size")} error={errors.size} />
          <ProductInput type="number" name="Weight" attributes={register("weight")} error={errors.weight} />
          <ProductInput
            type="datetime-local"
            name="Sell Start Date"
            attributes={register("sell_start_date", { required: { value: true, message: "Sell Start Date field is required" } })}
            error={errors.sell_start_date}
          />
          <div className="flex justify-end items-center w-full gap-2">
            <button type="submit" className="bg-green-600 rounded-md px-3 py-1.5 text-white text-md hover:bg-green-700 transition ease-in-out delay-50">
              Save
            </button>
            <Link to="/" className="bg-indigo-500 text-white rounded-md px-3 py-1.5 hover:bg-indigo-700 transition ease-in-out delay-50">
              Back to list
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
