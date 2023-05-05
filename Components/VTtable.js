import React from "react";
import "./CSS/vt-table.css";

function VTtable() {
  return (
    <>
      <div className="ticket-view">
        <p className="table-caption">Displaying 1-3 of 3 tickets</p>
        <div className="updated-ticket-table">
          <table className="table-div">
            <tr className="header-row">
              <th>Key</th>
              <th>Summary</th>
              <th>Type</th>
              <th>Raised</th>
              <th>Update</th>
              <th>Time spent</th>
              <th>Status</th>
            </tr>
            <tr>
              <td className="td-id">CITMA-740</td>
              <td>
                [RFA OSD-7155- Pull off <br />
                of member data from Preside]
              </td>
              <td>Support(Contract)</td>
              <td>
                17/Mar/2023 <br />
                4:32pm
              </td>
              <td>1 hour ago</td>
              <td> 30m</td>
              <td>
                <label className="td-btn">Ready for action</label>
              </td>
            </tr>
            <tr>
              <td className="td-id">CITMA-742</td>
              <td>
                [FE RFA] [CITMA]- <br />
                Shorthand - OSD-3501
              </td>
              <td>Support(Contract)</td>
              <td>
                6 days ago <br />
                4:23 PM
              </td>
              <td>3 hour ago</td>
              <td>19m</td>
              <td>
                <label className="td-btn">Ready for action</label>
              </td>
            </tr>
            <tr>
              <td className="td-id">CITMA-688</td>
              <td>
                [APL] ST2-713-ITEM 1<br />
                Email filter conditions in <br />
                expression library{" "}
              </td>
              <td>Chargeable Issue</td>
              <td>
                26/May/2022 <br />
                04:40 PM
              </td>
              <td>
                5 days ago <br />
                8:19 AM
              </td>
              <td></td>
              <td>
                <label className="td-btn">Releasable</label>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
}

export default VTtable;
