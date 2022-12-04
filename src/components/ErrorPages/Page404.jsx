import React from "react";
import { Link } from "react-router-dom";

const Page403 = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center">
      <h1 className="text-4xl">404 Not Found</h1>
      <Link className="text-indigo-700 text-xl underline " to="/">
        Back to products
      </Link>
    </div>
  );
};

export default Page403;
