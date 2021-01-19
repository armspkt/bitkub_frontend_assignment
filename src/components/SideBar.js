import React from "react";
import StyledItem from "./styled_components/StyledItem";
import { connect } from "react-redux";
import { setMode } from "../actions/setMode";
import { GiHamburgerMenu, GiReceiveMoney } from "react-icons/gi";
import { GoDashboard } from "react-icons/go";
import { CgFileDocument } from "react-icons/cg";
import { FiSettings, FiShoppingCart } from "react-icons/fi";
import { IoIosRocket } from "react-icons/io";
const SideBar = (props) => (
  <div id="side-bar">
    <div className="side-bar-header">
      <div className="brand">
          <IoIosRocket className="brand-logo"/>
          <p>thanasoft</p>
      </div>
      <span className="icon-menu">
        <GiHamburgerMenu />
      </span>
    </div>
    <div className="side-bar-menu">
      <StyledItem
        onClick={() => {
          props.dispatch(setMode("dashboard"));
        }}
      >
        <span className="content-icon">
          <GoDashboard />
        </span>
        Dashboard
      </StyledItem>

      <StyledItem
        onClick={() => {
          props.dispatch(setMode("catalog"));
        }}
      >
        <span className="content-icon">
          <FiShoppingCart />
        </span>
        Catalog
      </StyledItem>
      <StyledItem
        onClick={() => {
          props.dispatch(setMode("sales"));
        }}
      >
        <span className="content-icon">
          <GiReceiveMoney />
        </span>
        Sales
      </StyledItem>
      <StyledItem
        onClick={() => {
          props.dispatch(setMode("reports"));
        }}
      >
        <span className="content-icon">
          <CgFileDocument />
        </span>
        Reports
      </StyledItem>
      <StyledItem
        onClick={() => {
          props.dispatch({ type: "SET", mode: "extensions" });
        }}
      >
        <span className="content-icon">
          <FiSettings />
        </span>
        Extensions
      </StyledItem>
    </div>
  </div>
);

export default connect()(SideBar);
