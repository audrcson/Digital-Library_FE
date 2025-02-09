import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
      {/* Sidebar Container */}
      <div
        className={`fixed top-[12%] left-0 w-full lg:w-[23%] bg-[#1A2E3E] px-4 py-1 z-40 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out lg:translate-y-0 lg:translate-x-0 lg:top-[12%] lg:min-h-screen ${
          openIndex !== null ? "h-auto" : "h-[33%]"
        } pb-6`}
      >
        {/* Sidebar Content */}
        <div className="space-y-3 pt-6">
          {items.map((item, index) => (
            <div key={index} className="rounded bg-[rgba(66,112,165,0.96)] transition-all duration-300 mb-4">
              {/* Accordion Header */}
              <div
                className="source-sans-3-regular text-white px-4 py-2 cursor-pointer flex items-center justify-between"
                onClick={() => handleAccordionToggle(index)}
              >
                <span>{item.title}</span>
                {openIndex === index ? <IoIosArrowUp className="text-xl" /> : <IoIosArrowDown className="text-xl" />}
              </div>

              {/* Accordion Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-[500px] opacity-100 py-2" : "max-h-0 opacity-0"
                }`}
              >
                <div className="space-y-2 px-4 pb-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for Mobile */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden" onClick={onClose}></div>}
    </>
  );
};

export default Sidebar;
