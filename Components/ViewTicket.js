import React from "react";
import "./CSS/viewticket.css";
import VTHeader from "./VTHeader";
import Filter from "./Filter";
import VTtable from "./VTtable";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function ViewTicket() {
  return (
    <>
      <div className="vt-main-div">
        <div className="view-ticket-CBsec">
          <Link to="/CreateTicket">
            <button className="view-ticket-btn">Create Tickets</button>
          </Link>

          <input
            className="VB-hide"
            type="checkbox"
            id="ticket-updates"
            name="ticket-updates"
          ></input>
          <label for="ticket-updates" className="checkbox-label">
            Email ticket updates?
          </label>
        </div>
      </div>
      <div>
        <VTHeader />
        <Filter />
        <VTtable />
      </div>
    </>
  );
}

export default ViewTicket;
