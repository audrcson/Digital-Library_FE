import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-auto rounded-lg shadow-lg">
      <table className="min-w-full px-6 py-4 bg-white rounded-lg border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Document</th>
            <th className="px-4 py-2 border">Description</th>
            <th className="px-4 py-2 border">Issue Date</th>
            <th className="px-4 py-2 border">Revision</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr key={row.doc}>
                <td className="px-4 py-2 border text-center">
                  <a
                    href={row.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {row.doc}
                  </a>
                </td>
                <td className="px-4 py-2 border text-center">{row.desc}</td>
                <td className="px-4 py-2 border text-center">{row.date}</td>
                <td className="px-4 py-2 border text-center">{row.rev}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="px-4 py-2 border text-center" colSpan="4">
                No Data Available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
