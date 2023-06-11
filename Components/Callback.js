import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import JiraAPI from "./Authorization";

const Callback = () => {

   let initialCode;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the authorization code from the query parameters
    const searchParams = new URLSearchParams(location.search);
    initialCode = searchParams.get('code');
    console.log('this is jira initial code value ' + initialCode );
    navigate('/Authorization', { state: initialCode });
  }, [location.search, navigate]);

};

export default Callback;
