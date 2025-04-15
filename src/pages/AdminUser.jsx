import React, { useEffect, useState } from "react";
import axios from "axios";
import UserTable from '../components/Admin Dashboard/UserTable';
import AddNewUser from '../components/Admin Dashboard/AddNewUser';
import Header from "../components/User/Header";
import AdminSidebar from '../components/Admin Dashboard/AdminSidebar';
import DocumentBoxData from "../components/Admin Dashboard/DocumentBoxData";
import { FaPlus, FaTrash, FaSearch } from 'react-icons/fa';
import { LuArrowUpDown } from 'react-icons/lu';

const AdminUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/users');
    setUser(response.data)
  }
  

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('');

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleProfileClick = () => {
    setActiveButton('Profile');
  };

  const handleButtonClick = (label) => {
    setActiveButton(label);
  };

  const [selectAll, setSelectAll] = useState(false);
  const [checkedUsers, setCheckedUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [showAddForm, setShowAddForm] = useState(false);

  // Fungsi untuk menangani penambahan user baru
  const handleAddUser = (newUser) => {
    setUser([...user, newUser]); // Tambahkan user baru ke daftar
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setCheckedUsers(user.map((user) => user.id));
    } else {
      setCheckedUsers([]);
    }
  };

  const handleDeleteUsers = () => {
    setUser(user.filter((user) => !checkedUsers.includes(user.id)));
    setCheckedUsers([]);
    setSelectAll(false);
  };

  const filteredUsers =
    statusFilter === 'all' || statusFilter === ''
      ? user
      : user.filter((user) => user.status === statusFilter);

  return (
    <div className="flex h-screen bg-[#fafafa]">
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>
      <div className="fixed w-[20%] h-screen top-[12%]">
        {/* Sidebar tetap muncul */}
        <AdminSidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onButtonClick={handleButtonClick}
        />
      </div>

      <div className="flex overflow-y-hidden">
        <div className="absolute mt-[5%] right-0 w-[80%]">
          <div className="h-screen mx-9">
            
            <div className="pt-5 text-gray-700 text-xl font-semibold">
              <h1>User Data</h1>
            </div>

            {/* Action Buttons */}
          <div className="flex justify-between mb-4">
            <button
              className="px-4 py-2 bg-blue-500 text-white source-sans-3-regular rounded-md flex items-center transition-transform duration-200 active:scale-95 hover:opacity-90"
              onClick={() => setShowAddForm(true)} // Buka form Add User
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
              <option value="all">All Users</option>
              </select>
            </div>
          </div>

          {/* User Table Section */}
          <UserTable
              userData={filteredUsers.filter(user => 
                user.name.toLowerCase().includes(search.toLowerCase())
              )}
              selectedGrouping="Name"
              selectedSorting=""
              selectedUsers={new Set(checkedUsers)}
              handleSelectUser={(userId) => {
                const updatedChecked = checkedUsers.includes(userId)
                  ? checkedUsers.filter(id => id !== userId)
                  : [...checkedUsers, userId];
                setCheckedUsers(updatedChecked);
              }}
              selectAll={selectAll}
              handleSelectAll={handleSelectAll}
              searchTerm={search}
            />

          {/* Render AddNewUser Form */}
          {showAddForm && (
            <AddNewUser
              onClose={() => setShowAddForm(false)} // Tutup form
              onAddUser={handleAddUser} // Tambah pengguna baru
            />
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUser;
