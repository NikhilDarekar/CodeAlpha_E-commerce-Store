import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-t-2 border-blue-700">

      <div className="flex justify-between lg:w-auto w-full pl-6 pr-2">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
          <span className="font-semibold text-xl tracking-tight">
            My Navbar
          </span>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
          isOpen ? "block" : "hidden lg:block"
        }`}
      >
        <div className="text-md font-bold text-blue-700 lg:flex-grow">
          <a
            href="#men"
            className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 rounded hover:text-white hover:bg-blue-700 mr-2"
          >
            Men
          </a>

          <a
            href="#women"
            className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 rounded hover:text-white hover:bg-blue-700 mr-2"
          >
            Women
          </a>

          <a
            href="#kids"
            className="block mt-4 lg:inline-block lg:mt-0 px-4 py-2 rounded hover:text-white hover:bg-blue-700 mr-2"
          >
            Menu 3
          </a>
        </div>

        <div className="relative mx-auto text-gray-600 lg:block hidden">
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            placeholder="Search"
          />

          <button
            type="submit"
            className="absolute right-0 top-0 mt-3 mr-2"
          >
            🔍
          </button>
        </div>

        <div className="flex">
          <a
            href="#signin"
            className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >
            Sign in
          </a>

          <a
            href="#login"
            className="block text-md px-4 py-2 rounded text-blue-700 ml-2 font-bold hover:text-white mt-4 hover:bg-blue-700 lg:mt-0"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;