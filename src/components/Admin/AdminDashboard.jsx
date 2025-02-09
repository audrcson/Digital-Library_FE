import React, { useMemo } from "react";
import { FaUser, FaFileAlt, FaFileDownload, FaFileArchive } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const data = {
    user: 34,
    newDocumentAdd: 12,
    borrowedDocument: 6,
    availableDocument: 45,
  };

  // Dummy data for frequently read documents
  const popularDocuments = [
    { title: "Maintenance Guide 2024", reads: 120 },
    { title: "Machine Operation Handbook", reads: 95 },
    { title: "Safety Procedures", reads: 80 },
    { title: "Kraft Machine Blueprint", reads: 70 },
    { title: "Daily Maintenance Log", reads: 65 },
  ];

  // Chart Data using useMemo
  const chartData = useMemo(() => {
    return {
      labels: ["User", "New Docs", "Borrowed Docs", "Available Docs"],
      datasets: [
        {
          label: "Dashboard Statistics",
          data: [data.user, data.newDocumentAdd, data.borrowedDocument, data.availableDocument],
          backgroundColor: ["#3b82f6", "#10b981", "#f59e0b", "#ef4444"],
          borderRadius: 8,
        },
      ],
    };
  }, [data]);

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Document and User Statistics" },
    },
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="overflow-auto px-5 scrollbar-hide">
      {/* Header */}
      <div className="text-left mb-4">
        <h1 className="text-3xl source-sans-3-semibold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Welcome back, Admin! Here's a quick overview.</p>
      </div>

      {/* Statistic Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: "User", value: data.user, color: "text-blue-500", icon: <FaUser /> },
          { title: "New Documents", value: data.newDocumentAdd, color: "text-green-500", icon: <FaFileAlt /> },
          { title: "Borrowed Docs", value: data.borrowedDocument, color: "text-yellow-500", icon: <FaFileDownload /> },
          { title: "Available Docs", value: data.availableDocument, color: "text-red-500", icon: <FaFileArchive /> },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg p-4 rounded-lg flex items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className={`${item.color} text-4xl mr-3`}>{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
              <p className={`text-3xl font-bold ${item.color} mt-2`}>{item.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content - Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section: Frequently Read Documents */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Read Documents (Monthly)</h2>
          <ul>
            {popularDocuments.map((doc, index) => (
              <li
                key={index}
                className="flex justify-between items-center p-3 border-b last:border-b-0 hover:bg-gray-50 transition"
              >
                <span className="text-lg font-medium text-gray-700">{doc.title}</span>
                <span className="text-gray-500">{doc.reads} Reads</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section: Chart */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Statistics Overview</h2>
          <div style={{ height: "400px" }}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-gray-500">
        <p>© 2024 Jenni Febiyola Sari. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
