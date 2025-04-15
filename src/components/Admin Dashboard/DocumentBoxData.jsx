import React, { useState, useEffect} from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const DocumentBoxData = ({documentData}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState();

  const calculateCounts = (type) => {
    const totalCount = documentData.filter((document) => document.type === type).length;
    const groupCounts = documentData.reduce((counts, document) => {
      if (document.type === type) {
        const group = "Type Document " + document.group;
        counts[group] = (counts[group] || 0) + 1;
      }
      return counts;
    }, {});
    return { totalCount, groupCounts };
  };

  // Hitung semua jenis dokumen
  const docProcedureCounts = calculateCounts("Document Procedure");
  const manualBookCounts = calculateCounts("Document Manual Book");
  const businessProcessCounts = calculateCounts("Document Business Process");

  // Gabungkan semua data menjadi satu
  const totalDocumentCount =
    docProcedureCounts.totalCount +
    manualBookCounts.totalCount +
    businessProcessCounts.totalCount;

  // Objek untuk menghitung detail tiap tipe dokumen
  const procDocCounts = {
    "Total Document Procedure": docProcedureCounts.totalCount,
    ...docProcedureCounts.groupCounts,
  };

  const manualBookCountsDetails = {
    "Total Manual Book": manualBookCounts.totalCount,
    ...manualBookCounts.groupCounts,
  };

  const businessProcessCountsDetails = {
    "Total Business Process": businessProcessCounts.totalCount,
    ...businessProcessCounts.groupCounts,
  };

  // Untuk mendapatkan judul (keys) dari setiap tipe dokumen
const totDocTitles = [
  `Total Documents: ${totalDocumentCount}`,
  `Total Document Procedure: ${docProcedureCounts.totalCount}`,
  `Total Manual Book: ${manualBookCounts.totalCount}`,
  `Total Business Process: ${businessProcessCounts.totalCount}`,
];

  const procDocTitles = Object.keys(procDocCounts);
  const manualBookTitles = Object.keys(manualBookCountsDetails);
  const businessProcessTitles = Object.keys(businessProcessCountsDetails);

  console.log("Total Documents: ", totalDocumentCount);
  console.log("Procedure Document Counts: ", procDocCounts);
  console.log("Manual Book Counts: ", manualBookCountsDetails);
  console.log("Business Process Counts: ", businessProcessCountsDetails);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totDocTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [totDocTitles.length]);

  useEffect(() => {
    if (totDocTitles[currentIndex] === "Total Document") {
      setCurrentImage("");
    } else {
      setCurrentImage("");
    }
  }, [currentIndex, totDocTitles]);

  const fadeStyles = {
    entering: { opacity: 0, transform: "translateX(0px)" },
    entered: {
      opacity: 1,
      transform: "translateY(0px)",
      transition: "opacity 500ms, transform 500ms",
    },
    exiting: { opacity: 0, transform: "translateY(0px)" },
    exited: {
      opacity: 0,
      transform: "translateY(0px)",
      transition: "opacity 500ms, transform 500ms",
    },
  };

  return (
    <div id="BoxParent" className="mt-12 h-[25%] flex items-center space-x-10">
      <div 
        id="FirstBoxParent"
        className="relative border border-1.75 w-[25%] h-[95%] rounded-lg pt-4 px-4 flex flex-col justify-end"
      >
        <div className="absolute top-4 flex flex-col justify-center items-start">
          <TransitionGroup component={null}>
            <CSSTransition key={currentIndex} timeout={500} classNames="fade">
              {(state) => (
                <div className="" style={{ ... fadeStyles[state] }}>
                  <h1 className="source-sans-3-semibold sm:text-xs md:text-xs lg:text-xs xl:text-base">
                    {totDocTitles[currentIndex]}
                  </h1>
                </div>
              )}
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="flex items-center justify-between">
          <TransitionGroup component={null}>
            <CSSTransition key={currentIndex} timeout={500} classNames="fade">
              {(state) => (
                <h1
                  className="source-sans-3-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl"
                  style={{ ...fadeStyles[state] }}
                >
                  {procDocCounts[procDocTitles[currentIndex]]}
                  </h1>
              )}
            </CSSTransition>
          </TransitionGroup>
          <img src={currentImage} alt="" />
        </div>
      </div>

      {/* BOX 2 - Manual Book */}
      <div className="relative border border-1.75 w-[25%] h-[95%] rounded-lg pt-4 px-4 flex flex-col justify-end">
        <div className="absolute top-4 flex flex-col justify-center items-start">
          <TransitionGroup component={null}>
            <CSSTransition key={currentIndex} timeout={500} classNames="fade">
              {(state) => (
                <div style={{ ...fadeStyles[state] }}>
                  <h1 className="source-sans-3-semibold sm:text-xs md:text-xs lg:text-xs xl:text-base">
                    {manualBookTitles[currentIndex]}
                  </h1>
                </div>
              )}
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="flex items-center justify-between">
          <TransitionGroup component={null}>
            <CSSTransition key={currentIndex} timeout={500} classNames="fade">
              {(state) => (
                <h1
                  className="source-sans-3-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl"
                  style={{ ...fadeStyles[state] }}
                >
                  {manualBookCountsDetails[manualBookTitles[currentIndex]]}
                </h1>
              )}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>

      {/* BOX 3 - Manual Book */}
      <div className="relative border border-1.75 w-[25%] h-[95%] rounded-lg pt-4 px-4 flex flex-col justify-end">
        <div className="absolute top-4 flex flex-col justify-center items-start">
          <TransitionGroup component={null}>
            <CSSTransition key={currentIndex} timeout={500} classNames="fade">
              {(state) => (
                <div style={{ ...fadeStyles[state] }}>
                  <h1 className="source-sans-3-semibold sm:text-xs md:text-xs lg:text-xs xl:text-base">
                    {manualBookTitles[currentIndex]}
                  </h1>
                </div>
              )}
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className="flex items-center justify-between">
          <TransitionGroup component={null}>
            <CSSTransition key={currentIndex} timeout={500} classNames="fade">
              {(state) => (
                <h1
                  className="source-sans-3-semibold sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl"
                  style={{ ...fadeStyles[state] }}
                >
                  {manualBookCountsDetails[manualBookTitles[currentIndex]]}
                </h1>
              )}
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  )
}

export default DocumentBoxData;
