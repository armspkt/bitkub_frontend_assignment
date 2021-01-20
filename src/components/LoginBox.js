import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { GrFacebook } from "react-icons/gr";
export default () => (
  <div className="login-box">
    <div className="login-header">
      <FaUserCircle className="user-icon" />
      <p className="text-large">Sign In</p>
    </div>
    <div className="login-form">
      <form>
        <input type="text" name="username" placeholder="USERNAME" />
        <input type="password" name="password" placeholder="PASSWORD" />
        <button> SIGN IN </button>
      </form>
    </div>
    <p className="text-center"> - Or Sign In With - </p>
    <div className="login-with-wrapper">
    <div className="login-with-google">
      <FcGoogle className="social-icon" />
        <p>Google</p>
      </div>
      <div className="login-with-facebook">
        <GrFacebook className="social-icon" />
        <p>facebook</p>
      </div>
    </div>
  </div>
);
