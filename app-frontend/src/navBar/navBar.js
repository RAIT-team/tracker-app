import React, { Component, useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";
import profileIcon from "../images/profile.png";
import whoopIcon from "../images/whoop-icon.png";
import logoutIcon from "../images/logout.png";

let navBarWidth = 0;
function NavBar() {
  let [isSidebarOpen, setSideBar] = useState(true);

  const toggleSidebar = () => {
    setSideBar((prevState) => !isSidebarOpen);
  };

  let icon_text_style = isSidebarOpen
    ? { display: "none" }
    : {
        display: "block",
      };

  const elementRef = useRef(null);

  useEffect(() => {
    // Access and measure the element here
    if (elementRef.current) {
      navBarWidth = elementRef.current.offsetWidth; // Update the module-level width variable
      console.log(`Width: ${navBarWidth}px`);
    }
  }, []);
  return (
    <div className="mama">
      <div className="sidebar" ref={elementRef}>
        <div class="hamburger" id="hamburger" onClick={toggleSidebar}>
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <div className="icon-container">
          <div className="icon profile-icon">
            <img alt="profileIcon" src={profileIcon} width="50" height="50" />
            <span id="icon-text" style={icon_text_style}>
              Profile
            </span>
          </div>
          <div className="icon whoop-icon">
            <img alt="whoop-icon" src={whoopIcon} width="50" height="50" />
            <span id="icon-text" style={icon_text_style}>
              My Whoop
            </span>
          </div>
          <div className="icon logout-icon">
            <img alt="logout-icon" src={logoutIcon} width="50" height="50" />
            <span id="icon-text" style={icon_text_style}>
              Logout
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
export { navBarWidth };
