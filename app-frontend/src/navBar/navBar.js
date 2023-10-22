import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from "react-icons/fa"; // Import the required icons
import "./navBar.css";
import whoopIcon from "../images/whoop-icon.png";

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
            <FaUser size={40} color="black" /> {/* FontAwesome profile icon */}
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
            <FaSignOutAlt size={40} color="black" />
            {/* FontAwesome logout icon */}
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
