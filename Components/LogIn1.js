
 const LoginPage = () => {
  const handleJiraLogin = () => {
  const YOUR_USER_BOUND_VALUE='ATOB0EFE4GHSHHJHJ' // it could be any random value
    // Redirect the user to the Jira authorization URL
    window.location.href = 
    `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=DNNnDEM7C32nbuEBVahhXOrmtQaDKQ4e&scope=read%3Ajira-work%20manage%3Ajira-project%20manage%3Ajira-configuration%20read%3Ajira-user%20write%3Ajira-work%20manage%3Ajira-webhook%20manage%3Ajira-data-provider&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2FCallback%2F&state=${YOUR_USER_BOUND_VALUE}&response_type=code&prompt=consent`;
  };
  handleJiraLogin();
};

export default LoginPage;
