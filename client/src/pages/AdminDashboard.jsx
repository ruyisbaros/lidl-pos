import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Menu from "../components/navbar/Menu";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className=" min-w-full">
      <Navbar />
      <div className="w-full flex mt-4 px-2">
        <div className="menuContainer w-[250px] py-[5px] px-[20px] ">
          <Menu />
        </div>
        <div className="contentContainer py-[5px] px-[20px] flex-grow-1">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
