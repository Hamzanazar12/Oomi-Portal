import React from "react";
import "./CSS/ticket-detail.css";
import "./Comments.js";
import CommentSec from "./Comments.js";
import CommentsView from "./CommentsView";

function TicketDetail() {
  return (
    <>
      <div className="ticket-detail">
        <div className="ticket-text">
          <h1>
            CITMA-723: [RFA] OSD-7155 - Pull off of member data from preside
          </h1>
          <p>
            <b>Support (Contract)</b> - Standard
          </p>
          <p>Raised by Citma Support 17 Mar 2023 16:32 | Time spent 30m</p>
          <hr />
          <p>
            Hi I am working on doing a data audit and it would be greate if we
            could get a copy of every user we have on preside so i can identify
            duplicate records and get a baseline of how clean our data is on
            preside.
            <br />
            <br />
            Thanks
          </p>
          <hr />
        </div>
        <div>
          <div className="ticket-status">
            <h3>Status: Ready for action</h3>
            <input
              className="checkbox-hide"
              type="checkbox"
              id="ticket-updates"
              name="ticket-updates"
            ></input>
            <label for="ticket-updates" className="label-text">
              Email ticket updates?
            </label>
          </div>
        </div>
      </div>
      <div>
        <CommentSec />
        <CommentsView />
      </div>
    </>
  );
}

export default TicketDetail;
