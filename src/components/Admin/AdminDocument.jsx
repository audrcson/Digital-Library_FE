import React, { useState } from "react";
import { FaPlus, FaTrash, FaSearch, FaEye, FaEdit } from "react-icons/fa";
import { LuArrowUpDown } from "react-icons/lu";
import AddNewDocument from "./AddNewDocument";
import ViewDocument from "./ViewDocument";
import EditDocument from "./EditDocument";

const AdminDocument = () => {
  const [data, setData] = useState([
    {
      id: 1,
      document: "Document 1",
      category: "Document Procedur",
      description: "Description 1",
      issueDate: "2024-01-01",
      revision: "v1.0",
      status: "Available",
    },
    {
      id: 2,
      document: "Document 2",
      category: "Document Procedur",
      description: "Description 2",
      issueDate: "2024-02-01",
      revision: "v1.1",
      status: "Borrowed",
      borrowedby: "Jenni",
    },
    {
      id: 3,
      document: "Document 3",
      category: "Document Procedur",
      description: "Description 3",
      issueDate: "2024-03-01",
      revision: "v2.0",
      status: "Available",
    },
    {
      id: 4,
      document: "Document 3",
      category: "Document Procedur",
      description: "Description 3",
      issueDate: "2024-03-01",
      revision: "v2.0",
      status: "Available",
    },
    {
      id: 5,
      document: "Document 3",
      category: "Document Procedur",
      description: "Description 3",
      issueDate: "2024-03-01",
      revision: "v2.0",
      status: "Available",
    },
    {
      id: 6,
      document: "Document 3",
      category: "Document Procedur",
      description: "Description 3",
      issueDate: "2024-03-01",
      revision: "v2.0",
      status: "Available",
    },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setCheckedItems(data.map((item) => item.id));
    } else {
      setCheckedItems([]);
    }
  };

  const handleDeleteDocuments = () => {
    const updatedData = data.filter((item) => !checkedItems.includes(item.id));
    setData(updatedData);
    setCheckedItems([]);
    setSelectAll(false);
  };

  const filteredData =
  statusFilter === "all" || statusFilter === ""
    ? data // Tampilkan semua data
    : data.filter((item) => item.status === statusFilter);


  const handleCheckboxChange = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleViewClick = (document) => {
    setSelectedDocument(document);
    setShowViewModal(true);
  };

  const handleEditClick = (document) => {
    setSelectedDocument(document);
    setShowEditModal(true);
  };

 
  return (
    <div className="overflow-auto px-5">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-3xl source-sans-3-semibold text-gray-800">Documents</h1>
      </div>

      <div className="flex justify-between mb-4">
        <button
          className="px-4 py-2 bg-[rgb(94,150,214)] text-white source-sans-3-regular rounded-md flex items-center transition-transform duration-200 active:scale-95 hover:opacity-90"
          onClick={() => setShowAddForm(true)}
        >
          <FaPlus className="mr-2" />
          Add New Document
        </button>
        <button
          className={`px-4 py-2 rounded source-sans-3-regular ${
            checkedItems.length ? "bg-red-500" : "bg-gray-500"
          } text-white flex items-center`}
          disabled={!checkedItems.length}
          onClick={handleDeleteDocuments}
        >
          <FaTrash className="mr-2" />
          Delete Selected
        </button>
      </div>

      <div className="flex mb-6 justify-between">
        <div className="relative w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="pl-10 px-4 py-2 source-sans-3-regular border border-gray-300 rounded-lg w-full focus:outline-none"
            placeholder="Search by document name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="relative w-1/3 lg:w-1/5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LuArrowUpDown className="text-gray-400 scale-120" />
          </div>
          <select
            className="px-10 py-2 source-sans-3-regular text-gray-400 border border-gray-300 rounded-lg w-full appearance-none focus:outline-none cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {statusFilter === "" && (
              <option value="" disabled hidden>
                Sort by
              </option>
            )}
            <option value="all">All Status</option>
            <option value="Available">Available</option>
            <option value="Borrowed">Borrowed</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <table 
          className="min-w-full rounded-3xl border border-gray-200 table-fixed">
            <thead>
              <tr>
                <th className="w-20 px-4 py-2 bg-[#70A8E9] border sticky top-0 left-0 rounded whitespace-nowrap">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </th>
                <th className="w-44 px-4 py-2 bg-[#70A8E9] source-sans-3-semibold border sticky top-0 left-10 whitespace-nowrap">
                  Document Name
                </th>
                <th className="w-40 px-4 py-2 bg-[#70A8E9] source-sans-3-semibold whitespace-nowrap">Category</th>
                <th className="w-40 px-4 py-2 bg-[#70A8E9] source-sans-3-semibold whitespace-nowrap">Description</th>
                <th className="w-40 px-4 py-2 bg-[#70A8E9] source-sans-3-semibold whitespace-nowrap">Issue Date</th>
                <th className="w-40 px-4 py-2 bg-[#70A8E9] source-sans-3-semibold whitespace-nowrap">Revision</th>
                <th className="w-40 px-4 py-2 bg-[#70A8E9] source-sans-3-semibold whitespace-nowrap">Status</th>
                <th className="w-40 px-4 py-2 bg-[#70A8E9] source-sans-3-semibold whitespace-nowrap">Borrowed By</th>
                <th className="w-40 px-4 py-2 bg-[#70A8E9] source-sans-3-semibold border sticky top-0 right-0  text-center whitespace-nowrap">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="w-20 px-4 py-2 border sticky top-0 left-0 bg-white border-r">
                    <input
                      type="checkbox"
                      className="w-4 h-4"
                      checked={checkedItems.includes(item.id)}
                      onChange={() => handleCheckboxChange(item.id)}
                    />
                  </td>
                  <td className="w-40 px-4 py-2 source-sans-3-regular border text-sm sticky top-0 left-10 bg-white border-r text-center">
                    {item.document}
                  </td>
                  <td className="w-40 px-4 py-2 source-sans-3-regular border text-sm text-center bg-white">{item.category}</td>
                  <td className="w-40 px-4 py-2 source-sans-3-regular border text-sm text-center bg-white">{item.description}</td>
                  <td className="w-40 px-4 py-2 source-sans-3-regular border text-sm text-center bg-white">{item.issueDate}</td>
                  <td className="w-40 px-4 py-2 source-sans-3-regular border text-sm text-center bg-white">{item.revision}</td>
                  <td className="w-40 px-4 py-2 source-sans-3-regular border text-sm text-center bg-white">
                    <span
                      className={`${
                        item.status === 'Available' ? 'text-green-500' : 'text-red-500'
                      } font-semibold`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td 
                    className="w-40 px-4 py-2 source-sans-3-regular text-sm text-center bg-white">
                      {item.status === 'Borrowed' ? item.borrowedby : '-'}
                  </td>
                  <td className="w-40 px-2 py-2 border sticky right-0 bg-white border-l text-center">
                    <div className="flex justify-around space-x-2 sm:space-x-4">
                      <button
                        className="text-white bg-gray-400 px-2 py-1 rounded hover:bg-blue-600"
                        onClick={() => handleViewClick(item)}
                      >
                        <FaEye />
                      </button>
                      <button
                        className="text-white bg-gray-400 px-2 py-1 rounded hover:bg-blue-600"
                        onClick={() => handleEditClick(item)}
                      >
                        <FaEdit />
                      </button>
                      <button className="text-white hover:bg-red-600 bg-gray-400 px-2 py-1 rounded">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>

      {showAddForm && <AddNewDocument onClose={() => setShowAddForm(false)} />}
      {showViewModal && (
        <ViewDocument
          document={selectedDocument}
          onClose={() => setShowViewModal(false)}
        />
      )}
      {showEditModal && (
        <EditDocument
          document={selectedDocument}
          onClose={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
};

export default AdminDocument;
