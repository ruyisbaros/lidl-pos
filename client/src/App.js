import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./pages/AdminDashboard";

const App = () => {
  return (
    <div className="app">
      <ToastContainer position="bottom-center" limit={1} />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
};

export default App;
