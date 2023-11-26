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
import { Link, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-cont">
      <div className="link-item">
        <span className="item-title">Main</span>
        <ul className="menuLists ">
          <NavLink to="/home">
            <li className="menuList">
              <AiOutlineHome />
              <span>Homepage</span>
            </li>
          </NavLink>
          <NavLink to="/profile">
            <li className="menuList">
              <FaUser />
              <span>Profile</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="link-itemChild">
        <span className="item-title">Lists</span>
        <ul className="menuLists ">
          <NavLink to="/users">
            <li className="menuList">
              <FaUsers />
              <span>Users</span>
            </li>
          </NavLink>
          <NavLink to="/products">
            <li className="menuList">
              <SlBasketLoaded />
              <span>Products</span>
            </li>
          </NavLink>
          <NavLink to="/posts">
            <li className="menuList">
              <CiSignpostDuo1 />
              <span>Posts</span>
            </li>
          </NavLink>
          <NavLink to="/orders">
            <li className="menuList">
              <GoListOrdered />
              <span>Orders</span>
            </li>
          </NavLink>
          <NavLink to="/bills">
            <li className="menuList">
              <CiMoneyBill />
              <span>Bills</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="link-item link-itemChild">
        <span className="item-title ">General</span>
        <ul className="menuLists ">
          <NavLink to="/">
            <li className="menuList">
              <HiTemplate />
              <span>Elements</span>
            </li>
          </NavLink>
          <NavLink to="/notes">
            <li className="menuList">
              <GiNotebook />
              <span>Notes</span>
            </li>
          </NavLink>
          <NavLink to="/forms">
            <li className="menuList">
              <FaWpforms />
              <span>Forms</span>
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="menuList">
              <FaRegCalendarAlt />
              <span>Calendar</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="link-item link-itemChild">
        <span className="item-title ">Maintenance</span>
        <ul className="menuLists ">
          <NavLink to="/">
            <li className="menuList">
              <IoSettingsOutline />
              <span>Settings</span>
            </li>
          </NavLink>
          <NavLink to="/">
            <li className="menuList">
              <LuDatabaseBackup />
              <span>Backups</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div className="link-item link-itemChild">
        <span className="item-title ">Analytics</span>
        <ul className="menuLists ">
          <Link to="/">
            <li className="menuList">
              <FaChartLine />
              <span>Charts</span>
            </li>
          </Link>
          <Link to="/">
            <li className="menuList">
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
