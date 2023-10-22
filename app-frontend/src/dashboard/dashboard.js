import React, { useEffect, useState } from "react";
import NavBar from "../navBar/navBar";
import "./dashboard.css";
import { navBarWidth } from "../navBar/navBar";

import {
  FaMapMarkedAlt,
  FaChartBar,
  FaExclamationTriangle,
  FaBus,
  FaTree,
} from "react-icons/fa";

function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNavWidth, setisNavWidth] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    setisNavWidth(navBarWidth);
  }, []);
  return (
    <div className="dashboard-container">
      <div className={`greeting ${isVisible ? "fade-in" : ""}`}>Hello Dave</div>
      <NavBar />
      <div
        className="placeholder-section"
        style={{ marginLeft: `${isNavWidth}` }}
      >
        <div className="row">
          <div className="placeholder map">
            <FaMapMarkedAlt size={72} />
            <span>Air Map</span>
          </div>
          <div className="placeholder analytics">
            <FaChartBar size={72} />
            <span>Analytics</span>
          </div>
          <div className="placeholder risk">
            <FaExclamationTriangle size={72} />
            <span>Current Risk</span>
          </div>
        </div>
        <div className="row">
          <div className="placeholder transport">
            <FaBus size={72} />
            <span>Transport Mode</span>
          </div>
          <div className="placeholder footprint">
            <FaTree size={72} />
            <span>Carbon Footprint</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
