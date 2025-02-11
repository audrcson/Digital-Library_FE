import React, { useState } from 'react';
import Header from "../components/User/Header";
import Sidebar from "../components/User/Sidebar";
import Table from "../components/User/Table";
import Profile from "../components/User/Profile"; // Import komponen Profile

const Dashbord = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [showProfile, setShowProfile] = useState(false); // State untuk menampilkan Profile
  const user = JSON.parse(localStorage.getItem('user'));

  const tableData = {
    "Document Procedure-MEM-DP-P602_4": [
      { doc: "MEM-DP-P602_4", desc: "This document procedure is to define the maintenance of production facilities to achieve conformity to product requirements", date: "Oct 2015", rev: "V.01", fileUrl: "/10-DP-P602_4.pdf" },
    ],
    "Document Procedure-MEM-DP-W602_01": [
      { doc: "MEM-DP-W602_01", desc: "Link 2", date: "a", rev: "b", fileUrl: "/10-DP-W602_01.pdf" },
    ],
    "Document Procedure-MEM-DP-W602_02": [
      { doc: "MEM-DP-W602_02", desc: "Link 3", date: "a", rev: "b", fileUrl: "/10-DP-W602_02.pdf" },
    ],
    "Document Manual Book-MEM-MB-MAC": [
      { doc: "MEM-MB-MAC", desc: "Link 1", date: "a", rev: "b" },
    ],
    "Document Manual Book-MEM-MB-MFT": [
      { doc: "MEM-MB-MFT", desc: "Link 1", date: "a", rev: "b" },
    ],
    "Document Manual Book-MEM-MB-BCT": [
      { doc: "MEM-MB-BCT", desc: "Link 1", date: "a", rev: "b" },
    ],
    "Document Manual Book-MEM-MB-SFT": [
      { doc: "MEM-MB-SFT", desc: "Document Manual Book ", date: "a", rev: "b" },
    ],
    "Document Manual Book-MEM-MB-UTL": [
      { doc: "MEM-MB-UTL", desc: "Link 1", date: "a", rev: "b" },
    ],
    "Document Manual Book-MEM-MB-GEN": [
      { doc: "MEM-MB-GEN", desc: "Link 1", date: "a", rev: "b" },
    ],
    "Bisnis Proses-Maint. Engineering & Development": [
      { doc: "Maint. Engineering & Development", desc: "Link 1", date: "a", rev: "b" },
    ],
    "Bisnis Proses-Maint. Planning & Control": [
      { doc: "Maint. Planning & Control", desc: "Link 1", date: "a", rev: "b" },
    ],
    "Bisnis Proses-Maint. Service & Repair Machine": [
      { doc: "Maint. Service & Repair Machine", desc: "Link 1", date: "a", rev: "b" },
    ],
    "Bisnis Proses-Metal Forming, Quality, Tooling": [
      { doc: "Metal Forming, Quality, Tooling", desc: "Link 1", date: "a", rev: "b" },
    ],
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
    setShowProfile(true); 
    setSelectedButton(null); 
  };

  const handleBackProfile = () => {
    setShowProfile(false); 
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
          onProfileClick={handleProfileClick}
        />
        <div className="mt-[16%] lg:mt-[7%] lg:ml-[23%] lg:w-[77%] p-4">
          {showProfile && <Profile onBack={handleBackProfile} />}
          {!showProfile && <Table data={tableData[selectedButton] || []} />}
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
