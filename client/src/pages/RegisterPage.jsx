import React from "react";

import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";

import "./RegisterPage.scss";

const RegisterPage = () => (
  <div className="register">
    <SignIn />
    <SignUp />
  </div>
);

export default RegisterPage;
