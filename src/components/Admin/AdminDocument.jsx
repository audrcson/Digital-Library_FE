import React, { useState } from 'react';
import { FaPlus, FaTrash, FaSearch, FaEdit, FaEye } from 'react-icons/fa';
import { LuArrowUpDown } from "react-icons/lu";
import AddNewDocument from './AddNewDocument';

const AdminDocument = () => {
  const [selectAll, setSelectAll] = useState(false); 
  const [checkedItems, setCheckedItems] = useState([]); 
  const [search, setSearch] = useState(''); 
  const [statusFilter, setStatusFilter] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  const data = [
    { id: 1, document: "Document 1", category: "Document Procedur", description: 'Description 1', issueDate: '2024-01-01', revision: 'v1.0', status: 'Available' },
    { id: 2, document: "Document 2", category: "Document Procedur", description: 'Description 2', issueDate: '2024-02-01', revision: 'v1.1', status: 'Borrowed' },
    { id: 3, document: "Document 3", category: "Document Procedur", description: 'Description 3', issueDate: '2024-03-01', revision: 'v2.0', status: 'Available' },
  ];

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setCheckedItems(data.map((item) => item.id));
    } else {
      setCheckedItems([]);
    }
  };

  const handleCheckboxChange = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id)); 
    } else {
      setCheckedItems([...checkedItems, id]); 
    }
  };

  const filteredData = data.filter((item) => {
    const searchMatch = item.document.toLowerCase().includes(search.toLowerCase());
    const statusMatch = statusFilter ? item.status === statusFilter : true;
    return searchMatch && statusMatch;
  });

  return (
    <div className="overflow-auto rounded-lg px-5">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-3xl source-sans-3-semibold text-gray-800">Documents</h1>
      </div>

      <div className="flex justify-between mb-4">
        <button
          className="px-4 py-2 bg-[#3a99ff] text-white source-sans-3-regular rounded"
          onClick={() => setShowAddForm(true)}
        >
          <FaPlus className="inline mr-2" />
          Add New Document
        </button>
        <button
          className={`px-4 py-2 rounded ${selectAll ? 'bg-red-500' : 'bg-gray-500'} text-white hover:bg-red-600`}
          disabled={!selectAll}
        >
          <FaTrash className="inline mr-2" />
          Delete
        </button>
      </div>

      <div className="flex mb-4 justify-between">
        <div className="relative w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="pl-10 px-4 py-2 border border-gray-300 rounded-lg w-full"
            placeholder="Search by document name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
        className="px-4 py-2 border border-gray-300 rounded-lg w-1/4"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="" disabled selected hidden>
            <LuArrowUpDown />
            Sort by
          </option>
          <option value="">All Status</option>
          <option value="Available">Available</option>
          <option value="Borrowed">Borrowed</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th className="px-4 py-2 border">Document Name</th>
              <th className="px-4 py-2 border">Category</th>
              <th className="px-4 py-2 border">Description</th>
              <th className="px-4 py-2 border">Issue Date</th>
              <th className="px-4 py-2 border">Revision</th>
              <th className="px-4 py-2 border">Status</th>
              <th className="px-4 py-2 border sticky top-0 right-0 bg-white w-1/6 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2 border">
                  <input
                    type="checkbox"
                    className="w-4 h-4"
                    checked={checkedItems.includes(item.id)}
                    onChange={() => handleCheckboxChange(item.id)}
                  />
                </td>
                <td className="px-4 py-2 border">{item.document}</td>
                <td className="px-4 py-2 border">{item.category}</td>
                <td className="px-4 py-2 border">{item.description}</td>
                <td className="px-4 py-2 border">{item.issueDate}</td>
                <td className="px-4 py-2 border">{item.revision}</td>
                <td className="px-4 py-2 border">
                  <span
                    className={`${
                      item.status === 'Available' ? 'text-green-500' : 'text-red-500'
                    } font-semibold`}
                    >
                    {item.status}
                  </span>
                </td>
                <td className="px-2 py-2 border sticky right-0 bg-white">
                  <div className="flex justify-around space-x-2 sm:space-x-4">
                    <button className="text-white hover:text-blue-600 bg-gray-400 px-2 py-1 rounded">
                      <FaEye />
                    </button>
                    <button className="text-white hover:text-blue-600 bg-gray-400 px-2 py-1 rounded">
                      <FaEdit />
                    </button>
                    <button className="text-white hover:text-blue-600 bg-gray-400 px-2 py-1 rounded">
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
    </div>
  );
};

export default AdminDocument;
