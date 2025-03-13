
import React, { useState } from "react";

const AddNewDocument = ({ onClose }) => {
  const [document, setDocument] = useState("");
  const [group, setGroup] = useState("");
  const [area, setArea] = useState("");
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [manu, setManu] = useState("");
  const [description, setDescription] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [revision, setRevision] = useState("");
  const [status, setStatus] = useState("");
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleSave = () => {
    console.log({
      document,
      group,
      area,
      code,
      name,
      manu,
      description,
      issueDate,
      revision,
      status,
    });

    setDocument("");
    setGroup("");
    setArea("");
    setCode("");
    setName("");
    setManu("");
    setDescription("");
    setIssueDate("");
    setRevision("");
    setStatus("");
    onClose();
  };

  // Dummy event handlers to prevent errors
  const handleDragOver = (e) => e.preventDefault();
  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFile(files[0]);
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleUpload = () => {
    if (file) {
      console.log("Uploading file:", file.name);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-y-auto">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-lg p-6 relative max-h-[90vh] overflow-y-auto scrollbar-hide">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-semibold">Add New Document</h2>
          <button className="text-gray-500 text-2xl" onClick={onClose}>
            &times;
          </button>
        </div>

        <div>
          <div className="w-[560px] flex justify-between items-center">
            <div className="text-gray-700 text-xl font-semibold">Upload PDF</div>
          </div>

          <div
            className="w-[70%] h-[100px] py-6 mt-2 bg-[rgb(132,184,245)] rounded-lg border-dashed border-2 border-blue-800 flex flex-col justify-center items-center gap-2"
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <label
              htmlFor="fileInput"
              className={`w-full h-full flex flex-col items-center justify-center cursor-pointer ${
                isDragging ? "text-gray-500" : "text-gray-700"
              }`}
            >
              {file ? (
                <p className="text-base font-medium">
                  Selected file: {file.document}
                </p>
              ) : (
                <>
                  <p className="text-base font-medium">
                    Select a PDF file to upload
                  </p>
                  <p className="text-sm">or drag and drop it here</p>
                </>
              )}
            </label>
          </div>
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            className="hidden"
            id="fileInput"
          />
          <div className="flex items-start justify-end mt-5">
            <button
              className="w-[70px] h-9 px-2.5 py-2 bg-white rounded-lg border border-gray-300 text-gray-700 text-sm"
              onClick={handleUpload}
            >
              Upload
            </button>
          </div>
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
            <label className="block text-gray-700">Bidang</label>
            <select
              className="px-4 py-2 border border-gray-300 rounded w-full"
              value={area}
              onChange={(e) => setArea(e.target.value)}
            >
              <option value="">Select Area</option>
              <option value="Machining">Machining</option>
              <option value="Metal Forming & Tooling">Metal Forming & Tooling</option>
              <option value="Special Process">Special Process</option>
              <option value="Utility, QA & AI">Utility, QA & AI</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Group</label>
            <select
              className="px-4 py-2 border border-gray-300 rounded w-full"
              value={group}
              onChange={(e) => setGroup(e.target.value)}
            >
              <option value="">Select Group</option>
              <option value="Inspeksi Mutu Aerostruktur">
                Group Inspeksi Mutu Aerostruktur
              </option>
              <option value="Group B">Group B</option>
              <option value="Group C">Group C</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Codification</label>
            <select
              className="px-4 py-2 border border-gray-300 rounded w-full"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            >
              <option value="">Select Machine Codification</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
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

          {/* Additional Fields */}
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
