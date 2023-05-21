import React from "react";
import "./CSS/support-ticket.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
const Supportticket = () => {
  return (
    <>
      <div className="support-ticket">
        <p className="ST-text">Recently updated support tickets:</p>
      </div>
      <div className="ticket">
        <table className="ticket-table">
          <tr className="th-row">
            <th>Ticket</th>
            <th>Summary</th>
            <th>Type</th>
            <th>Update</th>
            <th>Time spent</th>
            <th>Status</th>
          </tr>
          <tr>
            <td className="td-id">
              <Link to="/TicketDetail">CITMA-723</Link>
            </td>
            <td>OSD-5358-Strange pro...</td>
            <td>support(Contract)</td>
            <td>9 Dec 2022 - 16:52</td>
            <td className="td-time-align">
              1h
              <br /> 20m
            </td>
            <td>
              <label className="ST-td-btn">QA</label>
            </td>
          </tr>
          <tr>
            <td className="td-id">CITMA-698</td>
            <td>ST2-829-Shorthand</td>
            <td>Chargeable issue</td>
            <td>9 Dec 2022 - 16:50</td>
            <td className="td-time-align"></td>
            <td>
              <label className="ST-td-btn">Client Input Required</label>
            </td>
          </tr>
          <tr>
            <td className="td-id">CITMA-722</td>
            <td>Preside-'upcoming...</td>
            <td>support(Contract)</td>
            <td>2 Dec 2022 - 09:58</td>
            <td className="td-time-align">47m</td>
            <td>
              <label className="ST-td-btn">QA</label>
            </td>
          </tr>
          <tr>
            <td className="td-id">CITMA-686</td>
            <td>OSD-2900-Google-Analytics</td>
            <td>Chargeable issue</td>
            <td>16 Nov 2022 - 08:19</td>
            <td className="td-time-align"></td>
            <td>
              <label className="ST-btn-done">Done</label>
            </td>
          </tr>
          <tr>
            <td className="td-id">CITMA-714</td>
            <td>OSD-4133-Removal of...</td>
            <td>support(Contract)</td>
            <td>11 Nov 2022 - 16:23</td>
            <td className="td-time-align">1h 1m</td>
            <td>
              <label className="ST-btn-done">Done</label>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};
export default Supportticket;
