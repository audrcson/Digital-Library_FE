import React, { useState } from 'react';
import Header from "../components/User/Header";
import Sidebar from "../components/User/Sidebar";
import Table from "../components/User/Table";
import Profile from "../components/User/Profile"; // Mengimpor komponen Profile
import AdminDocument from "./AdminDocument";

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [showProfile, setShowProfile] = useState(false); // State untuk menampilkan Profile
  const [title, setTitle] = useState("");
  const user = JSON.parse(localStorage.getItem('user'));
  

  const tableData = {
    "Document Procedure-MEM-DP-P602_4": [
      { 
        group: "MEM-DP-P602_4", 
        area: "Procedure for Maintenance of Production Facilities",
      }
    ],
  
    "Document Procedure-MEM-DP-W602_01": [
      { 
        group: "MEM-DP-W602_01", 
        area: "Work Procedure for Machine Maintenance",
      }
    ],
  
    "Document Procedure-MEM-DP-W602_02": [
      { 
        group: "MEM-DP-W602_02", 
        area: "Machine Maintenance Procedures",
      }
    ],
  
    "Document Manual Book-Maintenance Machining Facility": [
      { 
        group: "Group Conventional & TNC Machine", 
        area: "Machining",
      },
      { 
        group: "Group High Speed Machine", 
        area: "Machining",
      },
      { 
        group: "Group Profiling Machine", 
        area: "Machining",
      },
      { 
        group: "Group CNC Machine", 
        area: "Machining",
      },
    ],
  
    "Document Manual Book-Maintenance Sheet Metal Forming Precutting Facility": [
      { 
        group: "Group Stretch Forming", 
        area: "Metal Forming & Tooling",
      },
      { 
        group: "Group Detail Tools Machining ", 
        area: "Metal Forming & Tooling",
      },
      { 
        group: "Group Welding & Tubing", 
        area: "Metal Forming & Tooling",
      },
      { 
        group: "Group Profile Press Forming", 
        area: "Metal Forming & Tooling",
      },
      { 
        group: "Group Tools Dpm, Jigs Inv. & Services", 
        area: "Metal Forming & Tooling",
      },
      { 
        group: "Group Precutting", 
        area: "Metal Forming & Tooling",
      },
      { 
        group: "Group Sheet Press Forming", 
        area: "Metal Forming & Tooling",
      },
    ],
  
    "Document Manual Book-Maintenance Special Process Facility": [
      { 
        group: "Group Heat Treatment", 
        area: "Special Process",
      },
      { 
        group: "Group Composite", 
        area: "Special Process",
      },
      { 
        group: "Group Bonding", 
        area: "Special Process",
      },
      { 
        group: "Group Chemical Consumable&utility Support", 
        area: "Special Process",
      },
    ],
  
    "Bisnis Proses-Maint. Engineering & Development": [
      { 
        code: "Maint. Engineering & Development", 
        name: "Business Process Engineering & Development", 
        manu: "", 
      }
    ],
  
    "Bisnis Proses-Maint. Planning & Control": [
      { 
        code: "Maint. Planning & Control", 
        name: "Business Process Planning & Control", 
        manu: "", 
      }
    ],
  
    "Bisnis Proses-Maint. Service & Repair Machine": [
      { 
        code: "Maint. Service & Repair Machine", 
        name: "Business Process Service & Repair Machine", 
        manu: "", 
      }
    ],
  
    "Bisnis Proses-Metal Forming, Quality, Tooling": [
      { 
        code: "Metal Forming, Quality, Tooling", 
        name: "Business Process Metal Forming, Quality, and Tooling", 
        manu: "", 
      }
    ]
  };
  

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const [showDetail, setShowDetail] = useState(false);

  const handleButtonClick = (buttonKey) => {
    if (selectedButton === buttonKey) return; // Jika tombol yang sama diklik, tidak perlu update ulang
    setSelectedButton(buttonKey);
    setShowProfile(false); // Pastikan Profile tertutup
    setIsSidebarOpen(true); // Tetap buka sidebar setelah mengklik

    // Reset tampilan jika sedang di TableDetail
    setShowDetail(false);
  };

  const handleProfileClick = () => {
    setShowProfile(true); 
    setSelectedButton(null); 
  };

  const handleBackProfile = () => {
    setShowProfile(false); 
  };

  <AdminDocument data={tableData[selectedButton] || []} />


  return (
    <div className="w-screen flex felx-col">
      <div className="fixed top-0 left-0 w-full z-10">
        <Header 
          onHamburgerClick={handleHamburgerClick}
          onProfileClick={handleProfileClick}
        />
      </div>
      <div className="fixed w-[20%] h-screen top-[12%]">
        <Sidebar 
          isOpen={isSidebarOpen}
          onClose={handleCloseSidebar}
          onButtonClick={handleButtonClick}
          setTitle={setTitle}
        />
      </div>
      <div className="fixed">
        <div className="fixed top-[12%] mt-5 lg:w-[75%] w-full right-2">
          <div className="h-screen">
          {showProfile && <Profile onBack={handleBackProfile} />}
          {!showProfile && <Table title={title} data={tableData[selectedButton] || []} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
