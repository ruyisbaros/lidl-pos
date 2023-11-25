import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/AdminDashboard";
import Users from "./pages/Users";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return (
    <div className="app w-full h-full">
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<AdminDashboard />}>
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
