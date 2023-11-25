import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa6";
import { SlBasketLoaded } from "react-icons/sl";
import { GoListOrdered } from "react-icons/go";
import { CiMoneyBill, CiSignpostDuo1 } from "react-icons/ci";
import {
  FaRegCalendarAlt,
  FaWpforms,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { HiTemplate } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaExpand } from "react-icons/fa";
import { LuDatabaseBackup } from "react-icons/lu";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="">
      <div className="link-item">
        <span className="item-title inline-flex uppercase text-[12px] p-1 font-thin tracking-wide text-light_color mb-[10px]">
          Main
        </span>
        <ul className="w-full ">
          <Link to="/home">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <AiOutlineHome />
              <span>Homepage</span>
            </li>
          </Link>
          <Link to="/profile">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <FaUser />
              <span>Profile</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="link-item mt-[10px]">
        <span className="item-title inline-flex uppercase text-[12px] p-1 font-thin tracking-wide text-light_color mb-[10px]">
          Lists
        </span>
        <ul className="w-full ">
          <Link to="/users">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <FaUsers />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <SlBasketLoaded />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/posts">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <CiSignpostDuo1 />
              <span>Posts</span>
            </li>
          </Link>
          <Link to="/orders">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <GoListOrdered />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/bills">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <CiMoneyBill />
              <span>Bills</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="link-item mt-[10px]">
        <span className="item-title inline-flex uppercase text-[12px] p-1 font-thin tracking-wide text-light_color mb-[10px]">
          General
        </span>
        <ul className="w-full ">
          <Link to="/">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <HiTemplate />
              <span>Elements</span>
            </li>
          </Link>
          <Link to="/notes">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <GiNotebook />
              <span>Notes</span>
            </li>
          </Link>
          <Link to="/forms">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <FaWpforms />
              <span>Forms</span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <FaRegCalendarAlt />
              <span>Calendar</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="link-item mt-[10px]">
        <span className="item-title inline-flex uppercase text-[12px] p-1 font-thin tracking-wide text-light_color mb-[10px]">
          Maintenance
        </span>
        <ul className="w-full ">
          <Link to="/">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <IoSettingsOutline />
              <span>Settings</span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <LuDatabaseBackup />
              <span>Backups</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="link-item mt-[10px]">
        <span className="item-title inline-flex uppercase text-[12px] p-1 font-thin tracking-wide text-light_color mb-[10px]">
          Analytics
        </span>
        <ul className="w-full ">
          <Link to="/">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <FaChartLine />
              <span>Charts</span>
            </li>
          </Link>
          <Link to="/">
            <li className="flex items-center gap-[10px] p-[10px] hover:bg-light_soft duration-300 rounded-md ">
              <FaExpand />
              <span>Logs</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
