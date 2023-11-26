import React from "react";
import { users } from "./../../utils/data";

const TopBox = () => {
  return (
    <div className="topBox scrollBar">
      <h1>top deals</h1>
      <div className="userLists">
        {users.map((usr) => (
          <div key={usr.id} className="userList">
            <div className="user">
              <img src={usr.img} alt="" />
              <div className="userInfo">
                <p>{usr.name}</p>
                <span>{usr.mail}</span>
              </div>
            </div>
            <span className="value">${usr.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
