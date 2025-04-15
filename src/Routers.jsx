import { Routes, Route, Router, Navigate } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import UserDashbord from "./pages/UserDashboard";
import AdminDocument from "./pages/AdminDocument";
import AdminUser from "./pages/AdminUser";


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<UserDashbord />} />
      <Route path="/admin" element={<AdminDocument />} /> 
      <Route path="/admin/user-account" element={<AdminUser />} />
    </Routes>
  )
}

export default Routers;