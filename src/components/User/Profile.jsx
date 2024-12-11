import React from "react";
import { Link } from "react-router-dom"; // Gunakan NavLink jika ingin menggunakan routing
import { FaUserAlt } from "react-icons/fa";

const Profile = ({ onBack }) => {
  return (
    <div className="mt-[20%] lg:mt-[8%] lg:ml-[3%] lg:w-[77%] p-4">
          <button
            onClick={onBack}
            className="text-blue-500 hover:text-blue-700"
          >
            &lt; Back
          </button>
          <h2 className="text-xl font-semibold text-gray-700">User Profile</h2>
        <div className="flex items-center space-x-4 mb-6">
          <FaUserAlt className="text-5xl text-blue-500" />
          <div>
            <h3 className="font-semibold text-lg">John Doe</h3>
            <p className="text-sm text-gray-500">User</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Email</span>
            <span className="text-sm text-gray-700">johndoe@example.com</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Phone</span>
            <span className="text-sm text-gray-700">+1234567890</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">Address</span>
            <span className="text-sm text-gray-700">123 Main St, City</span>
          </div>
        </div>
    </div>
  );
};

export default Profile;
