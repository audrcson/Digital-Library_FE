import React, { useState } from 'react';

const AddNewUser = ({ onClose, onAddUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Active');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert('Please fill in all fields.');
      return;
    }

    const newUser = {
      id: Date.now(), // Generate a unique ID for the new user
      name,
      email,
      status,
    };

    onAddUser(newUser);
    onClose(); // Close the form after adding the user
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Status</label>
            <select
              className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
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
