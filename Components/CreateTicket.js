// import React from "react";
import "./CSS/createticket.css";
import "./Attachment";
import App from "./Attachment";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function CreateTicket() {

    const [issueSummary, setIssueSummary] = useState('')
    const [issueDescription, setIssueDescription] = useState('')
    const [selectedProject, setSelectedProject] = useState('');
    const [selectTicketType, setTicketType] = useState('');
    const [selectedAtachment, setSelectedAtachment] = useState();
    // const [isFilePicked, setIsFilePicked] = useState(false);
    const [accesToken, setAccesToken] = useState('');
    const [cloudId, setCloudId] = useState('');
    const [projectList, setListOfProject] = useState([]);
    const [projectKey, setProKey] = useState('');
    
    const location = useLocation();
    useEffect(() => {
        const getListOfProjects = async () => {
        const queryParams = new URLSearchParams(location.search);
      // recieving Parameters
        const recievedToken = queryParams.get('token');
        const recievedAccId = queryParams.get('accountId');
        setAccesToken(recievedToken);
        setCloudId(recievedAccId);

        console.log('ctt ',recievedToken);
        console.log('ctaId',recievedAccId);
        //Create issue request
        const url = `https://api.atlassian.com/ex/jira/` + recievedAccId;
        const finalurls = url + `/rest/api/3/project`;
       console.log('urls are', finalurls);
        const response = await fetch(finalurls,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${recievedToken}`,
              'Content-Type': 'application/json',
            },
           
          }
        );
      
        if (response.ok) {
          const data = await response.json();
          console.log('Project list: ',data);
          setListOfProject(data);
          // alert('Congratulations you got list of Projects!');
        }  
        else {
        console.error('Failed to load projects');
        }      
      }; 
      
      getListOfProjects();
    }, []);

// create Issue form
 const createIssues = async (issueData) => {
  
  const url = `https://api.atlassian.com/ex/jira/` + cloudId;
  const finalurls = url + `/rest/api/3/issue`;
 console.log(finalurls);
 console.log('issue data ',JSON.stringify(issueData));
  const response = await fetch(finalurls,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accesToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(issueData),
    }
  );

  if (response.ok) {
    const data = await response.json();
    console.log('Issue created successfully',data);
    alert('Issue created Sucessfully! Issue: ' + data.key);
  }  
  else {
  console.error('Failed to create Issue');
  }   
  window.location.reload();
     
}; 
// Attachments 
const postAttachmentToIssue = async () => {
  
  const url = `https://api.atlassian.com/ex/jira/` + cloudId;
  const finalurls = url + `/rest/api/3/issue/SDT-21/attachments`;
  // const formData = new FormData();
  console.log('file is', selectedAtachment)
  // formData.append('file', selectedAtachment);
  const response = await fetch(finalurls,
    {
      method: 'POST',
      headers: {
      'Content-Type': 'multipart/form-data',
        Authorization : `Bearer ${accesToken}`,
       'Accept': 'application/json',
       'X-Atlassian-Token':'nocheck', 
      },
       file:{
       'file' :selectedAtachment,
       }
    }
  );

  if (response.ok) {
    const data = await response.json();
    console.log('Attachment posted successfully',data);
    alert('Attached Sucessfully!');
  }  
  else {
  console.error('Failed to post attchment');
  }   
  // window.location.reload();
     
}; 
// establish Issue Data recieved from form
const establishAnIssueData = {
  "fields": {
  "project": {
  "key": projectKey
  },
  "summary": issueSummary,
  "issuetype" : {
  "name" : selectTicketType
  },
  "description" : {
  "type": "doc",
  "version": 1,
  "content": [
  {
  "type": "paragraph",
  "content": [
  {
  "type": "text",
  "text" : issueDescription}]}]}}}

  // project key
  const handleProjectChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedProject(selectedValue);

    const selectedProject = projectList.find((project) => project.name === selectedValue);
    if (selectedProject) {
      setProKey(selectedProject.key);
    } else {
      setProKey('');
    }
  };

// on create button submit call
  
const submitForm = e => 
{
          e.preventDefault();
          if (selectedAtachment) {
            postAttachmentToIssue();
          } else {
            console.error('No file selected.');
          }
 
}
  return (
    <form onSubmit={submitForm}>
      <div className="container create-ticket">
        <p className="text">Create Ticket</p>
        <div className="dropdown">
          <label className="label-text">Projects*</label>
          <select className="dropdown-text" value={selectedProject} onChange={handleProjectChange}>

            {projectList.map((project) => (
              <option key={project.key} value={project.name}>
                {project.name}
              </option>
            ))}
          </select>

      </div>
      <hr />
      <div className="text-field">
      <label className="label-text">Summary*</label>
      <input className="ip-text" name="Summary" type="text" onChange={event => setIssueSummary(event.target.value)} 
      value={issueSummary}/>
      </div>
      <hr />
      <div className="dropdown">
        <div className="text-set">
          <label className="label-text">Ticket Type*</label>
        </div>
  <select className="dropdown-text ticket-type" value={selectTicketType} onChange={event => setTicketType(event.target.value)}>
  <option value="Bug">Bug</option>
  <option value="Story">Story</option>
  <option value="Task">Task</option>
  <option value="Epic">Epic</option>
  <option value="Improvement">Improvement</option>
  <option value="Sub-task">Sub-task</option>
 </select>
      </div>
      <hr />
      <div className="description-text">
        <label className="label-text">Description*</label>
        <textarea className="textarea" rows="7" cols="100" placeholder="Issue Description here"
        name="Description" type="text" onChange={event => setIssueDescription(event.target.value)} 
        value={issueDescription}
        ></textarea>
      </div>
    <div className="attachment">
			<input type="file" name="file"  onChange={event => setSelectedAtachment(event.target.files[0])} />
			{/* {isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>

				</div>
			) : 
      <div>
				{handleAttachmentSubmission}
			</div>
			}  */}
			
		</div>
      <div className="button-div">
       {/* <button className="create-btn" type="submit" onClick={createIssues.bind(null, establishAnIssueData)} >Create</button>  */}
       <button className="create-btn" type="submit">Create</button> 
     
      </div>
    </div>
    </form>
  );
}

export default CreateTicket;
