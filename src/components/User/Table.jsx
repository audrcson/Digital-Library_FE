import React, { useState } from "react";
import DetailTable from "./DetailTable"

const Table = ({ data = [], title }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [filterSearch, setFilterSearch] = useState("");

  const handleFilterSearchChange = (event) => {
    setFilterSearch(event.target.value);
  };

  const handleFilterChange = (group) => {
    setSelectedManufacturer(group);
    setIsDropdownOpen(false);
  };

  // Fungsi ketika group diklik
  const handleRowClick = (group) => {
    setSelectedGroup(group);
  };

  const handleBack = () => {
    setSelectedGroup(null);
  };

  const filteredData = data.filter((row) => {
    return selectedManufacturer === "" || row.group === selectedManufacturer;
  });

  const uniqueManufacturers = [...new Set(data.map((row) => row.group || "Unknown"))];

  if (selectedGroup) {
    return <DetailTable group={selectedGroup} onBack={handleBack} />;
  }

  return (
    <>
      <div className="flex justify-between items-center pb-3">
        <h2 className="text-xl font-semibold">{title}</h2>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="border rounded px-2 py-1 text-sm"
          >
            Filter & Search
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg p-2">
              <input
                type="text"
                placeholder="Search Group"
                value={filterSearch}
                onChange={handleFilterSearchChange}
                className="border rounded px-2 py-1 text-sm w-full mb-2"
              />

              <div className="max-h-40 overflow-y-auto border rounded">
                {uniqueManufacturers
                  .filter((group) => String(group).toLowerCase().includes(filterSearch.toLowerCase()))
                  .map((group) => (
                    <div
                      key={group}
                      onClick={() => handleFilterChange(group)}
                      className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                    >
                      {group}
                    </div>
                  ))}
                <div
                  onClick={() => handleFilterChange("")}
                  className="px-2 py-1 hover:bg-gray-200 cursor-pointer"
                >
                  All Group
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="overflow-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white rounded-lg border border-gray-200 table-fixed">
          <thead>
            <tr>
              <th className="px-4 py-2 border w-1/4">Group</th>
              <th className="px-4 py-2 border w-1/4">Bidang</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr key={index}>
                  <td
                    className="px-4 py-2 border text-center break-words text-blue-500 cursor-pointer hover:underline"
                    onClick={() => handleRowClick(row.group)}
                  >
                    {row.group || "Unknown"}
                  </td>
                  <td className="px-4 py-2 border text-center break-words">
                    {row.area || "Unknown"}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 border text-center" colSpan="2">
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;