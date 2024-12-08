import React from "react";

const AdminSidebar = ({ isOpen, onClose, onButtonClick }) => {
  const buttons = [
    { label: "Dashboard" },
    { label: "Document" },
  ];

  return (
    <>
      {/* Sidebar Positioned Below Header */}
      <div
        className={`fixed top-[12%] left-0 h-[24%] w-full lg:w-[23%] bg-[#1A2E3E] px-4 py-1 z-40 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out lg:translate-y-0 lg:top-[12%] lg:h-screen lg:block`}
      >
        <div className="space-y-3 pt-6">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="block w-full px-4 py-2 bg-[rgba(66,112,165,0.96)] text-white rounded text-left hover:bg-blue-500 transition-colors duration-300"
              onClick={() => onButtonClick(button.label)}
            >
              {button.label}
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
