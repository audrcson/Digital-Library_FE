import React, { useState, useEffect } from "react";

const EditDocument = ({ isOpen, onClose, document, onSave }) => {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (document) setFormData(document);
  }, [document]);

  if (!isOpen || !document) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl h-3/4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Edit Document</h2>

        <div className="space-y-2">
          {Object.entries(formData).map(
            ([key, value]) =>
              key !== "id" && (
                <div key={key} className="flex flex-col text-sm">
                  <label className="capitalize mb-1">{key.replace(/_/g, " ")}:</label>
                  <input
                    type="text"
                    name={key}
                    value={value || ""}
                    onChange={handleChange}
                    className="border px-3 py-1 rounded"
                  />
                </div>
              )
          )}
        </div>

        <div className="mt-4 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDocument;
