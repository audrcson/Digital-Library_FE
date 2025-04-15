import { useState } from "react";
import DocumentTable from "./DocumentTable";

const DetailTable = ({ group, onBack }) => {
  // Data contoh untuk detail berdasarkan group
  const detailData = {
    "Group Conventional & TNC Machine": [
      { code: "602_4A", name: "Routine Check Maintenance", manu: "" },
      { code: "602_4B", name: "Emergency Repair Procedure", manu: "" },
    ],
    "Group High Speed Machine": [
      { code: "AAAR", name: "DMC 210 U", manu: "Deckel Maho"},
      { code: "AABG", name: "Jobs", manu: "Gantry" },
    ],
  };

  // Data tambahan untuk detail dokumen
  const documentDetails = {
    "602_4A": [
      { doc: "Doc-001", fileUrl: "/10-DP-W602_01.pdf", desc: "Inspection Report", date: "2024-01-01", rev: "Rev 1", rak_hardfile: "A12" },
      { doc: "Doc-002", desc: "Maintenance Guide", date: "2023-12-15", rev: "Rev 3", rak_hardfile: "A12" },
    ],
    "602_4B": [
      { document: "Doc-003", description: "Emergency Repair Steps", issueDate: "2024-02-10", revision: "Rev 2", rak_hardfile: "A12" },
    ],
    "AAAR": [
      { doc: "Manual_Spindle_DNM.pdf", fileUrl: "/Manual spindle GMN.pdf", desc: "Manual book untuk mesin DMC 210 U", date: "2024-01-20", rev: "Rev 1", rak_hardfile: "A12" },
      { doc: "Geometrik.pdf", fileUrl: "/geometrik.pdf", desc: "Geometrik untuk mesin DMC 210 U", date: "", rev: "", rak_hardfile: "A12" },
      { doc: "Wiring DMC 210 U.pdf", fileUrl: "/wiring DMC 210 U.pdf", desc: "Wiring untuk mesin DMC 210 U", date: "", rev: "", rak_hardfile: "A12" },
    ],
    "AABG01": [
      { doc: "Manual Jobs.pdf", fileUrl: "/J1294.pdf", desc: "Manual book untuk mesin Jobs", date: "2024-03-01", rev: "Rev 2", rak_hardfile: "A12" },
    ],
  };

  // State untuk menyimpan kode yang dipilih
  const [selectedCode, setSelectedCode] = useState(null);

  // Handle klik pada row tabel pertama
  const handleRowClick = (code) => {
    setSelectedCode(code);
  };

  // Handle kembali ke tabel utama
  const handleBackToTable = () => {
    setSelectedCode(null);
  };

  return (
    <div>
      {/* Tombol Back */}
      <button onClick={onBack} className="mb-4 px-3 py-2 bg-gray-300 rounded text-sm">
        ← Back
      </button>

      {/* Jika ada kode yang diklik, tampilkan DetailDocumentTable */}
      {selectedCode ? (
        <DocumentTable
          code={selectedCode}
          documents={documentDetails[selectedCode] || []}
          onBack={handleBackToTable}
        />
      ) : (
        <>
          {/* Judul */}
          <h2 className="text-lg font-semibold mb-3">{group}</h2>

          {/* Tabel */}
          <div className="overflow-auto rounded-lg shadow-lg">
            <table className="min-w-full bg-white rounded-lg border border-gray-200">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border text-center">Kode</th>
                  <th className="px-4 py-2 border text-center">Nama</th>
                  <th className="px-4 py-2 border text-center">Manufacturer</th>
                </tr>
              </thead>
              <tbody>
                {detailData[group] && detailData[group].length > 0 ? (
                  detailData[group].map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => handleRowClick(item.code)}
                    >
                      <td className="px-4 py-2 border text-center break-words text-blue-500 cursor-pointer hover:underline">{item.code}</td>
                      <td className="px-4 py-2 border text-center">{item.name}</td>
                      <td className="px-4 py-2 border text-center">{item.manu || "-"}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="px-4 py-2 border text-center" colSpan="3">
                      No details available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailTable;
