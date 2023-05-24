import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Callback = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the authorization code from the query parameters
    const searchParams = new URLSearchParams(location.search);
    const authorizationCode = searchParams.get('code');
    console.log("triggered")

    // Perform any necessary steps to exchange the authorization code for an access token
    // For example, you can make a POST request to your server-side endpoint

    // Once you have the access token, you can store it in local storage or state management
    // and use it for subsequent API requests to Jira

    // Redirect the user to the desired page, such as the dashboard
    navigate('/Support');
  }, [location.search, navigate]);

  return (
    
    <div>
     
      <h1>Loading...</h1>
    </div>
  );
};

export default Callback;
