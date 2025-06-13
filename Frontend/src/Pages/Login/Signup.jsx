// src/components/SignupPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="Brand-Container">
        <img src="/assets" alt="logo" />
        <h1 className="brand">GALVINUS</h1></div>
        <div className="ceo-image"></div>
        <p className="description">
          Image of CEO<br />
          & our product logo<br />
          & a simple message on CRM.
        </p>
      </div>
      <div className="login-right">
              <span className="Login"><h2>Sign Up</h2></span>
              <label>Full Name</label>
              <input type="Text" placeholder="Enter your full name" required/>
               <label>Email address</label>
              <input type="email" placeholder="Enter your email" required/>
              <label>Password</label>
              <input type="password" placeholder="Enter your password" required />
              <label>Confirm Password</label>
              <input type="password" required />
              <div className="forgot-password">
                <a href="#">Forgot Password?</a>
              </div>
              <button className="btn">Create Account</button>
              <p className="login-link">
               Already have an account? <Link to="/login">Log in.</Link>
             </p>
            </div>
      
        
      
    </div>
  );
};

export default SignupPage;
