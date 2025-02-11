import React, { useState } from "react";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";
import { IoDocumentText, IoLogOut } from "react-icons/io5";
import { FaUserEdit, FaUser } from "react-icons/fa";
import LogoutModal from "../User/LogoutModal"; // Pastikan path sesuai
import Profile from "../User/Profile"; // ✅ Tambahkan import Profile

const AdminSidebar = ({ isOpen, onClose, onButtonClick }) => {
  const [activeButton, setActiveButton] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const buttons = [
    { icon: <MdDashboard />, label: "Dashboard" },
    { icon: <IoDocumentText />, label: "Document" },
    { icon: <FaUserEdit />, label: "Manage User" },
  ];

  const handleButtonClick = (label) => {
    if (label === "Logout") {
      setShowLogoutModal(true);
    } else if (label === "Profile") {
      setActiveButton("Profile");
      setShowProfile(true);
    } else {
      setActiveButton(label);
      onButtonClick(label);
    }
  };

  return (
    <>
      {/* Sidebar tetap turun dari atas */}
      <div
        className={`fixed top-[12%] left-0 w-full lg:w-[23%] bg-[#1A2E3E] py-1 z-40 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out lg:translate-y-0 lg:top-[12%] 
          h-screen max-h-[65vh] overflow-y-auto lg:min-h-screen`}
      >
        <div className="space-y-3 pt-6">
          {/* Admin Info */}
          <div className="flex flex-col items-start text-white space-y-1 pb-3 pl-4">
            <div className="flex items-center space-x-2">
              <MdAdminPanelSettings className="text-white text-5xl" />
              <div>
                <span className="block text-lg font-semibold">Admin</span>
                <span className="block text-md text-gray-300">
                  Maintenance Library Excellent
                </span>
              </div>
            </div>
          </div>

          {/* Buttons Menu */}
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`flex items-center space-x-3 w-full text-left py-3 pl-12 relative transition-all duration-300 ${
                activeButton === button.label
                  ? "bg-[rgba(66,112,165,0.96)] text-white"
                  : "bg-[#1A2E3E] text-white"
              }`}
              onClick={() => handleButtonClick(button.label)}
            >
              <span className="text-xl">{button.icon}</span>
              <span>{button.label}</span>
              <span
                className={`absolute inset-y-0 right-0 w-1.5 bg-blue-400 transition-transform duration-300 origin-top ${
                  activeButton === button.label ? "scale-y-100" : "scale-y-0"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Tombol Profile & Logout (Hanya untuk Mobile) */}
        <div className="lg:hidden flex flex-col space-y-3 mt-4">
          <button
            className={`flex items-center space-x-4 w-full text-left py-3 pl-12 relative transition-all duration-300 ${
              activeButton === "Profile"
                ? "bg-[rgba(66,112,165,0.96)] text-white"
                : "bg-[#1A2E3E] text-white"
            }`}
            onClick={() => handleButtonClick("Profile")}
          >
            <FaUser className="text-md" />
            <span>Profile</span>
            <span
              className={`absolute inset-y-0 right-0 w-1.5 bg-blue-400 transition-transform duration-300 origin-top ${
                activeButton === "Profile" ? "scale-y-100" : "scale-y-0"
              }`}
            ></span>
          </button>

          <button
            className={`flex items-center space-x-3 w-full text-left py-3 pl-12 relative transition-all duration-300 ${
              showLogoutModal
                ? "bg-[rgba(66,112,165,0.96)] text-white"
                : "bg-[#1A2E3E] text-white"
            }`}
            onClick={() => setShowLogoutModal(true)}
          >
            <IoLogOut className="text-xl" />
            <span>Logout</span>
            <span
              className={`absolute inset-y-0 right-0 w-1.5 bg-blue-400 transition-transform duration-300 origin-top ${
                showLogoutModal ? "scale-y-100" : "scale-y-0"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Overlay untuk menutup sidebar di Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Modal Logout */}
      {showLogoutModal && (
        <LogoutModal onCancel={() => setShowLogoutModal(false)} />
      )}

      {/* Modal Profile */}
      {showProfile && (
        <div className="fixed inset-0 bg-white p-4 z-50 overflow-auto mt-16">
          <Profile onBack={() => setShowProfile(false)} />
        </div>
      )}
    </>
  );
};

export default AdminSidebar;
