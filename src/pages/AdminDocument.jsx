import React, { useEffect, useState, useCallback } from "react";
import Header from "../components/User/Header";
import DocumentBoxData from "../components/Admin Dashboard/DocumentBoxData";
import AdminSidebar from "../components/Admin Dashboard/AdminSidebar";
import AddNewDocument from "../components/Admin Dashboard/AddNewDocument";
import AdminDocTable from "../components/Admin Dashboard/AdminDocTable";
import { FaPlus, FaTrash, FaList } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const AdminDocument = () => {
  const [documentData, setDocumentData] = useState([
    {
      id: 1,
      file_url: "/10-DP-W602_01.pdf",
      document_name: "Document 1",
      document_type: "Document Procedur",
      group: "ABC",
      bidang: "EFG",
      codification: "123",
      machine_name: "HIJ",
      manufacturer: "KLM",
      description: "asdfghjkl",
      issue_date: "2024-01-01",
      revision: "v1.0",
      document_status: "Active",
      borrowed_by: "asdf",
      rak_hardfile: "cvb",
    },
    {
      id: 2,
      document_name: "Document 2",
      document_type: "Document Procedur",
      group: "ABC",
      bidang: "EFG",
      codification: "123",
      machine_name: "HIJ",
      manufacturer: "KLM",
      description: "asdfghjkl",
      issue_date: "2024-01-01",
      revision: "v1.0",
      document_status: "Active",
      borrowed_by: "asdf",
      rak_hardfile: "cvb",
    },
    {
      id: 3,
      document_name: "Document 3",
      document_type: "Document Procedur",
      group: "ABC",
      bidang: "EFG",
      codification: "123",
      machine_name: "HIJ",
      manufacturer: "KLM",
      description: "asdfghjkl",
      issue_date: "2024-01-01",
      revision: "v1.0",
      document_status: "Active",
      borrowed_by: "asdf",
      rak_hardfile: "cvb",
    },
    {
      id: 4,
      document_name: "Document 4",
      document_type: "Document Procedur",
      group: "EFG",
      bidang: "EFG",
      codification: "123",
      machine_name: "HIJ",
      manufacturer: "KLM",
      description: "asdfghjkl",
      issue_date: "2024-01-01",
      revision: "v1.0",
      document_status: "Active",
      borrowed_by: "asdf",
      rak_hardfile: "cvb",
    },
    {
      id: 5,
      document_name: "Document 5",
      document_type: "Document Procedur",
      group: "ABC",
      bidang: "EFG",
      codification: "123",
      machine_name: "HIJ",
      manufacturer: "KLM",
      description: "asdfghjkl",
      issue_date: "2024-01-01",
      revision: "v1.0",
      document_status: "Active",
      borrowed_by: "asdf",
      rak_hardfile: "cvb",
    },
    {
      id: 6,
      document_name: "Document 6",
      document_type: "Document Procedur",
      group: "ABC",
      bidang: "EFG",
      codification: "123",
      machine_name: "HIJ",
      manufacturer: "KLM",
      description: "asdfghjkl",
      issue_date: "2024-01-01",
      revision: "v1.0",
      document_status: "Active",
      borrowed_by: "asdf",
      rak_hardfile: "cvb",
    },
    {
      id: 7,
      document_name: "Document 7",
      document_type: "Document Procedur",
      group: "ABC",
      bidang: "EFG",
      codification: "123",
      machine_name: "HIJ",
      manufacturer: "KLM",
      description: "asdfghjkl",
      issue_date: "2024-01-01",
      revision: "v1.0",
      document_status: "Active",
      borrowed_by: "asdf",
      rak_hardfile: "cvb",
    },
  ]);

  const [isAddDocument, setIsAddDocument] = useState(false);
  const [index, setIndex] = useState();
  const [selectAll, setSelectAll] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState(new Set());

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const openAddDocument = () => setIsAddDocument(true);
  const handleCancel = () => setIsAddDocument(false);
  const handleSave = () => setIsAddDocument(false);

  const [selectedSorting, setSelectedSorting] = useState("Sort by");
  const [selectedGrouping, setSelectedGrouping] = useState("Group by");
  const [isSortingDropdownOpen, setIsSortingDropdownOpen] = useState(false);
  const [isGroupingDropdownOpen, setIsGroupingDropdownOpen] = useState(false);

  const handlePageChange = (direction) => {
    if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const groupingOptions = [
    "Document Name",
    "Document Type",
    "Group",
    "Bidang",
    "Machine Name",
    "Status",
    "Rak HardFile",
  ];

  const sortingOptions = ["Ascending", "Descending"];

  const handleGrouping = (option) => {
    setSelectedGrouping(option);
    setIsGroupingDropdownOpen(false);
  };

  const handleSort = (option) => {
    setSelectedSorting(option);
    setIsSortingDropdownOpen(false);
  };

  // === PAGINATION LOGIC ===
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDocuments = documentData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(documentData.length / itemsPerPage);

  const handleSelectAll = () => {
    setSelectAll((prev) => !prev);
    if (!selectAll) {
      setSelectedDocuments(new Set(documentData.map((doc) => doc.id)));
    } else {
      setSelectedDocuments(new Set());
    }
  };

  const handleSelectDocument = (id) => {
    setSelectedDocuments((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };



  return (
    <div className="flex h-screen bg-[#fafafa]">
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>

      <div className="fixed w-[20%] h-screen top-[12%]">
        <AdminSidebar />
      </div>

      <div className="flex overflow-y-hidden">
        <div className="absolute mt-[5%] right-0 w-[80%]">
          <div className="h-screen mx-9">
            <DocumentBoxData documentData={documentData} />
            <div className="pt-5 text-gray-700 text-xl font-semibold">
              <h1>Document Data</h1>
            </div>

            <div className="flex items-center pt-8">
              <div>
                <h1 className="text-sm text-gray-500 pb-3">Add New Document</h1>
                <button
                  className="px-4 h-10 text-sm rounded-lg bg-green-500 text-white flex items-center space-x-2"
                  onClick={openAddDocument}
                >
                  <FaPlus />
                  <p>Add New Document</p>
                </button>
              </div>
              <div className="ml-auto">
                <h1 className="text-sm text-gray-500 pb-3">Delete Document</h1>
                <button
                  className="h-10 text-sm w-40 rounded-lg"
                  style={{
                    backgroundColor: selectedDocuments.size >= 2 ? "red" : "grey",
                    color: "white",
                  }}
                  disabled={selectedDocuments.size < 2}
                  onClick={() => {
                    if (selectedDocuments.size >= 2) {
                      const newData = documentData.filter(
                        (doc) => !selectedDocuments.has(doc.id)
                      );
                      setDocumentData(newData);
                      setSelectedDocuments(new Set());
                    }
                  }}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <FaTrash />
                    <p>Delete</p>
                  </div>
                </button>
              </div>
            </div>

            <div className="flex items-center w-full pt-5">
              <div className="flex flex-grow mr-4">
                <label className="input input-bordered flex items-center w-full">
                  <img className="h-5 opacity-90 mr-3" src="/SearchIcon.svg" alt="" />
                  <input
                    type="text"
                    className="grow text-sm text-gray-500 w-full"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </label>
              </div>

              <div className="flex flex-shrink-0 space-x-4">
                <div className="relative">
                  <button
                    onClick={() => setIsGroupingDropdownOpen(!isGroupingDropdownOpen)}
                    className="h-11 text-sm rounded-lg w-48 text-black border flex items-center justify-center"
                  >
                    <FaList className="mr-2" />
                    {selectedGrouping}
                  </button>
                  {isGroupingDropdownOpen && (
                    <ul className="absolute shadow menu z-[1] bg-white rounded-box w-full text-gray-500">
                      {groupingOptions.map((option) => (
                        <li key={option}>
                          <div
                            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                            onClick={() => handleGrouping(option)}
                          >
                            {option}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="relative">
                  <button
                    onClick={() => setIsSortingDropdownOpen(!isSortingDropdownOpen)}
                    className="h-11 text-sm rounded-lg w-40 text-black border flex items-center justify-center"
                  >
                    <LuArrowUpDown className="mr-2" />
                    {selectedSorting}
                  </button>
                  {isSortingDropdownOpen && (
                    <ul className="absolute shadow menu z-[1] bg-white rounded-box w-full text-gray-500">
                      {sortingOptions.map((option, index) => (
                        <li key={index}>
                          <button
                            type="button"
                            className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100 w-full text-left"
                            onClick={() => handleSort(option)}
                          >
                            {option}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            {/* TABLE */}
            <AdminDocTable 
  documentData={currentDocuments}
  selectedDocuments={selectedDocuments}
  handleSelectDocument={handleSelectDocument}
  selectAll={selectAll}
  handleSelectAll={handleSelectAll}
  selectedSorting={selectedSorting}
  selectedGrouping={selectedGrouping}
  searchTerm={searchTerm}
/>


            {/* PAGINATION */}
            <div className="flex justify-center items-center space-x-4 pt-6 pb-6">
              <button
                onClick={() => handlePageChange("prev")}
                disabled={currentPage === 1}
                className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50 z-10"
              >
                <MdKeyboardArrowLeft className="inline" /> Prev
              </button>
              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange("next")}
                disabled={currentPage === totalPages}
                className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50 z-10"
              >
                Next <MdKeyboardArrowRight className="inline" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {isAddDocument && (
        <AddNewDocument
          handleCancel={handleCancel}
          setIndex={setIndex}
        />
      )}
    </div>
  );
};

export default AdminDocument;