import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";

const App = () => {
  return (
    <div className="app w-full h-full">
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
