import React, { useMemo, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const UserTable = ({ 
  userData,
  selectedGrouping,
  selectedSorting,
  selectedUsers,
  handleSelectUser,
  selectAll,
  handleSelectAll,
  searchTerm,
}) => {

  const sortedUserData = useMemo(() => {
    let filteredData = [...userData];
  
    if (searchTerm) {
      filteredData = filteredData.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    if (selectedGrouping && selectedGrouping !== "Group by") {
      const key = selectedGrouping.toLowerCase().replace(" ", "_");
  
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
  }, [userData, selectedGrouping, selectedSorting, searchTerm]);
  

  const [selectedUser, setSelectedUser] = useState(null);

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  const getColumnData = (user, grouping) => {
    const mapping = {
      Name: user.name,
      NIK: user.nik,
      Role: user.role,
      Bidang: user.bidang,
      Peminjaman: user.peminjaman_hardfile,
      Document: user.dokumen
    };
    return mapping[grouping] || user.name;
  }

  return (
    <div className="pt-5 flex">
      <div className="border border-1.5 rounded-l-lg" style={{maxWidth: "100%", position: "sticky", top: 0}}>
        <table className="table">
          <thead className="" style={{backgroundColor: "rgba(237, 233, 254, 1)", color: "rgba(91, 33, 182, 1)", borderBottom: "1px solid rgba(0, 0, 0, 0.1)"}}>
            <tr className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]">
              <th style={{height: "52px", position: "sticky", top: 0, zIndex: 1, borderTopRightRadius: "0.4rem", borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                <label>
                  <input type="checkbox" className="checkbox-sm" checked={selectAll} onChange={handleSelectAll}/>
                </label>
              </th>
              <th style={{position: "sticky", top: 0, zIndex: 1, borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                {!selectedGrouping || selectedGrouping === "Group by" || selectedGrouping === "Name" ? "Name" : selectedGrouping}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedUserData.map((user, index) => (
              <tr key={index}>
                <th style={{borderRight: "1px solid rgba(0, 0, 0, 0.1)", position: "sticky", top: 0, zIndex: 1}} className="text-center">
                  <label>
                    <input type="checkbox" className="checkbox" checked={selectedUsers.has(user.id)} onChange={() => handleSelectUser(user.id)}/>
                  </label>
                </th>
                <td className="whitespace-nowrap poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]" style={{overflowX: "auto", maxWidth: "200px", height: "61px"}}>
                  <span>{getColumnData(user, selectedGrouping)}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="overflow-x-auto no-scrollbar border border-1.5" style={{maxWidth: "100%"}}>
        <table className="table">
          <thead className="" style={{backgroundColor: "rgba(237, 233, 254, 1)", color: "rgba(91, 33, 182, 1)", borderBottom: "1px solid rgba(0, 0, 0, 0.1)"}}>
            <tr className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-xs" style={{height: "52px", borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
              <th className="border-r border-gray-200">NIK</th>
              <th className="border-r border-gray-200">Password</th>
              <th className="border-r border-gray-200">Email</th>
              <th className="border-r border-gray-200">Bidang</th>
              <th className="border-r border-gray-200">Peminjaman Hard File</th>
              <th className="border-r border-gray-200">Document</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user.id}>
              <td className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]" style={{overflowX: "auto", borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                {user.nik}
              </td>
              <td className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]" style={{overflowX: "auto", borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                {user.password}
              </td>
              <td className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]" style={{overflowX: "auto", borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                {user.email}
              </td>
              <td className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]" style={{overflowX: "auto", maxWidth: "200px", height: "61px", borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                {user.bidang}
              </td>
              <td className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]" style={{overflowX: "auto", maxWidth: "200px", height: "61px", borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                {user.peminjaman_hardfile}
              </td>
              <td className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]" style={{overflowX: "auto", maxWidth: "200px", height: "61px", borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                {user.dokumen}
              </td>
              <td className="text-center poppins-regular sm:text-[0.375rem] md:text-[0.5rem] lg:text-[0.625rem] xl:text-[0.75rem]" style={{overflowX: "auto", maxWidth: "200px", height: "61px", borderRight: "1px solid rgba(0, 0, 0, 0.1)"}}>
                {user.role}
              </td>
            </tr>
              
            ))}
          </tbody>
        </table>
      </div>

      <div className="border border-1.5 rounded-r-lg" style={{ position: "sticky", top: 0 }}>
        <table className="table">
          <thead className="" style={{backgroundColor: "rgba(237, 233, 254, 1)", color: "rgba(91, 33, 182, 1)"}}>
            <tr className="text-center">
              <th className="" style={{height: "52px", position: "sticky", top: 0, zIndex: 1, borderTopRightRadius: "0.4rem"}}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td className="whitespace-nowrap text-sm" style={{position: "sticky", top: 0, zIndex: 1}}>
                  <div className="flex space-x-2 justify-center items-center h-9">
                    <button onClick={() => handleView(user)} className="p-1 px-2 text-sm text-white bg-gray-400 rounded-lg">
                      <FaEye />
                    </button>
                    <button onClick={() => handleEdit(user)} className="p-1 px-2 text-sm text-white bg-gray-400 rounded-lg">
                      <FaEdit />
                    </button>
                    <button className="p-1 px-2 text-sm text-white bg-gray-400 rounded-lg">
                      <FaTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;