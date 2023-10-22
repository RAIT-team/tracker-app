import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navBar.css";
import profileIcon from "../images/profile.png";
import whoopIcon from "../images/whoop-icon.png";
import logoutIcon from "../images/logout.png";

let navBarWidth = 0;

function NavBar() {
  let [isSidebarOpen, setSideBar] = useState(false); // Initially set to false because sidebar starts collapsed

  const toggleSidebar = () => {
    setSideBar(!isSidebarOpen);
  };

  let icon_text_style = isSidebarOpen
    ? { display: "block" }
    : { display: "none" };

  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      navBarWidth = elementRef.current.offsetWidth;
      console.log(`Width: ${navBarWidth}px`);
    }
  }, []);

  return (
    <div className="mama">
      <div className="sidebar" ref={elementRef}>
        <div className="hamburger" onClick={toggleSidebar}>
          {isSidebarOpen ? (
            <FaTimes size={30} color="white" />
          ) : (
            <FaBars size={30} color="white" />
          )}
        </div>
        <div className="icon-container">
          <div className="icon profile-icon">
            <img alt="profileIcon" src={profileIcon} />
            <span id="icon-text" style={icon_text_style}>
              Profile
            </span>
          </div>
          <div className="icon whoop-icon">
            <img alt="whoop-icon" src={whoopIcon} />
            <span id="icon-text" style={icon_text_style}>
              My Whoop
            </span>
          </div>
          <div className="icon logout-icon">
            <img alt="logout-icon" src={logoutIcon} />
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
