import React, { useState } from 'react';
import axios from "axios";

const AddNewUser = ({ onClose, onAddUser }) => {
  const [name, setName] = useState("");
  const [nik, setNik] =  useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("User");
  const [bidang, setBidang] = useState("");
  const [peminjaman, setpeminjaman] = useState("TIDAK");
  const [dokumen, setDokumen] = useState("");

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-xl p-4 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form >
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-2">NIK</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={nik}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter NIK"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={password}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={email}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-2">Role</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={role}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Role"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-2">Bidang</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={bidang}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Bidang"
            />
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-2">Peminjaman Dokumen Hard File</label>
            <select
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={peminjaman}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">YA</option>
              <option value="Inactive">TIDAK</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-2">Dokumen yang Dipinjam</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={dokumen}
              onChange={(e) => setName(e.target.value)}
              placeholder="Dokumen"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-gray-400 text-white rounded-md mr-2 hover:opacity-90"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:opacity-90"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
