import React from "react";
import { BiSearchAlt2, BiBell, BiMessage } from "react-icons/bi";
import userImg from "../img/user.png";
export default () => (
  <div className="search-wrapper">
    <div className="search">
      <BiSearchAlt2 className="search-icon" />
      <input type="text" placeholder="Search..." />
    </div>
    <div className="contact">
      <BiBell className="contact-icon" />
      <BiMessage className="contact-icon" />
      <div className="user-profile"></div>
    </div>
  </div>
);
