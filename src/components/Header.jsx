import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-lg shadow-md">
      <div className="flex justify-start items-center px-20  py-2">
        <h1>Online Shop Admin</h1>
        <div className="mx-2 h-full w-[2px] py-3 bg-gray-500"></div>
        <ul className="flex justify-start items-center gap-2">
          <li className="cursor-pointer hover:underline">
            <Link to="/">Projects</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link to="/customers">Customers</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
