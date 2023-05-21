import React from "react";
import "./CSS/vtheader.css";

function VTHeader() {
  return (
    <>
      <div className="vtheader-div">
        <button className="vtheader-btn for-flex">
          <a>For your attention</a>
        </button>
        <button className="vtheader-btn for-flex">
          <a>With oomi</a>
        </button>
        <button className="vtheader-btn for-flex">
          <a>All tickets</a>
        </button>
      </div>
    </>
  );
}

export default VTHeader;
