import React, { useState } from "react";
import { FaUserAlt, FaBuilding, FaIdCard, FaEnvelope, FaPhone } from "react-icons/fa";

const Profile = ({ onBack }) => {
  // State untuk data profil
  const [profile, setProfile] = useState({
    name: "John Doe",
    team: "Maintenance Team",
    nik: "123456789",
    department: "Kraft Maintenance",
    position: "Technician",
    email: "johndoe@example.com",
    phone: "+1234567890",
  });

  const [isEditing, setIsEditing] = useState(false); // Mode tampilan atau edit

  // Handle perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Simpan perubahan
  const handleSave = () => {
    setIsEditing(false);
    // Logic simpan ke server jika diperlukan
    console.log("Profil disimpan:", profile);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
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
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="text-2xl font-bold text-gray-700 border border-gray-300 rounded-md p-1"
            />
          ) : (
            <h2 className="text-2xl font-bold text-gray-700">{profile.name}</h2>
          )}
          <p className="text-sm text-gray-500">{profile.team}</p>
        </div>
      </div>

      {/* Informasi Profil */}
      <div className="space-y-6">
        {[
          { label: "NIK", name: "nik", value: profile.nik, icon: <FaIdCard /> },
          { label: "Position", name: "position", value: profile.position, icon: <FaUserAlt /> },
          
          { label: "Department", name: "department", value: profile.department, icon: <FaBuilding /> },
          { label: "Email", name: "email", value: profile.email, icon: <FaEnvelope /> },
          { label: "Phone", name: "phone", value: profile.phone, icon: <FaPhone /> },
        ].map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            {item.icon}
            <div className="flex flex-col">
              <span className="text-sm text-gray-600">{item.label}</span>
              {isEditing ? (
                <input
                  type="text"
                  name={item.name}
                  value={item.value}
                  onChange={handleChange}
                  className="text-base font-medium text-gray-800 border border-gray-300 rounded-md p-1"
                />
              ) : (
                <span className="text-base font-medium text-gray-800">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Tombol Edit dan Simpan */}
      <div className="mt-6 flex justify-end space-x-4">
        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
