import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Menu from "../components/navbar/Menu";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="p-2">
      <Navbar />
      <div className="container flex">
        <div className="menuContainer w-[250px] py-[5px] px-[20px] ">
          <Menu />
        </div>
        <div className="contentContainer w-full py-[5px] px-[20px]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
