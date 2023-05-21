import React from "react";
import "./CSS/support.css";
import Supportticket from "./Support-ticket.js";
import Summary from "./Summary";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="support-sec">
      <p className="support-text">Support</p>
      <hr />
      <div className="support-details">
        <div className="S-Link">
          <a href="#CITMA" className="CITMA-link">
            CITMA - Chartered Institute of Trade Mark Attorneys
          </a>
        </div>
        <div className="S-btn">
          <Link to="/ViewTicket">
            <button className="ticket-btn">View Tickets</button>
          </Link>
          <Link to="/CreateTicket">
            <button className="ticket-btn">Create Tickets</button>
          </Link>

          <input
            className="CB-hide"
            type="checkbox"
            id="ticket-updates"
            name="ticket-updates"
          ></input>
          <label for="ticket-updates">Email ticket updates?</label>
        </div>
      </div>
      <hr />
      <Supportticket />
      <Summary />
    </div>
  );
};
export default Support;
