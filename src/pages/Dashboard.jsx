import React, { useState } from 'react';
import Header from "../components/User/Header";
import Sidebar from "../components/User/Sidebar";
import Table from "../components/User/Table";

const Dashbord = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const tableData = {
    "Document Procedure-MEM-DP-P602_4": [
      { doc: "MEM-DP-P602_4", desc: "Link 1", date: "a", rev: "b", fileUrl: "/public/10-DP-P602_4.pdf" },
    ],
    "Document Procedure-MEM-DP-W602_01": [
      { doc: "MEM-DP-W602_01", desc: "Link 2", date: "a", rev: "b", fileUrl: "/public/10-DP-W602_01.pdf" },
    ],
    "Document Procedure-MEM-DP-W602_02": [
      { doc: "MEM-DP-W602_02", desc: "Link 3", date: "a", rev: "b", fileUrl: "/public/10-DP-W602_02.pdf" },
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
      { doc: "MEM-MB-SFT", desc: "Link 1", date: "a", rev: "b" },
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
    setSelectedButton(buttonKey); // Update selectedButton with the clicked button key
    handleCloseSidebar(); // Close the sidebar when button is clicked
  };

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
        onButtonClick={handleButtonClick}
      />

      <div className="flex flex-col w-full">
        <Header onHamburgerClick={handleHamburgerClick} />
        <div className="mt-[20%] lg:mt-[8%] lg:ml-[23%] lg:w-[77%] p-4">
          <Table data={tableData[selectedButton] || []} />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
