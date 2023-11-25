import React from "react";
import { IoMdSearch } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaExpand } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import me from "../../assests/bg-removed.png";
const Navbar = () => {
  return (
    <div className="w-full sticky top-0 z-[100] bg-light_main flex items-center justify-between px-[2rem] py-[20px]">
      <div className="flex items-center gap-[1rem] font-bold">
        GmbH <span>Inventory Tracking System</span>
      </div>
      <div className="flex items-center gap-[20px]">
        <span className="cursor-pointer">
          <IoMdSearch size={25} />
        </span>
        <span className="cursor-pointer">
          <AiOutlineAppstore size={25} />
        </span>
        <span className="cursor-pointer">
          <FaExpand size={25} />
        </span>
        <div className="relative">
          <span className="cursor-pointer">
            <FaRegBell size={25} />
          </span>
          <span className="notify">1</span>
        </div>
        <div className="profile flex items-center gap-[10px]">
          <img
            src={me}
            alt=""
            className="w-[30px] h-[30px] rounded-full cursor-pointer"
          />
          <span className="text-[14px]">Ahmet</span>
        </div>
        <span className="cursor-pointer">
          <IoSettingsOutline size={25} />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
