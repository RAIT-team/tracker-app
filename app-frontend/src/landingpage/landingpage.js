import React, { Component } from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";
import logo from "../logo.png";

class Landingpage extends Component {
  render() {
    return (
      <div className="landingpage-container">
        <nav className="navbar">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>

        <div className="hero">
          <div className="content-box">
            {" "}
            {/* New content box */}
            <div className="slogan">
              <h1>Cleaner Air, Healthier You</h1>
            </div>
            <div className="elevate">
              <p>
                Elevate Your Health With Instant Data for Safer and Cleaner
                Spaces.
              </p>
            </div>
            <a className="button-to-signup" href="/login">
              <div className="rounded-button">Start Your Journey Now</div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Landingpage;
