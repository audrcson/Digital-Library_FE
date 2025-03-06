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
      { 
        code: "MEM-DP-P602_4", 
        name: "Procedure for Maintenance of Production Facilities", 
        manu: "", 
        documents: [
          {
            doc: "Maintenance_Guide.pdf",
            fileUrl: "/10-DP-P602_4.pdf",
            desc: "Panduan perawatan mesin Kraft",
            date: "2025-03-05",
            rev: "1.2"
          },
          {
            doc: "Inspection_Guide.pdf",
            fileUrl: "/10-DP-P602_4.pdf",
            desc: "Petunjuk inspeksi berkala",
            date: "2025-03-06",
            rev: "1.3"
          }
        ]
      }
    ],
  
    "Document Procedure-MEM-DP-W602_01": [
      { 
        code: "MEM-DP-W602_01", 
        name: "Work Procedure for Machine Maintenance", 
        manu: "", 
        documents: [
          {
            doc: "Work_Instruction.pdf",
            fileUrl: "/10-DP-W602_01.pdf",
            desc: "Instruksi kerja untuk pemeliharaan",
            date: "2025-04-10",
            rev: "2.0"
          },
          {
            doc: "Repair_Guide.pdf",
            fileUrl: "/10-DP-W602_01.pdf",
            desc: "Panduan perbaikan mesin",
            date: "2025-04-15",
            rev: "2.1"
          }
        ]
      }
    ],
  
    "Document Procedure-MEM-DP-W602_02": [
      { 
        code: "MEM-DP-W602_02", 
        name: "Machine Maintenance Procedures", 
        manu: "", 
        documents: [
          {
            doc: "Procedure_Doc.pdf",
            fileUrl: "/10-DP-W602_02.pdf",
            desc: "Dokumen prosedur perawatan",
            date: "2025-02-20",
            rev: "1.5"
          }
        ]
      }
    ],
  
    "Document Manual Book-DM6300": [
      { 
        code: "AAAR02", 
        name: "DMC 210 U", 
        manu: "Deckel Maho", 
        documents: [
          {
            doc: "Manual_Spindle_DNM.pdf",
            fileUrl: "/Manual spindle GMN.pdf",
            desc: "Manual book untuk mesin DMC 210 U",
            date: " ",
            rev: " "
          },
          {
            doc: "Geometrik.pdf",
            fileUrl: "/geometrik.pdf",
            desc: "Geometrik untuk mesin DMC 210 U",
            date: " ",
            rev: " "
          },
          {
            doc: "Wiring DMC 210 U.pdf",
            fileUrl: "/wiring DMC 210 U.pdf",
            desc: "Wiring untuk mesin DMC 210 U",
            date: " ",
            rev: " "
          },
        ]
      },
      { 
        code: "AABG01", 
        name: "Jobs", 
        manu: "Gantry", 
        documents: [
          {
            doc: "Manual Jobs.pdf",
            fileUrl: "/J1294.pdf",
            desc: "Manual book untuk mesin Jobs",
            date: " ",
            rev: " "
          },
          {
            doc: "Jobs Maintenance Manual.pdf",
            fileUrl: "/05_JOBS MAINTENANCE MANUAL.pdf",
            desc: "Jobs Maintenance Manual untuk Jobs",
            date: " ",
            rev: " "
          },
          {
            doc: "Wiring Diagram Jobs.pdf",
            fileUrl: "/06_WIRING DIAGRAMS.pdf",
            desc: "Wiring untuk mesin DMC 210 U",
            date: " ",
            rev: " "
          },
        ]
      },
    ],
  
    "Document Manual Book-DM6400": [
      { 
        code: "DM6400", 
        name: "Manual Book DM6400", 
        manu: "", 
        documents: [
          {
            doc: "Manual_DM6400.pdf",
            fileUrl: "/DM6400.pdf",
            desc: "Manual book untuk mesin DM6400",
            date: "2024-12-20",
            rev: "3.2"
          }
        ]
      }
    ],
  
    "Document Manual Book-DM6500": [
      { 
        code: "DM6500", 
        name: "Manual Book DM6500", 
        manu: "", 
        documents: [
          {
            doc: "Manual_DM6500.pdf",
            fileUrl: "/DM6500.pdf",
            desc: "Manual book untuk mesin DM6500",
            date: "2024-12-25",
            rev: "3.3"
          }
        ]
      }
    ],
  
    "Document Manual Book-DM6600": [
      { 
        code: "DM6600", 
        name: "Manual Book DM6600", 
        manu: "", 
        documents: [
          {
            doc: "Manual_DM6600.pdf",
            fileUrl: "/DM6600.pdf",
            desc: "Manual book untuk mesin DM6600",
            date: "2024-12-30",
            rev: "3.4"
          }
        ]
      }
    ],
  
    "Bisnis Proses-Maint. Engineering & Development": [
      { 
        code: "Maint. Engineering & Development", 
        name: "Business Process Engineering & Development", 
        manu: "", 
        documents: [
          {
            doc: "Engineering_Dev.pdf",
            fileUrl: "/Engineering_Dev.pdf",
            desc: "Dokumen proses rekayasa dan pengembangan",
            date: "2025-01-10",
            rev: "1.0"
          }
        ]
      }
    ],
  
    "Bisnis Proses-Maint. Planning & Control": [
      { 
        code: "Maint. Planning & Control", 
        name: "Business Process Planning & Control", 
        manu: "", 
        documents: [
          {
            doc: "Planning_Control.pdf",
            fileUrl: "/Planning_Control.pdf",
            desc: "Dokumen perencanaan dan pengendalian",
            date: "2025-01-15",
            rev: "1.1"
          }
        ]
      }
    ],
  
    "Bisnis Proses-Maint. Service & Repair Machine": [
      { 
        code: "Maint. Service & Repair Machine", 
        name: "Business Process Service & Repair Machine", 
        manu: "", 
        documents: [
          {
            doc: "Service_Repair.pdf",
            fileUrl: "/Service_Repair.pdf",
            desc: "Dokumen servis dan perbaikan mesin",
            date: "2025-01-20",
            rev: "1.2"
          }
        ]
      }
    ],
  
    "Bisnis Proses-Metal Forming, Quality, Tooling": [
      { 
        code: "Metal Forming, Quality, Tooling", 
        name: "Business Process Metal Forming, Quality, and Tooling", 
        manu: "", 
        documents: [
          {
            doc: "Metal_Forming.pdf",
            fileUrl: "/Metal_Forming.pdf",
            desc: "Dokumen proses pembentukan logam dan kualitas",
            date: "2025-01-25",
            rev: "1.3"
          }
        ]
      }
    ]
  };
  

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleButtonClick = (buttonKey) => {
    if (selectedButton === buttonKey) return; // Jika tombol yang sama diklik, tidak perlu update ulang
    setSelectedButton(buttonKey);
    setShowProfile(false); // Pastikan Profile tertutup
    setIsSidebarOpen(false); // Tutup sidebar setelah klik

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
