import React from "react";
import { FaUserAlt, FaBuilding, FaIdCard } from "react-icons/fa";

const Profile = ({ onBack }) => {
  return (
    <div className="lg:ml-[3%] lg:w-[77%] p-6 bg-white shadow-md rounded-md">
      {/* Tombol Back */}
      <button
        onClick={onBack}
        className="text-blue-500 hover:text-blue-700 mb-6 flex items-center"
      >
        &lt; Back
      </button>

      {/* Header Profil */}
      <div className="flex items-center space-x-4 mb-8">
        <FaUserAlt className="text-6xl text-blue-500" />
        <div>
          <h2 className="text-2xl font-bold text-gray-700">John Doe</h2>
          <p className="text-sm text-gray-500">Maintenance Team</p>
        </div>
      </div>

      {/* Informasi Profil */}
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <FaIdCard className="text-gray-500" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">NIK</span>
            <span className="text-base font-medium text-gray-800">123456789</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FaBuilding className="text-gray-500" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">Department</span>
            <span className="text-base font-medium text-gray-800">Kraft Maintenance</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FaUserAlt className="text-gray-500" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">Position</span>
            <span className="text-base font-medium text-gray-800">Technician</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FaUserAlt className="text-gray-500" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">Email</span>
            <span className="text-base font-medium text-gray-800">johndoe@example.com</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FaUserAlt className="text-gray-500" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-600">Phone</span>
            <span className="text-base font-medium text-gray-800">+1234567890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
