import React, { useMemo, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import ViewDocument from "./ViewDocument";
import EditDocument from "./EditDocument";

const AdminDocTable = ({ 
  documentData,
  selectedGrouping,
  selectedSorting,
  selectedDocuments,
  handleSelectDocument,
  selectAll,
  handleSelectAll,
  searchTerm,
}) => {

  const sortedDocumentData = useMemo(() => {
    let filteredData = [...documentData];
  
    // Search filter
    if (searchTerm) {
      filteredData = filteredData.filter((doc) =>
        doc.document_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    // Grouping and Sorting
    if (selectedGrouping && selectedGrouping !== "Group by") {
      const key = selectedGrouping
        .toLowerCase()
        .replace(" ", "_") // convert to match property name, like "Document Type" => "document_type"
        .replace("document_", ""); // fix for "Document Name" fallback
  
      filteredData.sort((a, b) => {
        const aVal = a[key] || "";
        const bVal = b[key] || "";
  
        if (selectedSorting === "Descending") {
          return bVal.localeCompare(aVal);
        } else {
          return aVal.localeCompare(bVal);
        }
      });
    }
  
    return filteredData;
  }, [documentData, selectedGrouping, selectedSorting, searchTerm]);
  

  const [selectedDoc, setSelectedDoc] = useState(null);
const [isViewOpen, setIsViewOpen] = useState(false);
const [isEditOpen, setIsEditOpen] = useState(false);

const handleView = (doc) => {
  setSelectedDoc(doc);
  setIsViewOpen(true);
};

const handleEdit = (doc) => {
  setSelectedDoc(doc);
  setIsEditOpen(true);
};

const handleSave = (updatedDoc) => {
  console.log("Saved Document:", updatedDoc);
  setIsEditOpen(false);
};



  const getColumnData = (document, grouping) => {
    const mapping = {
      Document_Type: document.document_type,
      Group: document.group,
      Bidang: document.bidang,
      "Codification": document.codification,
      "Machine Name": document.machine_name,
      "Manufacturer": document.manufacturer,
      "Description": document.description,
      Issue_Date: document.issue_date,
      Revision: document.revision,
      Document_Status: document.document_status,
      "Borrowed By": document.borrowed_by,
      Rak_HardFile: document.rak_hardfile,
    };
    return mapping[grouping] || document.document_name;
  }


  return (
    <div className="pt-5 flex">
      <div 
        id="Check & Document Name"
        className="border border-1.5 rounded-l-lg"
        style={{
          maxWidth: "100%",
          position: "sticky",
          top: 0,
        }}
      >
        <table className="table">
          <thead
            className=""

            style={{
              backgroundColor: "rgba(237, 233, 254, 1)",
              color: "rgba(91, 33, 182, 1)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <tr className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]">
              <th
                style={{
                  height: "52px",
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                  borderTopRightRadius: "0.4rem",
                  borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                <label>
                  <input 
                    type="checkbox"
                    className="checkbox-sm"
                    checked={selectAll}
                    onChange={handleSelectAll}
                  />
                </label>
              </th>
              <th
                style={{
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                  borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              >
                {!selectedGrouping || selectedGrouping === "Group by" || selectedGrouping === "Document Name" 
                  ? "Document Name" 
                  : selectedGrouping}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedDocumentData.map((document, index) => (
              <tr key={index}>
                <th
                  style={{
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                    
                  }}
                  className="text-center"
                >
                  <label>
                    <input 
                      type="checkbox" 
                      className="checkbox"
                      checked={selectedDocuments.has(document.id)}
                      onChange={() => handleSelectDocument(document.id)}
                    />
                  </label>
                </th>
                <td
                  className="whitespace-nowrap poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                  }}
                >
                  {selectedGrouping === "Document Name" || selectedGrouping === "Group by" ? (
                    <div className="flex items-center gap-3">
                      <a 
                        href={document.file_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 underline break-all"
                      >
                        {document.file_url}
                      </a>
                    </div>
                  ) : (
                    <span>{getColumnData(document, selectedGrouping)}</span>
                  )}


                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>

      {/* Type until Rak Hard File*/}
      <div
        className="overflow-x-auto no-scrollbar border border-1.5"
        style={{maxWidth: "100%"}}
      >
        <table className="table">
          <thead
            className=""
            style={{
              backgroundColor: "rgba(237, 233, 254, 1)",
              color: "rgba(91, 33, 182, 1)",
              borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
            }}
          >
            <tr 
              className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-xs"
              style={{
                height: "52px",
                borderRight: "1px solid rgba(0, 0, 0, 0.1)",
              }}
            >
              <th className="border-r border-gray-200">Type</th>
              <th className="border-r border-gray-200">Group</th>
              <th className="border-r border-gray-200">Bidang</th>
              <th className="border-r border-gray-200">Codification</th>
              <th className="border-r border-gray-200">Machine Name</th>
              <th className="border-r border-gray-200">Manufacturer</th>
              <th className="border-r border-gray-200">Description</th>
              <th className="border-r border-gray-200">Issue Date</th>
              <th className="border-r border-gray-200">Revision</th>
              <th className="border-r border-gray-200">Status</th>
              <th className="border-r border-gray-200">Borrowed By</th>
              <th>Rak Hard File</th>
            </tr>
          </thead>
          <tbody>
            {documentData.map((document) => (
              <tr key={document.id}>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.document_type}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.group}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.bidang}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.codification}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.machine_name}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.manufacturer}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.description}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.issue_date}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.revision}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.document_status}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.borrowed_by}
                </td>
                <td
                  className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]"
                  style={{
                    overflowX: "auto",
                    maxWidth: "200px",
                    height: "61px",
                    borderRight: "1px solid rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {document.rak_hardfile}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Table */}
      <div
        className="border border-1.5 rounded-r-lg"
        style={{ position: "sticky", top: 0 }}
      >
        <table className="table">
          <thead
            className=""
            style={{
              backgroundColor: "rgba(237, 233, 254, 1)",
              color: "rgba(91, 33, 182, 1)",
            }}
          >
            <tr className="text-center">
              <th
                className=""
                style={{
                  height: "52px",
                  position: "sticky",
                  top: 0,
                  zIndex: 1,
                  borderTopRightRadius: "0.4rem",
                }}
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {documentData.map((document, index) => (
              <tr key={index}>
                <td
                  className="whitespace-nowrap text-sm"
                  style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 1,
                  }}
                >
                  <div className="flex space-x-2 justify-center items-center h-9">
                    <button
                       onClick={() => handleView(document)}
                      className="p-1 px-2 text-sm text-white bg-gray-400 rounded-lg"
                    >
                      <FaEye />
                    </button>
                    <button
                      onClick={() => handleEdit(document)}
                      className="p-1 px-2 text-sm text-white bg-gray-400 rounded-lg"
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="p-1 px-2 text-sm text-white bg-gray-400 rounded-lg"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ViewDocument
  isOpen={isViewOpen}
  onClose={() => setIsViewOpen(false)}
  document={selectedDoc}
/>
<EditDocument
  isOpen={isEditOpen}
  onClose={() => setIsEditOpen(false)}
  document={selectedDoc}
  onSave={handleSave}
/>


      </div>
    </div>
  );
};

export default AdminDocTable;