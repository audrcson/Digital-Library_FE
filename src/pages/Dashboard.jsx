import React, { useState } from 'react';
import Header from "../components/User/Header";
import Sidebar from "../components/User/Sidebar";
import Table from "../components/User/Table";
import Profile from "../components/User/Profile"; // Import komponen Profile

const Dashbord = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [showProfile, setShowProfile] = useState(false); // State untuk menampilkan Profile

  const tableData = {
    "Document Procedure-MEM-DP-P602_4": [
      { doc: "MEM-DP-P602_4", desc: "Link 1", date: "a", rev: "b", fileUrl: "/10-DP-P602_4.pdf" },
    ],
    // ... data lainnya
  };

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
    setShowProfile(false); // Sembunyikan Profile jika tombol lain diklik
    handleCloseSidebar();
  };

  const handleProfileClick = () => {
    setShowProfile(true); // Tampilkan Profile
    setSelectedButton(null); // Sembunyikan tabel lainnya
  };

  const handleBackProfile = () => {
    setShowProfile(false); // Sembunyikan Profile saat tombol kembali diklik
  };

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        onButtonClick={handleButtonClick}
      />

      <div className="flex flex-col w-full">
        <Header
          onHamburgerClick={handleHamburgerClick}
          onProfileClick={handleProfileClick} // Tambahkan fungsi untuk Profile
        />
        <div className="mt-[20%] lg:mt-[8%] lg:ml-[23%] lg:w-[77%] p-4">
          {/* Jika Profile ditampilkan */}
          {showProfile && <Profile onBack={handleBackProfile} />}

          {/* Jika Profile tidak ditampilkan, tampilkan tabel */}
          {!showProfile && <Table data={tableData[selectedButton] || []} />}
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
