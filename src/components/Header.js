import React from "react";
import StyledLink from "./styled_components/StyledLink";
import styled from "styled-components";
export default () => (
  <header>
    <div className="container">
      <div className="navbar">
        <div className="nav-left">
          <StyledLink to="/">Home</StyledLink>
        </div>
        <div className="nav-right">
          <StyledLink to="/admin">Admin</StyledLink>
          <StyledLink to="/login">Login</StyledLink>
        </div>
      </div>
    </div>
  </header>
);
