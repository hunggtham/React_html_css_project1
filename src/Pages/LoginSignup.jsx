import React from "react";
import "./Css/LoginSignup.css";
const LoginSignup = () => {
  return (
    <div className="login-signup-containter">
      <div className="loginsign-top">
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="password" placeholder="Enter password" />
          <input type="password" placeholder="Repeat password" />
        </div>
        <div className="loginsign-bottom">
          <button className="btn login-button">Continue</button>
          <p className="login-desc">
            Already have an account? <span>Login here</span>
          </p>
          <div className="loginsign-policy">
            <input type="checkbox" />
            <p className="desc">
              By continue, I agree to the terms of use & privacy policy{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
