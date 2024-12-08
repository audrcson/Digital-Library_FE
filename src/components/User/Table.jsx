import React from "react";

const Table = ({ data }) => {
  return (
    <div className="overflow-auto rounded-lg shadow-lg">
      <table className="min-w-full bg-white rounded-lg border border-gray-200 table-fixed">
        <thead>
          <tr>
            <th className="px-4 py-2 border w-1/4">Document</th>
            <th className="px-4 py-2 border w-1/4">Description</th>
            <th className="px-4 py-2 border w-1/4">Issue Date</th>
            <th className="px-4 py-2 border w-1/4">Revision</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row) => (
              <tr key={row.doc}>
                <td className="px-4 py-2 border text-center break-words">
                  <a
                    href={row.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {row.doc}
                  </a>
                </td>
                <td className="px-4 py-2 border text-center break-words">
                  {row.desc}
                </td>
                <td className="px-4 py-2 border text-center break-words">
                  {row.date}
                </td>
                <td className="px-4 py-2 border text-center break-words">
                  {row.rev}
                </td>
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
