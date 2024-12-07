import React from "react";

const AdminDashboard = () => {
  const data = {
    user: 34,
    newDocumentAdd: 12,
    borrowedDocument: 6,
    availableDocument: 45,
  };

  return (
    <div className="overflow-auto rounded-lg shadow-lg">
      <div className="text-left mb-4">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <p className="text-sm text-gray-600">Home / Overview</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">User</h3>
          <p className="text-2xl font-bold text-blue-500 mt-2">{data.user}</p>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">New Document Add</h3>
          <p className="text-2xl font-bold text-blue-500 mt-2">{data.newDocumentAdd}</p>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">Borrowed Document</h3>
          <p className="text-2xl font-bold text-blue-500 mt-2">{data.borrowedDocument}</p>
        </div>

        <div className="bg-white shadow-lg p-4 rounded-md">
          <h3 className="text-lg font-semibold text-gray-700">Available Document</h3>
          <p className="text-2xl font-bold text-blue-500 mt-2">{data.availableDocument}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
