import React, { Component } from "react";
import "./landingpage.css";
// import NavBar from "../navBar";

class Landingpage extends Component {
  render() {
    return (
      <div className="landingpage-container">
        <nav className="navbar">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#login">Login</a>
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
                Elevate Your Health With Instant Data for Safer, Cleaner Spaces.
              </p>
            </div>
            <button className="rounded-button"> Start Your Journey Now </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Landingpage;
