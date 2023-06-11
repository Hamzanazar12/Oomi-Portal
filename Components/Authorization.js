import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const JiraAPI = () => {

  let sendDisplayName = null;
 
  const location = useLocation();
  const receivedJiraCode = location.state;

  const navigate = useNavigate();
  useEffect(() => {
    const authorize = async () => {
      const response = await fetch(
        'https://auth.atlassian.com/oauth/token',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',  
          },
          body: JSON.stringify({
            "grant_type": "authorization_code","client_id": "DNNnDEM7C32nbuEBVahhXOrmtQaDKQ4e","client_secret": "ATOA0MqWGXQIWuXQAxlfJ3cpWoEesJPJN6BKRRrII3UhXEHTtELZzSARo7aLiq_U7uIk0A2843E0","code": receivedJiraCode,"redirect_uri": "http://localhost:3000/Callback/"
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log('t ',data.access_token);

        getcid(data.access_token);
      }  
      else {
        console.error('Failed to acess the token');
      }      
    };
    authorize();
    // navigate('/Support', { state: testDisplayName });
  }, []);

  const getcid = async (token) => { 
      const response = await fetch(
        `https://api.atlassian.com/oauth/token/accessible-resources`,
        {
          method: 'Get',
          headers: {
            'Content-Type': 'application/json',
             Authorization : `Bearer ${token}`,
            'Accept': 'application/json'
          },
        }

      );
      if (response.ok)
      {
      const data = await response.json();
      console.log(data[0].id,);
      
      fetchData(data[0].id, token);
      

      }
      else
      {
        console.error('Failed to get cloud id');
      }

  };

  const fetchData = async (cloudID, token) =>{
    const url = `https://api.atlassian.com/ex/jira/` + cloudID;
    const finalurls = url + `/rest/api/3/myself`;
    console.log('f ' + finalurls);
       const response = await fetch(finalurls, 
         {
           method :'Get',
         headers: {
           Authorization: `Bearer ${token}`,
           'Content-Type': 'application/json',
         },
         
       });
   
       if (response.ok) {
         const data = await response.json();       
         console.log(data)
         sendDisplayName =data.displayName;
         console.log('d ',sendDisplayName);
         navigate(`/Support?org=${sendDisplayName}&token=${token}&accountId=${cloudID}`);

       } 
       else {
         console.error('Failed to proceed user request');
       }
  }

};

export default JiraAPI;
