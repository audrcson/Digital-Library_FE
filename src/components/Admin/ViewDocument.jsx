import React from 'react';

const ViewDocument = ({ document, onClose }) => {
  if (!document) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-1/2">
        <h2 className="text-xl font-bold mb-4">Document Details</h2>
        <p><strong>Document Name:</strong> {document.document}</p>
        <p><strong>Category:</strong> {document.category}</p>
        <p><strong>Description:</strong> {document.description}</p>
        <p><strong>Issue Date:</strong> {document.issueDate}</p>
        <p><strong>Revision:</strong> {document.revision}</p>
        <p><strong>Status:</strong> {document.status}</p>
        <p><strong>Borrowed By:</strong> {document.borrowedby || 'N/A'}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewDocument;
