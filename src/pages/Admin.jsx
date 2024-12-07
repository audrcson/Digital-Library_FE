import React, { useState } from "react";
import AdminSidebar from "../components/Admin/AdminSidebar";
import Header from "../components/User/Header";
import AdminDashboard from "../components/Admin/AdminDashboard";
import AdminDocument from "../components/Admin/AdminDocument";

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null); 

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleButtonClick = (buttonLabel) => {
    setSelectedButton(buttonLabel);
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} onButtonClick={handleButtonClick} />
      <div className="flex flex-col w-full">
        <Header onHamburgerClick={handleHamburgerClick} />
        <div className="mt-[20%] lg:mt-[8%] lg:ml-[23%] lg:w-[77%] p-4">
          {selectedButton === "Dashboard" && <AdminDashboard />}
          {selectedButton === "Document" && <AdminDocument />}
        </div>
      </div>
    </div>
  );
};

export default Admin;
