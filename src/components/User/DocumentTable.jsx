import React, { useState } from "react";

const DocumentTable = ({ code, documents, onBack }) => {
  return (
    <div>

      <h2 className="text-lg font-semibold mb-3">Documents for {code}</h2>

      <div className="overflow-auto rounded-lg shadow-lg">
        <table className="min-w-full bg-white rounded-lg border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-center">Document</th>
              <th className="px-4 py-2 border text-center">Description</th>
              <th className="px-4 py-2 border text-center">Date</th>
              <th className="px-4 py-2 border text-center">Revision</th>
            </tr>
          </thead>
          <tbody>
            {documents.length > 0 ? (
              documents.map((doc, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border text-center">
                <a
                  href={doc.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {doc.doc}
                </a>
              </td>
                  <td className="px-4 py-2 border text-center">{doc.desc}</td>
                  <td className="px-4 py-2 border text-center">{doc.date}</td>
                  <td className="px-4 py-2 border text-center">{doc.rev}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="px-4 py-2 border text-center">
                  No documents available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DocumentTable;
