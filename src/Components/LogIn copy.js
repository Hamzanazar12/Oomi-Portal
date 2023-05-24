import { useEffect, useState } from "react";
import { Axios } from "axios";

import { toast } from "react-toastify";



// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import "./CSS/login.css";
import { BrowserRouter as Router, Route, Routes, Link,useNavigate} from "react-router-dom";
function Login() {

  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");

  
//   const usenavigate=useNavigate();

//   useEffect(()=>{
// sessionStorage.clear();
//   },[]);

//   // const ProceedLogin = (e) => {
      
//   //     if (validate()) {
//   //         ///implentation
//   //         console.log('proceed');
//   //         fetch("https://ruqiahussain.atlassian.net/rest/api/3/user?accountId=712020:ab45fef9-7ae3-410b-8737-f36ce7e00f6a",
//   //         { username,
//   //           password,},
//   //         {
//   //           method:'POST',
//   //           headers:{'Accept': 'application/json',
//   //           'Content-Type': 'application/json',
//   //           },
//   //         } ).then
//   //         ((res) => {
//   //             return res.json();
//   //         }).then((resp) => {
//   //             //console.log(resp)
//   //             if (Object.keys(resp).length === 0) {
//   //                 toast.error('Please Enter valid username');
//   //             } else {
//   //                 if (resp.password === password) {
//   //                     toast.success('Success');
//   //                     sessionStorage.setItem('username',username);
//   //                     sessionStorage.setItem('userrole',resp.role);
//   //                     usenavigate('/')
//   //                 }else{
//   //                     toast.error('Please Enter valid credentials');
//   //                 }
//   //             }
//   //         }).catch((err) => {
//   //             toast.error('Login Failed due to :' + err.message);
//   //         });
//   //     }
//   // }

//   const handleSubmit = () => {
      
//     var token='UnVxaWEuY29kZUBnbWFpbC5jb206QVRBVFQzeEZmR0YwS1J3VkVMZEZua2VUZVoxdGVGN1UwMy0tblAwQTJpVk56U2o3NHZJeGJpZy1jNHdSbWw2cWFmSzF2d3J2a2JOM1dkSWpBVXJOdmFoYkJUTFAyWE05ajdPQ2l5U3V1WW9EaG5vNFZ0RDhiQm81S1pOd1JXNXJKOWw2R2JXUnlWU0g5WWdFWlVDUjdZeTVCczZkUHh3TUhPNDJJeUtQanBCRFhYNERkaWl5Q1p3PTE1OEJGOTQ5'
//     if (validate()) {
//     ///implentation
//     console.log('proceed');
//     console.log(username)
//     let inputobj={"username": username,
//     "password": password};
//     fetch("https://ruqiahussain.atlassian.net/rest/auth/1/session",{
//       'username':username,
//       'password':password
//     },
  
   
//     {
//         method:'POST',
        
//         headers:{ 'Accept': 'application/json',
//         'credentials': "include",
//         'Content-Type': 'application/json',
//         'Authorization':`Basic ${token}`,
        
     


// 'Access-Control-Allow-Methods':' POST, PUT, PATCH, GET, DELETE, OPTIONS',

// 'Access-Control-Allow-Headers': 'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization'


        
       
        
          
      
//       },
//         body:JSON.stringify({username,password})
//     }).then((res) => {
//         return res.json();
        
//     }).then((resp) => {
//         console.log(resp)
//         if (Object.keys(resp).length === 0) {
//             toast.error('Login failed, invalid credentials');
//         }else{
//              toast.success('Success');
            
//            usenavigate('/Support')
//         }
        // if (Object.keys(resp).length === 0) {
        //     toast.error('Please Enter valid username');
        // } else {
        //     if (resp.password === password) {
        //         toast.success('Success');
        //         sessionStorage.setItem('username',username);
        //         usenavigate('/')
        //     }else{
        //         toast.error('Please Enter valid credentials');
        //     }
        // }
  //   }).catch((err) => {
  //       toast.error('Login Failed due to :' + err.message);
  //   });
  
  // }}
  // const validate = () => {
  //   let result = true;
  //   if (username === '' || username === null) {
  //       result = false;
  //       toast.warning('Please Enter Username');
  //   }
  //   if (password === '' || password === null) {
  //       result = false;
  //       toast.warning('Please Enter Password');
  //   }
  //   return result;}

  // const handleSubmit = async () => {
    
  //   try {
      
  //     // Make API request to authenticate
  //     const response = await Axios.post(
  //       "https://ruqiahussain.atlassian.net/rest/auth/1/session",
  //       {
  //         username,
  //         password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     // Handle successful authentication
  //     if (response.status === 200) {
  //       const authToken = response.data.session.value;
  //       // Store the authentication token in your application's state or local storage
  //       // e.g., setAuthToken(authToken);
  //       console.log("Authentication successful");
  //     }
  //   } catch (error) {
  //     // Handle authentication error
  //     console.error("Authentication failed:", error);
  //   }
  // }; 

  
  return (
    <>
      <div className="section-wrap">
        <div className="login-wrap">
          <h1 class="">Log in to your account</h1>
          <p class="">
            To access and manage tickets in jira, please log into your account.
          </p>
          <div className="login-form">
            <div class="fv-form-row">
              <label class="fv-form-label" for="fname">
                Username
              </label>
              <input
              onChange={(e)=>setUsername(e.target.value)}
              value={username}
                class="fv-input-field"
                type="text"
                id="fname"
                name="fname"
                required="required"
              ></input>
              <span id="for_fname" class="required-error">
                First name is required.
              </span>
            </div>
            <div class="fv-form-row mt-2">
              <label class="fv-form-label" for="password">
                Password
              </label>
              <input onChange={(e)=>setPassword(e.target.value)}
              value={password}
                class="fv-input-field"
                type="password"
                id="password"
                name="password"
                required="required"
              ></input>
              <span id="for_fname" class="required-error">
                First name is required.
              </span>
            </div>
            <div class="fv-flex-action mt-3">
              <Link to="/Support">
                <a href="#" class="fv-button fv-primary-button fv-resp-w100">
                  Log in
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
