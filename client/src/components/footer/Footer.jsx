import React from "react";
import { LuCopyright } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="footerMain">
      <span className="gmbh">GmbH</span>
      <span className="copyRight">
        <LuCopyright /> <span>@hmet - 2023</span>
      </span>
    </div>
  );
};

export default Footer;
