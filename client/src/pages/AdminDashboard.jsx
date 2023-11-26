import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Menu from "../components/navbar/Menu";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="adminDash">
      <Navbar />
      <div className="wrapperContent">
        <div className="menuContainer">
          <Menu />
        </div>
        <div className="contentContainer">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
