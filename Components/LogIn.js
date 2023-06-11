import React, { useEffect } from "react";
import axios from "axios";

const HandleLogin = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "/api/user?accountId=5b10ac8d82e05b22cc7d4ef5"
        );

        console.log(`Response: ${response.status} ${response.statusText}`);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <div>HandleLogin Component</div>;
};

export default HandleLogin;
