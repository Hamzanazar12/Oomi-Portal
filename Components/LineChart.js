import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChartHeader from "./ChartHeader";
import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  BarElement,
  LineController,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js/auto";
import VTtable from "./VTtable";
chartjs.register(
  LineElement,
  BarElement,
  LineController,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend
);

const LineChart = () => {
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
      console.log(data);
      }
      else
      {
        console.error('Failed to get cloud id');
      }
    
    };

    getIssues();
    }, []);

    // labels:issues.map((issue) => issue.key),
    // datasets: [
    //   {
    //     label: "Time Spent",
    //     data: issues.map((issue) => {
    //       const timeSpentInSeconds = issue.fields.timespent; // Replace 'timeSpent' with the actual property name in your 'issues' data
    //       if (!timeSpentInSeconds) return 0; // Handle undefined or null values
  
    //       const minutes = Math.floor(timeSpentInSeconds / 60);
    //       return minutes;
    //     }),
    
  const state = {
    labels:issues.map((issue) => issue.key),
    datasets: [
      // {
      //   label: "Time Spent",
      //   data:  issues.map((issue) => {
      //           const timeSpentInSeconds = issue.fields.timespent; // Replace 'timeSpent' with the actual property name in your 'issues' data
      //           if (!timeSpentInSeconds) return 0; // Handle undefined or null values
        
      //           const minutes = Math.floor(timeSpentInSeconds / 60);
      //           return minutes;
      //         }),
      //   backgroundColor: ["#ffc981"],
      //   borderColor: ["#ffc981"],
      //   border: "none",
      //   borderCapStyle: "butt",
      //   type: "line",
      //   tension: 0.4,
      // },
      {
        label: "Ticket",
        data: issues.map((issue) => {
                const timeSpentInSeconds = issue.fields.timespent; // Replace 'timeSpent' with the actual property name in your 'issues' data
                if (!timeSpentInSeconds) return 0; // Handle undefined or null values
        
                const minutes = Math.floor(timeSpentInSeconds / 60);
                return minutes;
              }),
        backgroundColor: [" #8bc682"],

        type: "bar",
        fill: true,
        spanGaps: true,
      },
      
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {},
    },
    interaction: {
      mode: "index",
    },
 
  };

  return (
    <div>
      <ChartHeader />
      <div style={{ width: "60rem", height: "30rem", marginLeft: "15rem" }}>
        <Bar data={state} options={options}></Bar>
      </div>
      <VTtable />
    </div>
  );
};

export default LineChart;
