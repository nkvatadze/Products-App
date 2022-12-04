import React from "react";

const ProductInput = ({ type, name, attributes, error }) => {
  return (
    <div className="grid grid-cols-2 items-center w-full">
      <label className="mr-2 col-span-1 justify-self-start text-xl">{name}</label>
      <input type={type} className={`w-full col-span-1 border rounded-md px-3 py-[2px] ${error ? "border-red-500" : "border-gray-300"}`} {...attributes} />
      {error && <div className="col-span-2 justify-self-start text-red-500">{error.message}</div>}
    </div>
  );
};

export default ProductInput;
