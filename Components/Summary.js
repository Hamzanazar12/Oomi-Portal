import React from "react";
import "./CSS/summary.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Summary = () => {
  return (
    <>
      <div className="summary">
        <p className="summary-text">
          Summary of support Status for Chartered Institute of Trade Mark
          Attorneys
        </p>
        <Link to="/LineChart">
          <button className="view-usage-btn">View usage details</button>
        </Link>
      </div>
      <div className="summary-table">
        <table className="S-table">
          <tr>
            <td>Last block purchased on:</td>
            <td> 28 Jul 2022 for 25.0 hours </td>
          </tr>
          <tr>
            <td>Total used in last 7 days:</td>
            <td>1.8 hours</td>
          </tr>
          <tr>
            <td>Total used in last 30 days:</td>
            <td>4.1 hours</td>
          </tr>
          <tr>
            <td>Available support allowance:</td>
            <td>7.2 hours</td>
          </tr>
          <tr>
            <td>Warranty hours logged:</td>
            <td>
              39.6 hours <br /> From 12 Oct 2018 to 1 Feb 2023
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default Summary;
