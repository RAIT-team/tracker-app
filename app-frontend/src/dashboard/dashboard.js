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
  const [isVisibleHello, setIsVisibleHello] = useState(false);
  const [isVisibleDave, setIsVisibleDave] = useState(false);
  const [isNavWidth, setisNavWidth] = useState(0);

  useEffect(() => {
    setIsVisibleHello(true);

    const timeout = setTimeout(() => {
      setIsVisibleDave(true);
    }, 1000); // 1.5 seconds delay before Dave appears after Hello

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    setisNavWidth(navBarWidth);
  }, []);

  return (
    <div className="dashboard-container">
      <div className="greeting">
        <span className={`word ${isVisibleHello ? "fade-in" : ""}`}>Hello</span>
        <span className={`word ${isVisibleDave ? "fade-in" : ""}`}>Dave</span>
      </div>
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
          <a href="/risk" id="risk-link">
            <div className="placeholder risk">
              <FaExclamationTriangle size={72} />

              <span>Current Risk</span>
            </div>
          </a>
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
