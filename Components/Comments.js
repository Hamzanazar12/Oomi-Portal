import React from "react";
import "./CSS/comment.css";
import App from "./Attachment";

function CommentSec() {
  return (
    <>
      <div>
        <div>
          <p className="comment-heading">Comments</p>
        </div>
        <div>
          <input
            className="CB-hide"
            type="checkbox"
            id="ticket-updates"
            name="ticket-updates"
          ></input>
          <label for="ticket-updates">Request to close this ticket</label>
          <br />
          <br />
          <textarea className="comment-txtarea" rows={8}></textarea>
        </div>
        <div>
          <p>Attachment</p>
          <App />
        </div>
        <div className="comment-btn">
          <button>Comment</button>
        </div>
      </div>
    </>
  );
}

export default CommentSec;
