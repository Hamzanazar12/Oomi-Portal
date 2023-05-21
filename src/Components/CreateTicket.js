import React from "react";
import "./CSS/createticket.css";
import "./Attachment";
import App from "./Attachment";

function CreateTicket() {
  return (
    <div className="create-ticket">
      <p className="text">Create Ticket</p>
      <div className="dropdown">
        <label className="label-text">Project*</label>
        <select className="dropdown-text">
          <option>CITMA - Chartered Institute of Trade Mark Attorneys</option>
        </select>
      </div>
      <hr />
      <div className="text-field">
        <input className="ip-text" type="text" value={"Summary*"} />
      </div>
      <hr />
      <div className="dropdown">
        <div className="text-set">
          <label className="label-text">Ticket Type*</label>
          <p>Ticket Type</p>
        </div>
        <select className="dropdown-text ticket-type">
          <option>Please Select</option>
        </select>
      </div>
      <hr />
      <div className="description-text">
        <label className="label-text">Description*</label>
        <textarea
          className="textarea"
          rows="7"
          cols="100"
          placeholder="
          
          *What were the steps you took to reacg the issue?
    
          *Please copy/paste an any error message or attach a screenshot
          
          *The url for issue
          
          *Impact of this issue on users and on bussiness"
        ></textarea>
      </div>
      <div className="attachment">
        <label className="label-text">Attachment*</label>
        <App />
      </div>
      <div className="button-div">
        <button className="create-btn">Create</button>
      </div>
    </div>
  );
}

export default CreateTicket;
