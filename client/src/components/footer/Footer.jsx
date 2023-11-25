import React from "react";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="w-full flex flex-col p-[20px]">
      <span className="text-center font-bold">GmbH</span>
      <span className="w-full flex items-center justify-center gap-1 text-light_bg_1 text-[13px]">
        <LuCopyright /> <span>@hmet - 2023</span>
      </span>
    </div>
  );
};

export default Footer;
