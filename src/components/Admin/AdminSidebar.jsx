import React, { useState } from "react";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";

const AdminSidebar = ({ isOpen, onClose, onButtonClick }) => {
  const [activeButton, setActiveButton] = useState(""); // State untuk tombol aktif
  const buttons = [
    { icon: <MdDashboard />, label: "Dashboard" },
    { icon: <IoDocumentText />, label: "Document" },
    { icon: <FaUserEdit />, label: "User" },
  ];

  return (
    <>
      {/* Sidebar Positioned Below Header */}
      <div
        className={`fixed top-[12%] left-0 h-[48%] w-full lg:w-[23%] bg-[#1A2E3E] py-1 z-40 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full hidden lg:block"
        } transition-transform duration-300 ease-in-out lg:translate-y-0 lg:top-[12%] lg:h-screen`}
      >
        <div className="space-y-3 pt-6">
          {/* Admin Section */}
          <div className="flex flex-col items-start text-white space-y-1 pb-3 pl-4">
            <div className="flex items-center space-x-2">
              <MdAdminPanelSettings className="text-white text-5xl" />
              <div>
                <span className="block text-lg source-sans-3-semibold">Admin</span>
                <span className="block text-md text-gray-300 source-sans-3-regular">Maintenance Library Excellent</span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`flex items-center space-x-3 w-full text-left source-sans-3-regular py-3 pl-12 relative transition-all duration-300 ${
                activeButton === button.label
                  ? "bg-[rgba(66,112,165,0.96)] text-white" 
                  : "bg-[#1A2E3E] text-white" 
              }`}
              onClick={() => {
                setActiveButton(button.label); 
                onButtonClick(button.label);
              }}
            >
              <span className="text-xl ">{button.icon}</span>
              <span>{button.label}</span>
              <span
                className={`absolute inset-y-0 right-0 w-1 bg-blue-400 transition-transform duration-300 origin-top ${
                  activeButton === button.label ? "scale-y-100" : "scale-y-0"
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default AdminSidebar;
