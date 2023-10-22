import React, { useState, useEffect } from "react";
import "./risk.css";

function Risk() {
  const [avgBPM, setAvgBPM] = useState(70);
  const [oxygenSat, setOxygenSat] = useState(98);
  const [sleepAmount, setSleepAmount] = useState(9746 / 60 / 60);

  useEffect(() => {
    // Calculate and label the result for Exercise Level
    const circle1 = document.getElementById("circle1");
    const data1 = document.getElementById("data1");
    const highInt = 1451 * 1.5;
    const totalInt = highInt + 530;
    const isTotalGreaterThan3600 = totalInt > 3600;
    const isTotalLessThanOrEqualTo1800 = totalInt <= 1800;

    if (isTotalGreaterThan3600) {
      circle1.style.backgroundColor = "#05BA38"; // Set color to green
      data1.innerHTML = "High"; // Set text to "High"
    } else if (!isTotalLessThanOrEqualTo1800) {
      circle1.style.backgroundColor = "#CDD202"; // Set color to yellow
      data1.innerHTML = "Medium"; // Set text to "Medium"
    } else {
      circle1.style.backgroundColor = "#FF7A00"; // Set color to orange
      data1.innerHTML = "Low"; // Set text to "Low"
    }

    // Calculate and label the result for Average BPM
    const circle2 = document.getElementById("circle2");
    const data2 = document.getElementById("data2");

    if (avgBPM >= 67 && avgBPM <= 100) {
      circle2.style.backgroundColor = "#05BA38"; // Set color to green
      data2.innerHTML = "Healthy"; // Set text to "Healthy"
    } else {
      circle2.style.backgroundColor = "#FF7A00"; // Set color to orange
      data2.innerHTML = "At-Risk"; // Set text to "At-Risk"
    }

    // Calculate and label the result for Oxygen Saturation
    const circle3 = document.getElementById("circle3");
    const data3 = document.getElementById("data3");

    if (oxygenSat >= 92) {
      circle3.style.backgroundColor = "#05BA38"; // Set color to green
      data3.innerHTML = "Healthy"; // Set text to "Healthy"
    } else {
      circle3.style.backgroundColor = "#FF7A00"; // Set color to orange
      data3.innerHTML = "At-Risk"; // Set text to "At-Risk"
    }

    // Calculate and label the result for Sleep Health
    const circle4 = document.getElementById("circle4");
    const data4 = document.getElementById("data4");

    if (sleepAmount >= 7) {
      circle4.style.backgroundColor = "#05BA38"; // Set color to green
      data4.innerHTML = "Healthy"; // Set text to "Healthy"
    } else if (sleepAmount >= 4 && sleepAmount < 7) {
      circle4.style.backgroundColor = "#CDD202"; // Set color to yellow
      data4.innerHTML = "Strained"; // Set text to "Strained"
    } else {
      circle4.style.backgroundColor = "#FF7A00"; // Set color to orange
      data4.innerHTML = "Poor"; // Set text to "Poor"
    }
  }, [avgBPM, oxygenSat, sleepAmount]);

  return (
    <div className="body-container">
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
        <div className="circle-button" id="circle4">
          <div className="circle-text">Sleep Health</div>
          <div className="data-box" id="data4">
            TBD
          </div>
        </div>
      </div>
    </div>
  );
}

export default Risk;
