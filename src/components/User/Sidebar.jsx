import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import Profile from "./Profile"; // Pastikan path sesuai
import LogoutModal from "./LogoutModal"; // Pastikan LogoutModal tersedia

const Sidebar = ({ isOpen, onClose, onButtonClick }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const items = [
    {
      title: "Document Procedure",
      buttons: ["MEM-DP-P602_4", "MEM-DP-W602_01", "MEM-DP-W602_02"],
    },
    {
      title: "Document Manual Book",
      buttons: ["DM6300", "DM6400", "DM6500", "DM6600"],
    },
    {
      title: "Bisnis Proses",
      buttons: ["Maint. Engineering & Development", "Maint. Planning & Control", "Maint. Service & Repair Machine", "Metal Forming, Quality, Tooling"],
    },
  ];

  const handleAccordionToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleButtonClick = (buttonLabel) => {
    onButtonClick(buttonLabel);
    onClose();
  };

  return (
    <>
      <div
        className={`fixed top-[12%] left-0 w-full lg:w-[23%] bg-[#1A2E3E] px-4 py-1 z-40 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out lg:translate-y-0 lg:translate-x-0 lg:top-[12%] lg:min-h-screen ${
          openIndex !== null ? "h-auto" : "h-[52%]"
        }`}
      >
        <div className="space-y-3 pt-6">
          {items.map((item, index) => (
            <div key={index} className="rounded bg-[rgba(66,112,165,0.96)] transition-all duration-300">
              <div
                className="source-sans-3-regular text-white px-4 py-2 cursor-pointer flex items-center justify-between"
                onClick={() => handleAccordionToggle(index)}
              >
                <span>{item.title}</span>
                {openIndex === index ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
                  {item.buttons.map((btnLabel, btnIndex) => (
                    <button
                      key={btnIndex}
                      className="w-full px-4 py-2 bg-[rgba(66,120,180,0.96)] text-white rounded source-sans-3-regular text-center transition-transform duration-200 active:scale-95 hover:opacity-90"
                      onClick={() => handleButtonClick(`${item.title}-${btnLabel}`)}
                    >
                      {btnLabel}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Profile untuk Mobile */}
        <div className="lg:hidden pt-10 mb-3 flex justify-center">
          <button
            className="w-full px-4 py-2 bg-[rgba(66,112,165,0.96)] text-white rounded source-sans-3-regular text-left transition-transform duration-200 active:scale-95 hover:opacity-90 flex items-center justify-start"
            onClick={() => setShowProfile(true)}
          >
            <FaUser className="mr-2" />
            <span>Profile</span>
          </button>
        </div>

        {/* Tombol Logout untuk Mobile */}
        <div className="lg:hidden flex justify-center">
          <button
            className="w-full px-4 py-2 bg-[rgba(66,112,165,0.96)] text-white rounded source-sans-3-regular text-left transition-transform duration-200 active:scale-95 hover:opacity-90 flex items-center justify-start"
            onClick={() => setIsLogoutModalOpen(true)}
          >
            <FaSignOutAlt className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Overlay untuk menutup sidebar di mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" onClick={onClose}></div>}
      {/* Modal Logout */}
      {isLogoutModalOpen && <LogoutModal onCancel={() => setIsLogoutModalOpen(false)} />}
      {showProfile && (
        <div className="fixed inset-0 bg-white p-4 z-50 overflow-auto mt-16">
          <Profile onBack={() => setShowProfile(false)} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
