import React, { Component } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

class NavBar extends Component {
  state = {
    isSidebarOpen: false,
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isSidebarOpen: !prevState.isSidebarOpen,
    }));
  };

  render() {
    return (
      <div>
        {this.state.isSidebarOpen ? (
          <FaTimes
            className="menu-icon"
            color="#63d0d6"
            onClick={this.toggleSidebar}
          />
        ) : (
          <FaBars
            className="menu-icon"
            color="#63d0d6"
            onClick={this.toggleSidebar}
          />
        )}
        {this.state.isSidebarOpen && (
          <div className="sidebar">{/* Your sidebar content goes here */}</div>
        )}
      </div>
    );
  }
}

export default NavBar;
