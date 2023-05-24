import React from 'react';

const LoginPage = () => {
  const handleJiraLogin = () => {
    const YOUR_USER_BOUND_VALUE='ATOA92gGVohHIv75lbc2Pa6GO8fRaFMhl-v_Cg0iJ_AKqjUxN3omxujQ51HYN9wRhOwp7CB0EFE4'
    // Redirect the user to the Jira authorization URL
    window.location.href = 
    `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=nrzDBjOyxv31LJnLgR8dGnGgiW4VEff5&scope=read%3Ame&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FCallback&state=${YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent`;
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleJiraLogin}>Log in with Jira</button>
    </div>
  );
};

export default LoginPage;
