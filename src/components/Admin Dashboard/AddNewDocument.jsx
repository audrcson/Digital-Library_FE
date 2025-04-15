import React, { useState } from "react";

const AddNewDocument = ({ handleCancel, setIndex, setDocumentData, documentData }) => {
  const [formData, setFormData] = useState({
    document_name: "",
    document_type: "",
    group: "",
    bidang: "",
    codification: "",
    machine_name: "",
    manufacturer: "",
    description: "",
    issue_date: "",
    revision: "",
    document_status: "Active",
    borrowed_by: "-",
    rak_hardfile: "-",
    pdf_file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSave = () => {
    const newDocument = {
      id: documentData.length + 1,
      ...formData,
    };

    setDocumentData([...documentData, newDocument]);
    handleCancel(); // Close modal/form
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl">
        <h2 className="text-xl font-semibold mb-4">Add New Document</h2>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="document_name"
            placeholder="Document Name"
            value={formData.document_name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="document_type"
            placeholder="Document Type"
            value={formData.document_type}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="group"
            placeholder="Group"
            value={formData.group}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="bidang"
            placeholder="Bidang"
            value={formData.bidang}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="codification"
            placeholder="Codification"
            value={formData.codification}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="machine_name"
            placeholder="Machine Name"
            value={formData.machine_name}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="manufacturer"
            placeholder="Manufacturer"
            value={formData.manufacturer}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border p-2 rounded"
          />
          <input
            type="date"
            name="issue_date"
            value={formData.issue_date}
            onChange={handleChange}
            className="border p-2 rounded col-span-2"
          />
          <input
            type="text"
            name="revision"
            placeholder="Revision"
            value={formData.revision}
            onChange={handleChange}
            className="border p-2 rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-gray-600">Upload PDF Document</label>
          <input
            type="file"
            name="pdf_file"
            accept="application/pdf"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={handleCancel}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNewDocument;
