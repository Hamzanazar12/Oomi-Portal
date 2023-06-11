import React from "react";
import "./CSS/viewticket.css";
import VTHeader from "./VTHeader";
import Filter from "./Filter";
import VTtable from "./VTtable";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewTicket() {

  const [issues, setIssues] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const recievedToken = queryParams.get('token');
  const recievedAccId = queryParams.get('accountId');
  const navigate = useNavigate();
    useEffect(() => {
      // recieving Parameters
    
      console.log('vtt ', recievedToken);
      console.log('vtaId', recievedAccId);
     
    
    const getIssues = async () => { 
    const url = `https://api.atlassian.com/ex/jira/` + recievedAccId;
   
    // const finalurls = url + `/rest/api/2/search?jql=assignee=currentuser()`;
    const finalurls = url + `/rest/api/2/search?jql=project=OSD`;
     console.log('f', finalurls);
      const response = await fetch(finalurls,
        {
          method: 'Get',
          headers: {
            'Content-Type': 'application/json',
             Authorization : `Bearer ${recievedToken}`,
            'Accept': 'application/json'
          },
        }
    
      );
      if (response.ok)
      {
      const data = await response.json();
      alert('Issue fetched sucessfully!');
      setIssues(data.issues);
      console.log(data);
      }
      else
      {
        console.error('Failed to get cloud id');
      }
    
    };

    getIssues();
    }, []);

    //create ticket
    const handleCreateTicketButtonClick = () => {
      navigate(`/CreateTicket?token=${recievedToken}&accountId=${recievedAccId}`);
    };
  const formatDate = (dateAndTime)=>
  {
   
    const formatThisDate = new Date(dateAndTime);
    const year = formatThisDate.getFullYear();
    const month = formatThisDate.getMonth() + 1;
    const day = formatThisDate.getDate();
    const issueDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    return issueDate;
  }

const  FormatTime=(seconds)=>
 {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
 
  if (hours === 0 && minutes === 0) {
    return '';
  } 
  else if (hours === 0) 
  {
    return `${minutes}m`;
  } else 
  {
    return `${hours}h ${minutes}m`;
  }
 
}
  return (
    <>
       
      <div className="vt-main-div">
        <div className="view-ticket-CBsec">
           <button className="view-ticket-btn" onClick={handleCreateTicketButtonClick}>Create Tickets</button>
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
         {/* \\starting view Ticket Table  */}
        <div>
            <div className="ticket-view">
            <p className="table-caption">Tickets</p>
            <div className="updated-ticket-table">
              <table className="table-div">
                <thead>
                  <tr className="header-row">
                    <th>Key</th>
                    <th>Summary</th>
                    <th>Type</th>
                    <th>Raised</th>
                    <th>Update</th>
                    <th>Time spent</th>
                    <th>Status</th>
                  </tr>
                </thead>
                
                {issues.map((issue) => (
                    <tbody>
                    <tr>
                      {/* <td className="td-id">{issue.key}</td> */}
                      <td className="td-id">
                      {/* <Link to={`/TicketDetail/${issue.key}`}>{issue.key}</Link> */}
                      <Link to={`/TicketDetail/${issue.key}/${recievedToken}/${recievedAccId}`}>{issue.key}</Link>
                      </td>
                      <td> {issue.fields.summary}</td>
                      <td>{issue.fields.issuetype.name}</td>
                      <td>{formatDate(issue.fields.created)} </td>
                      <td>{formatDate(issue.fields.updated)} </td>
                      <td> {FormatTime(issue.fields.timespent)}</td>
                      <td>
                        <label className="td-btn">{issue.fields.status.name}</label>
                      </td>
                    </tr>
                  </tbody>
            ))}
              </table>
            </div>
          </div>
    </div>
      </div>
    </>
  );
}

export default ViewTicket;
