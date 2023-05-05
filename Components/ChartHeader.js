import React from "react";
import "./CSS/ChartHeader.css";

const ChartHeader = () => {
  return (
    <div>
      <div className="title">
        <h1>Support report- Chartered Institute of Trade Mark Attorneys </h1>
      </div>
      <div className="Chart-Container">
        <div className="left">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "10rem",
              padding: "2rem",
            }}
          >
            <label style={{ textAlign: "left" }}>From</label>
            <select
              style={{ border: "none", borderBottom: "solid 2px #8f8282" }}
            >
              <option></option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "10rem",
              padding: "2rem 2rem 2rem 5px",
            }}
          >
            <label style={{ textAlign: "left" }}>To</label>
            <select
              style={{ border: "none", borderBottom: "solid 2px #8f8282" }}
            >
              <option></option>
            </select>
          </div>
        </div>
        <div className="right">
          <div className="range-Button">
            <div className="btn">
              <a>Set range</a>
            </div>
          </div>
          <div className="date-button">
            <a>Last 30 days</a>
            <a>Last 3 months</a>
            <a>Last year</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartHeader;
