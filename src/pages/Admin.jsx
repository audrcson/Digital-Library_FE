import React, { useState } from "react";
import AdminSidebar from "../components/Admin/AdminSidebar";
import Header from "../components/User/Header";
import AdminDashboard from "../components/Admin/AdminDashboard";
import AdminDocument from "../components/Admin/AdminDocument";
import Profile from "../components/User/Profile"; // Import komponen Profile
import User from "../components/Admin/User";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [showProfile, setShowProfile] = useState(false); // State untuk Profile

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleButtonClick = (buttonLabel) => {
    setSelectedButton(buttonLabel);
    setShowProfile(false); // Pastikan Profile tidak ditampilkan
    setIsSidebarOpen(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true); // Tampilkan Profile
    setSelectedButton(null); // Sembunyikan komponen lain
  };

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <AdminSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        onButtonClick={handleButtonClick}
      />
      <div className="flex flex-col w-full">
        <Header
          onHamburgerClick={handleHamburgerClick}
        />
        <div className="mt-[20%] lg:mt-[8%] lg:ml-[23%] lg:w-[77%] p-4">
          {showProfile && <Profile />} {/* Tampilkan Profile */}
          {!showProfile && selectedButton === "Dashboard" && <AdminDashboard />}
          {!showProfile && selectedButton === "Document" && <AdminDocument />}
          {!showProfile && selectedButton === "Manage User" && <User />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
