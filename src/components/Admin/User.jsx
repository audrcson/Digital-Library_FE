import React, { useState } from 'react';
import { FaPlus, FaTrash, FaSearch } from 'react-icons/fa';
import { LuArrowUpDown } from 'react-icons/lu';

const User = () => {
  // State untuk mengelola daftar pengguna dan fitur terkait
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob.johnson@example.com', status: 'Active' },
  ]);

  const [selectAll, setSelectAll] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setCheckedUsers(users.map((user) => user.id));
    } else {
      setCheckedUsers([]);
    }
  };

  const handleDeleteUsers = () => {
    setUsers(users.filter((user) => !checkedUsers.includes(user.id)));
    setCheckedUsers([]);
    setSelectAll(false);
  };

  const filteredUsers =
    statusFilter === 'all' || statusFilter === ''
      ? users
      : users.filter((user) => user.status === statusFilter);

  return (
    <div className="overflow-auto px-5">
      {/* Header */}
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-3xl source-sans-3-semibold text-gray-800">User Management</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white source-sans-3-regular rounded-md flex items-center transition-transform duration-200 active:scale-95 hover:opacity-90"
          onClick={() => setShowAddForm(true)}
        >
          <FaPlus className="mr-2" />
          Add New User
        </button>
        <button
          className={`px-4 py-2 rounded source-sans-3-regular ${
            checkedUsers.length ? 'bg-red-500' : 'bg-gray-500'
          } text-white flex items-center`}
          disabled={!checkedUsers.length}
          onClick={handleDeleteUsers}
        >
          <FaTrash className="mr-2" />
          Delete Selected
        </button>
      </div>

      {/* Search & Filter Section */}
      <div className="flex mb-6 justify-between">
        {/* Search by Name */}
        <div className="relative w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            className="pl-10 px-4 py-2 source-sans-3-regular border border-gray-300 rounded-lg w-full focus:outline-none"
            placeholder="Search by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Status Dropdown Filter */}
        <div className="relative w-1/3 lg:w-1/5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <LuArrowUpDown className="text-gray-400 scale-120" />
          </div>
          <select
            className="px-10 py-2 source-sans-3-regular text-gray-400 border border-gray-300 rounded-lg w-full appearance-none focus:outline-none cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            {statusFilter === '' && (
              <option value="" disabled hidden>
                Filter by Status
              </option>
            )}
            <option value="all">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* User Table Section */}
      <div className="overflow-auto border shadow-md p-4">
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="px-3 py-2">Select</th>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers
              .filter((user) =>
                user.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-100">
                  <td className="px-3 py-2">
                    <input
                      type="checkbox"
                      checked={checkedUsers.includes(user.id)}
                      onChange={(e) => {
                        const updatedChecked = e.target.checked
                          ? [...checkedUsers, user.id]
                          : checkedUsers.filter((id) => id !== user.id);
                        setCheckedUsers(updatedChecked);
                      }}
                    />
                  </td>
                  <td className="px-3 py-2">{user.name}</td>
                  <td className="px-3 py-2">{user.email}</td>
                  <td className="px-3 py-2">{user.status}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
