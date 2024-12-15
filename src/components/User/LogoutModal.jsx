import React from "react";
import { FaSignOutAlt, FaTimes } from "react-icons/fa";

const LogoutModal = ({ onCancel, onLogout }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80 relative">
        {/* Icon Header */}
        <div className="mb-4 flex items-center justify-center">
          <FaSignOutAlt className="text-red-500 text-4xl" />
        </div>
        {/* Pesan Konfirmasi */}
        <p className="mb-6 text-gray-800 text-lg font-semibold">
          Are you sure you want to logout?
        </p>
        {/* Tombol Aksi */}
        <div className="flex justify-center space-x-4">
          <button
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-all"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
        {/* Tombol Close (Opsional) */}
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onCancel}
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;
