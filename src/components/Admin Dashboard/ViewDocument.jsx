import React from "react";

const ViewDocument = ({ isOpen, document, onClose }) => {
  if (!isOpen || !document) return null; // Cek jika modal harus ditampilkan

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl h-3/4 overflow-y-auto"    >
        <h2 className="text-xl font-semibold mb-4">View Document</h2>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Document Name:</strong> {document.document_name}
          </p>
          <p>
            <strong>Type:</strong> {document.document_type}
          </p>
          <p>
            <strong>Group:</strong> {document.group}
          </p>
          <p>
            <strong>Bidang:</strong> {document.bidang}
          </p>
          <p>
            <strong>Codification:</strong> {document.codification}
          </p>
          <p>
            <strong>Machine Name:</strong> {document.machine_name}
          </p>
          <p>
            <strong>Manufacturer:</strong> {document.manufacturer}
          </p>
          <p>
            <strong>Description:</strong> {document.description}
          </p>
          <p>
            <strong>Issue Date:</strong> {document.issue_date}
          </p>
          <p>
            <strong>Revision:</strong> {document.revision}
          </p>
          <p>
            <strong>Status:</strong> {document.document_status}
          </p>
          <p>
            <strong>Borrowed By:</strong> {document.borrowed_by}
          </p>
          <p>
            <strong>Rak Hard File:</strong> {document.rak_hardfile}
          </p>
        </div>

        <div className="mt-4">
          <a
            href={document.file_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Open File
          </a>
        </div>

        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDocument;
