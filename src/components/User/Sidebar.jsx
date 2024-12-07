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
      <div
        className={`fixed top-[12%] left-0 h-[88%] w-[45%] lg:w-[23%] bg-[#1A2E3E] px-4 py-1 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:top-0 lg:h-screen lg:translate-x-0 lg:block overflow-y-auto scrollbar-hide`}
      >
        {/* Logo at the top of the Sidebar */}
        <div className="justify-center hidden lg:flex">
          <img src="ptdi.png" alt="Logo" className="max-h-[70px] object-contain" />
        </div>

        {/* Sidebar Content */}
        <div className="space-y-3 pt-6">
          {items.map((item, index) => (
            <div key={index}>
              {/* Accordion header */}
              <div
                className="source-sans-3-regular text-white px-4 py-2 cursor-pointer bg-[#3a99ff] transition-colors duration-300 flex items-center justify-between"
                onClick={() => handleAccordionToggle(index)}
              >
                <span>{item.title}</span>
                {/* Conditional rendering of arrow */}
                {openIndex === index ? (
                  <IoIosArrowUp className="text-xl" />
                ) : (
                  <IoIosArrowDown className="text-xl" />
                )}
              </div>

              {/* Accordion content */}
              {openIndex === index && (
                <div className="space-y-2 px-4 bg-[#3a99ff] pt-2 pb-4">
                  {item.buttons.map((btnLabel, btnIndex) => (
                    <button
                      key={btnIndex}
                      className="w-full px-4 py-2 bg-[#fafafa] text-blue-800 rounded text-left hover:bg-blue-400 transition-colors duration-300"
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
