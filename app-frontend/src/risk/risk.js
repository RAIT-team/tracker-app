import React, { useState, useEffect } from "react";
import "./risk.css";

function Risk() {
  const [avgBPM, setAvgBPM] = useState(70);
  const [oxygenSat, setOxygenSat] = useState(98);

  useEffect(() => {
    // Conditional logic for the first circle
    const circle1 = document.getElementById("circle1");
    const data1 = document.getElementById("data1");
    const highInt = 1451 * 1.5;
    const totalInt = highInt + 530;

    if (totalInt > 3600) {
      circle1.style.backgroundColor = "#05BA38"; // Set color to green
      data1.innerHTML = "High"; // Set text to "High"
    } else if (totalInt <= 1800) {
      circle1.style.backgroundColor = "#FF7A00"; // Set color to orange
      data1.innerHTML = "Low"; // Set text to "Low"
    } else {
      circle1.style.backgroundColor = "#CDD202"; // Set color to yellow
      data1.innerHTML = "Medium"; // Set text to "Medium"
    }

    // Conditional logic for the second circle
    const circle2 = document.getElementById("circle2");
    const data2 = document.getElementById("data2");

    if (avgBPM >= 67 && avgBPM <= 100) {
      circle2.style.backgroundColor = "#05BA38"; // Set color to green
      data2.innerHTML = "Healthy"; // Set text to "Healthy"
    } else {
      circle2.style.backgroundColor = "#FF7A00"; // Set color to orange
      data2.innerHTML = "At-Risk"; // Set text to "At-Risk"
    }

    // Conditional logic for the third circle
    const circle3 = document.getElementById("circle3");
    const data3 = document.getElementById("data3");

    if (oxygenSat >= 92) {
      circle3.style.backgroundColor = "#05BA38"; // Set color to green
      data3.innerHTML = "Healthy"; // Set text to "Healthy"
    } else {
      circle3.style.backgroundColor = "#FF7A00"; // Set color to orange
      data3.innerHTML = "At-Risk"; // Set text to "At-Risk"
    }
  }, [avgBPM, oxygenSat]);

  return (
    <div className="button-container">
      <div className="circle-button" id="circle1">
        <div className="circle-text">Exercise Level</div>
        <div className="data-box" id="data1">
          TBD
        </div>
      </div>
      <div className="circle-button" id="circle2">
        <div className="circle-text">Average BPM</div>
        <div className="data-box" id="data2">
          TBD
        </div>
      </div>
      <div className="circle-button" id="circle3">
        <div className="circle-text">Oxygen Saturation</div>
        <div className="data-box" id="data3">
          TBD
        </div>
      </div>
    </div>
  );
}

export default Risk;
