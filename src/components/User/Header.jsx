import React from "react";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const Header = ({ onHamburgerClick }) => {
  return (
    <div className="w-full lg:w-[77%] h-[12%] fixed top-0 left-0 lg:left-[23%] bg-[#1A2E3E] text-white flex items-center px-4 z-50">
      <div className="flex flex-col flex-grow source-sans-3-semibold text-left lg:text-center lg:items-center lg:justify-center">
        <h1 className="text-xl md:text-xl">Maintenance Library Excellent</h1>
        <h3 className="text-sm md:text-sm">Div. Detail Part Manufacturing</h3>
        <h3 className="text-sm md:text-sm">Directorate Production</h3>
      </div>

      <div className="hidden lg:flex items-center space-x-4 relative">
        <div className="text-sm text-right">
          <p className="font-semibold">John Doe</p>
          <p className="font-semibold">User</p>
        </div>
        <div className="relative ">
          <FaUser className="w-10 h-10 rounded-full bg-white text-black py-2" />
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1A2E3E]"></div>
        </div>
      </div>

      <button
        className="lg:hidden p-2 text-white bg-[#3a99ff] rounded-md"
        onClick={onHamburgerClick}
      >
        <FiMenu />
      </button>
    </div>
  );
};

export default Header;
