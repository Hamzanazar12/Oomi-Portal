// import React from "react";
import "./CSS/support.css";
import Supportticket from "./Support-ticket.js";
import Summary from "./Summary";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Support = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  // recieve parameters
  const receivedDisplayname = queryParams.get('org');
  const recievedToken = queryParams.get('token');
  const recievedAccId = queryParams.get('accountId');
  console.log('dn ',receivedDisplayname);
  console.log('t ',recievedToken);
  console.log('aId',recievedAccId);


  const handleCreateTicketButtonClick = () => {
    navigate(`/CreateTicket?token=${recievedToken}&accountId=${recievedAccId}`);
  };

  const handleViewTicketButtonClick = () => {
    navigate(`/ViewTicket?token=${recievedToken}&accountId=${recievedAccId}`);
  };

  return (
    <div className="support-sec">
      <p className="support-text">Support</p>
      <hr />
      <div className="support-details">
        <div className="S-Link">
          <a href="./Support" className="CITMA-link">
            {receivedDisplayname}
          </a>
        </div>
        <div className="S-btn">
            <button className="ticket-btn" onClick={handleViewTicketButtonClick}>View Ticket</button>
            <button className="ticket-btn" onClick={handleCreateTicketButtonClick}>Create Tickets</button>
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
      <Supportticket  />
      <Summary token={recievedToken}  accountId={recievedAccId} />
    </div>
  );
};
export default Support;
