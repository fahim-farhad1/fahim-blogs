import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [open, isOpen] = useState(false);
  console.log(open);
  return (
    <div className="bg-white h-12 md:h-16 border md:text-xl">
      <div className="mx-2 md:mx-20 flex justify-between mt-3 md:items-center">
        {open ? (
          <MdClose
            onClick={() => isOpen(!open)}
            className="md:hidden h-6 w-6"
          />
        ) : (
          <FaListUl
            onClick={() => isOpen(!open)}
            className="h-6 w-6 md:hidden"
          />
        )}
        <p className="font-semibold text-lg md:text-2xl">
          Fahim <span className="text-[#6941C6]">Blog</span>
        </p>
        <ul
          className={` duration-300 w-32 p-2 h-full  md:flex items-center gap-5 mt-[33px] md:mt-0 ${
            open ? "-ml-[10px] space-y-3 bg-gray-100 border" : "-ml-[150px]"
          } absolute md:static `}
        >
          <li>Home</li>
          <li>Blogs</li>
          <li>About</li>
          <li>Category</li>
        </ul>
        <label className="grid cursor-pointer place-items-center">
          <input
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
          />
          <svg
            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
