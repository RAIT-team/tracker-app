import React, { Component } from "react";
import "./signUpPage.css";

class SignUpPage extends Component {
  render() {
    return (
      <div>
        <div className="signup-page">
          {/* <div className="co2">CO2</div>
          <div className="co2-text">Cleaner Air Healthier You !</div> */}

          <div className="signup-container">
            <div className="signup-container-container">
              <div className="signup-header-container">
                <div className="signup-header">Sign Up</div>
                <div className="signup-login-instead">
                  <a href="/login">Login Instead?</a>
                </div>
              </div>
              <div className="signup-fName">
                <input
                  type="text"
                  label="firstname"
                  placeholder="First Name"
                ></input>
              </div>
              <div className="signup-LName">
                <input
                  type="text"
                  label="lastname"
                  placeholder="Last Name"
                ></input>
              </div>

              <div className="signup-text">
                <input type="email" label="email" placeholder="Email"></input>
              </div>
              <div className="signup-pw">
                <input
                  type="password"
                  label="password"
                  placeholder="Password"
                ></input>
              </div>
              <div className="signup-rpt-pw">
                <input
                  type="password"
                  label="password"
                  placeholder="Confirm Password"
                ></input>
              </div>

              <button className="signup-submit">Save and Continue</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUpPage;
