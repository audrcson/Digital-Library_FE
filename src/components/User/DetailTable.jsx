import React from "react";

const DetailTable = ({ documentData, onClose }) => {
  if (!documentData || !documentData.documents || documentData.documents.length === 0) {
    return <p className="text-center text-red-500">No documents available</p>;
  }

  return (
    <div className="overflow-auto rounded-lg shadow-lg p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Document Details</h2>
        <button
          onClick={onClose}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Close
        </button>
      </div>
      <table className="min-w-full bg-white rounded-lg border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Document</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Issue Date</th>
            <th className="px-4 py-2 border">Revision</th>
          </tr>
        </thead>
        <tbody>
          {documentData.documents.map((doc, index) => (
            <tr key={index}>
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
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
