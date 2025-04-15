import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
import { MdAdminPanelSettings, MdDashboard } from "react-icons/md";
import { IoDocumentText, IoLogOut } from "react-icons/io5";
import { FaUserEdit, FaUser } from "react-icons/fa";
import LogoutModal from "../User/LogoutModal";
import Profile from "../User/Profile";

const AdminSidebar = ({ isOpen, onClose, onButtonClick }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDocumentActive, setIsDocumentActive] = useState(false);
  const [isUserAccountActive, setIsUserAccountActive] = useState(false);
  const [activeButton, setActiveButton] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  useEffect(() => {
    setIsDocumentActive(location.pathname === "/admin");
    setIsUserAccountActive(location.pathname === "/admin/user-account");
  }, [location]);

  const handleUserAccountClick = () => {
    navigate("/admin/user-account");
    setIsDocumentActive(false);
    setIsUserAccountActive(true);
  }

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
    <div className="sidebar">
      {/* Sidebar tetap turun dari atas */}
      <div
        className={`fixed top-[12%] left-0 w-full lg:w-[20%] bg-[#1A2E3E] py-1 transform ${
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
                <span className="block text-lg source-sans-3-semibold">Admin</span>
                <span className="block text-md text-white">
                  Maintenance Library Excellent
                </span>
              </div>
            </div>
          </div>

          <div className="pt-4 source-sans-3-regular text-white cursor-pointer">
            <NavLink
              to="/admin"
              className={`flex sm:h-4 md:h-8 lg:h-12 xl:h-16 hover:bg-[rgba(66,112,165,0.96)] hover:text-white ${
                isDocumentActive
                ? "bg-[rgba(66,112,165,0.96)] text-white border-r-8 border-blue-400"
                : ""
              }`}
              onClick={() => {
                setIsDocumentActive(true);
                setIsUserAccountActive(false);
              }}
            >
              <div className="flex items-center mx-9">
                <IoDocumentText className="mr-4 sm:text-[10px] md:text-[15px] lg:text-[20px] xl:text-[25px] text-white" />
                <p className="sm:text-xs md:text-sm lg:text-sm xl:text-base source-sans-3-regular">
                  Document
                </p>
              </div>
            </NavLink>
            
            <NavLink
              to="/admin/user-account"
              className={`flex sm:h-4 md:h-8 lg:h-12 xl:h-16 hover:bg-[rgba(66,112,165,0.96)] hover:text-white ${
                isUserAccountActive ? "bg-[rgba(66,112,165,0.96)] text-white border-r-8 border-blue-400" : ""
              }`}
              onClick={() => {
                setIsDocumentActive(false);
                setIsUserAccountActive(true);
              }}
            >
              <div className="flex items-center mx-9">
                <FaUser className="mr-4 sm:text-[10px] md:text-[15px] lg:text-[20px] xl:text-[25px]" />
                <p className="sm:text-xs md:text-sm lg:text-sm xl:text-base">
                  User Account
                </p>
              </div>
            </NavLink>
          </div>
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
    </div>
  );
};

export default AdminSidebar;
