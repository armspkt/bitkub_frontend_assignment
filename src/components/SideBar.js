import React from "react";
import StyledItem from "./styled_components/StyledItem";
import { connect } from "react-redux";
const SideBar = (props) => (
  <div id="side-bar">
    <StyledItem
      onClick={() => {
        props.dispatch({ type: "SET", mode: "dashboard" });
      }}
    >
      Dashboard
    </StyledItem>
    <StyledItem
      onClick={() => {
        props.dispatch({ type: "SET", mode: "catalog" });
      }}
    >
      Catalog
    </StyledItem>
    <StyledItem
      onClick={() => {
        props.dispatch({ type: "SET", mode: "sales" });
      }}
    >
      Sales
    </StyledItem>
    <StyledItem
      onClick={() => {
        props.dispatch({ type: "SET", mode: "reports" });
      }}
    >
      Reports
    </StyledItem>
    <StyledItem
      onClick={() => {
        props.dispatch({ type: "SET", mode: "extensions" });
      }}
    >
      Extensions
    </StyledItem>
  </div>
);

export default connect()(SideBar);
