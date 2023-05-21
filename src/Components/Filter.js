import React from "react";
import "./CSS/filter.css";
import "bootstrap/dist/css/bootstrap.css";
import Calendar from "react-calendar";

function Filter() {
  return (
    <>
      <div className="filter-div">
        <div className="filter-sec">
          <label className="filter-txt">Status</label>
          <select className="select-option">
            <option value="" selected>
              select status
            </option>
            <option>For Client UAT</option>
            <option>Client Input Required</option>
          </select>
        </div>
        <div className="input-text filter-sec">
          <input type="text" placeholder="Raised by"></input>
        </div>
        <div className="filter-sec">
          <label for="start" className="filter-txt">
            From
          </label>
          <input type="date" id="start"></input>

          {/* <select className="select-option">
            <option>
             <input type="date" id="start"></input>
            </option>
          </select> */}
        </div>
        <div className="filter-sec">
          <label className="filter-txt">To</label>
          <select className="select-option">
            <option></option>
          </select>
        </div>
      </div>
      <div className="filter-div">
        <div className="filter-sec">
          <label className="filter-txt">Type</label>
          <select className="select-option">
            <option value="" selected>
              select type
            </option>
            <option>Chargeable Issue</option>
            <option>Support (Warranty)</option>
            <option>Support (Contract)</option>
          </select>
        </div>
        <div className="input-text filter-sec">
          <input type="text" placeholder="Keyword"></input>
        </div>
        <div className="filter-btn-div">
          <input
            className="Filter-button"
            type="button"
            value={"Filter"}
          ></input>
        </div>
      </div>
    </>
  );
}

export default Filter;
