import React from "react";
import StyledItem from "./styled_components/StyledItem";
import { connect } from "react-redux";
import { setMode } from "../actions/setMode";
const SideBar = (props) => (
  <div id="side-bar">
    <StyledItem
      onClick={() => {
        props.dispatch(setMode("dashboard"));
      }}
    >
      Dashboard
    </StyledItem>
    <StyledItem
      onClick={() => {
        props.dispatch(setMode("catalog"));
      }}
    >
      Catalog
    </StyledItem>
    <StyledItem
      onClick={() => {
        props.dispatch(setMode("sales"));
      }}
    >
      Sales
    </StyledItem>
    <StyledItem
      onClick={() => {
        props.dispatch(setMode("reports"));
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
