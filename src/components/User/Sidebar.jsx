import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdAdminPanelSettings } from "react-icons/md";

const Sidebar = ({ isOpen, onClose, onButtonClick }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Document Procedure",
      buttons: ["MEM-DP-P602_4", "MEM-DP-W602_01", "MEM-DP-W602_02"],
    },
    {
      title: "Document Manual Book",
      buttons: ["MEM-MB-MAC", "MEM-MB-MFT", "MEM-MB-BCT", "MEM-MB-SFT", "MEM-MB-UTL", "MEM-MB-GEN"],
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
        className={`fixed top-[12%] left-0 h-[80%] w-full lg:w-[23%] bg-[#1A2E3E] px-4 py-1 z-40 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out lg:translate-y-0 lg:translate-x-0 lg:top-[12%] lg:h-screen lg:block`}
      >
        {/* Sidebar Content */}
        <div className="space-y-3 pt-6">
          {items.map((item, index) => (
            <div key={index}>
              {/* Accordion header */}
              <div
                className={`source-sans-3-regular text-white px-4 py-2 cursor-pointer ${
                  openIndex === index
                    ? "bg-[rgba(66,112,165,0.96)] rounded-t"
                    : "bg-[rgba(66,112,165,0.96)] rounded hover:bg-blue-500"
                } transition-colors duration-300 flex items-center justify-between`}
                onClick={() => handleAccordionToggle(index)}
              >
                <span>{item.title}</span>
                {openIndex === index ? (
                  <IoIosArrowUp className="text-xl" />
                ) : (
                  <IoIosArrowDown className="text-xl" />
                )}
              </div>

              {/* Accordion content */}
              {openIndex === index && (
                <div className="space-y-2 px-4 bg-[rgba(66,112,165,0.96)] pt-2 pb-4">
                {item.buttons.map((btnLabel, btnIndex) => (
                  <button
                    key={btnIndex}
                    className="w-full px-4 py-2 bg-[#fafafa] text-blue-800 rounded source-sans-3-regular text-center transition-transform duration-200 active:scale-95 hover:opacity-90"
                    onClick={() => handleButtonClick(`${item.title}-${btnLabel}`)}
                  >
                    {btnLabel}
                  </button>
                ))}
              </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" onClick={onClose}></div>
      )}
    </>
  );
};

export default Sidebar;
