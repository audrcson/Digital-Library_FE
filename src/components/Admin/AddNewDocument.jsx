import React, { useState } from 'react';

const AddNewDocument = ({ onClose }) => {
  const [document, setDocument] = useState('');
  const [description, setDescription] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [revision, setRevision] = useState('');
  const [status, setStatus] = useState('');

  const handleSave = () => {
    console.log({
      document,
      description,
      issueDate,
      revision,
      status,
    });

    setDocument('');
    setDescription('');
    setIssueDate('');
    setRevision('');
    setStatus('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg p-6 relative">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Add New Document</h2>
          <button
            className="text-gray-500 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <form className="mt-4">
          <div className="mb-4">
            <label className="block text-gray-700">Document Name</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 rounded w-full"
              placeholder="Enter document name"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              className="px-4 py-2 border border-gray-300 rounded w-full"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Issue Date</label>
            <input
              type="date"
              className="px-4 py-2 border border-gray-300 rounded w-full"
              value={issueDate}
              onChange={(e) => setIssueDate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Revision</label>
            <input
              type="text"
              className="px-4 py-2 border border-gray-300 rounded w-full"
              placeholder="Enter revision"
              value={revision}
              onChange={(e) => setRevision(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Status</label>
            <select
              className="px-4 py-2 border border-gray-300 rounded w-full"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Available">Available</option>
              <option value="Borrowed">Borrowed</option>
            </select>
          </div>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewDocument;
