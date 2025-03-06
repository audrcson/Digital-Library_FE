import React, { useState } from "react";
import DetailTable from "./DetailTable";

const Table = ({ data }) => {
  const [selectedDocument, setSelectedDocument] = useState(null);

  const handleRowClick = (documentData) => {
    setSelectedDocument(documentData); 
  };

  return (
    <div className="overflow-auto rounded-lg shadow-lg">
      {selectedDocument ? (
        <DetailTable documentData={selectedDocument} onClose={() => setSelectedDocument(null)} />
      ) : (
        <table className="min-w-full bg-white rounded-lg border border-gray-200 table-fixed">
          <thead>
            <tr>
              <th className="px-4 py-2 border w-1/4">Codification</th>
              <th className="px-4 py-2 border w-1/4">Machine Name</th>
              <th className="px-4 py-2 border w-1/4">Manufacturer</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((row) => (
                <tr key={row.code}>
                  <td className="px-4 py-2 border text-center break-words">
                    <button
                      onClick={() => handleRowClick(row)}
                      className="text-blue-500 hover:underline"
                    >
                      {row.code}
                    </button>
                  </td>
                  <td className="px-4 py-2 border text-center break-words">{row.name}</td>
                  <td className="px-4 py-2 border text-center break-words">{row.manu}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 border text-center" colSpan="3">
                  Choose Document
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;
