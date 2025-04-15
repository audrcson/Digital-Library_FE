import React, { useState, useEffect, useRef } from "react";
import { FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import LogoutModal from "./LogoutModal";
import Profile from "./Profile"; // Import komponen Profile

const Header = ({ onHamburgerClick, onProfileClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showProfilePage, setShowProfilePage] = useState(false); // State untuk menampilkan Profile
  const dropdownRef = useRef(null);

  // Fungsi toggle dropdown
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Jika Profile harus ditampilkan */}
      {showProfilePage ? (
        <Profile onBack={() => setShowProfilePage(false)} />
      ) : (
        <div className="w-full h-[12%] fixed top-0 left-0 bg-[rgb(94,150,214)] text-white flex items-center px-4 z-50">
          {/* Logo */}
          <div className="justify-center hidden lg:flex">
            <img src="/ptdi.png" alt="Logo" className="max-h-[70px] object-contain" />
          </div>

          {/* Title Section */}
          <div className="flex flex-col flex-grow source-sans-3-semibold text-left lg:text-center lg:items-center lg:justify-center">
            <h1 className="text-xl md:text-xl">Maintenance Library Excellent</h1>
            <h3 className="text-sm md:text-sm">Div. Detail Part Manufacturing</h3>
            <h3 className="text-sm md:text-sm">Directorate Production</h3>
          </div>

          {/* User Info */}
          <div className="hidden lg:flex items-center space-x-4 relative">
            <div className="text-sm text-right">
              <p className="font-semibold">Sandro</p>
              <p className="font-semibold">User</p>
            </div>
            <div className="relative" ref={dropdownRef}>
              {/* Klik untuk toggle dropdown */}
              <FaUser
                className="w-10 h-10 rounded-full bg-white text-black py-2 cursor-pointer"
                onClick={toggleDropdown}
              />
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full"></div>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute top-12 right-0 w-32 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                  <button
                  className="w-full px-4 py-2 text-left flex items-center hover:bg-gray-100"
                  onClick={() => {
                    onProfileClick(); // Gunakan callback untuk menampilkan Profile
                    setShowDropdown(false); // Tutup dropdown
                  }}
                  >
                    <div className="bg-gray-200 p-2 rounded-lg mr-2">
                      <FaUser className="text-[rgb(94,150,214)]" />
                    </div>
                    Profile
                  </button>

                  <button
                    className="w-full px-4 py-2 text-left flex items-center hover:bg-gray-100"
                    onClick={() => setShowLogoutModal(true)}
                  >
                    <div className="bg-gray-200 p-2 rounded-lg mr-2">
                      <IoLogOut className="text-[rgb(94,150,214)] font-semibold" />
                    </div>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            className="lg:hidden p-2 text-white bg-[#3a99ff] rounded-md"
            onClick={() => {
              setShowDropdown(false);
              onHamburgerClick();
            }}
          >
            <FiMenu />
          </button>

          {/* Modal Logout */}
          {showLogoutModal && (
            <LogoutModal
              onCancel={() => setShowLogoutModal(false)}
              onLogout={() => {
                console.log("User logged out");
                setShowLogoutModal(false);
              }}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Header;
