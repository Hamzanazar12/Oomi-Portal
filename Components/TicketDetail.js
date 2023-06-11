import React from "react";
import "./CSS/ticket-detail.css";
import "./Comments.js";
import CommentSec from "./Comments.js";
import CommentsView from "./CommentsView";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import App from "./Attachment";

function TicketDetail() {

  // const {issueKey, acessToken, accountId} = useParams();
  const {issueKey, acessToken, accountId} = useParams();
  const [issueComments, setIssueComments] = useState([]);
  const [issueCommentBody, setIssueCommentBody] = useState('')
  const [singalIssue, setSingalIssue] = useState("");
  const [attachmentFile, setAttachmentFile] = useState(null);

 

  useEffect(() => {
    // recieving Parameters
    console.log('IK', issueKey)
    console.log('AI', accountId)
    console.log('AT', acessToken)
  
    getSingleIssueDetail();
  }, []);

  // get single issue comments
  const getSingleIssueDetail = async () => { 
    const url = `https://api.atlassian.com/ex/jira/` + accountId;
    const finalurls = url + `/rest/api/3/issue/`+issueKey;
    console.log('f', finalurls);
    const response = await fetch(finalurls,
      {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json',
           Authorization : `Bearer ${acessToken}`,
          'Accept': 'application/json'
        },
      }
  
    );
    if (response.ok)
    {
    const data = await response.json();
    console.log('data of single issue is: ',data);
    setSingalIssue(data);
    setIssueComments(data.fields.comment.comments);
    // testSingleIssue =data.fields.comment.comments;
   
    // console.log('Comment is ',data.fields.comment.comments[0].body.content[0].content[0].text )
    // console.log('Comment value set to ', comment )
    }
    else
    {
      console.error('Failed to get Issue');
    }
  
  };
//post comments for a Issue
const postIssueComments = async (commentBody) => { 
  const url = `https://api.atlassian.com/ex/jira/` + accountId;
  const finalurls = url + `/rest/api/2/issue/`+issueKey +`/comment` ;
  console.log('f', finalurls);
  const response = await fetch(finalurls,
    {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json',
         Authorization : `Bearer ${acessToken}`,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "body": commentBody
      }),
    }

  );
  if (response.ok)
  {
  const data = await response.json();
  console.log('comment you posted is: ',data);
  alert('Comment Postted sucessfully!');
  }
  else
  {
    console.error('Failed to get Issue');
  }
  getSingleIssueDetail();
};

//Send attachment to issue

// const postIssueAttachment = async () => { 
//   const url = `https://api.atlassian.com/ex/jira/` + accountId;
//   const finalurls = url + `/rest/api/2/issue/`+issueKey +`/attachments` ;
//   console.log('f', finalurls);
//   const response = await fetch(finalurls,
//     {
//       method: 'Post',
//       headers: {
//         'Content-Type': 'multiple/form-data',
//          Authorization : `Bearer ${acessToken}`,
//         'Accept': 'application/json',
//         'X-Atlassian-Token':'nocheck',
//       },
//       body: JSON.stringify({
//         'Type': 'File', 'file':'C:\testImg.jgp'
//       }),
//     }

//   );
//   if (response.ok)
//   {
//   const data = await response.json();
//   console.log('Attachment posted is: ',data);
//   alert('Attachment posted sucessfully!');
//   }
//   else
//   {
//     console.error('Failed to post Issue');
//   }
//   getSingleIssueDetail();
// };

const postIssueAttachment = async () => {
  try {
    const formData = new FormData();
    formData.append('file', attachmentFile);

    const url = `https://api.atlassian.com/ex/jira/${accountId}/rest/api/2/issue/${issueKey}/attachments`;
    const response = await fetch(url,formData, {
      method: 'Post',
      headers: {
        'Content-Type': 'multipart/form-data',
         Authorization : `Bearer ${acessToken}`,
        'Accept': 'application/json',
        'X-Atlassian-Token':'nocheck',
      },
     
    });

   if (response.ok)
    {

      console.log('Attachment posted:', response.data);
    alert('Attachment posted successfully!');

    }
    
  } catch (error) {
    console.error('Error posting attachment:', error);
  }

};

//Format date and time
const formatDate = (dateAndTime)=>
{
 
  const formatThisDate = new Date(dateAndTime);
  const year = formatThisDate.getFullYear();
  const month = formatThisDate.getMonth() + 1;
  const day = formatThisDate.getDate();
  const issueCommentDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  return issueCommentDate;
}

const formatTime = (dateAndTime)=>
{
 
  const formatThisDate = new Date(dateAndTime);
  const hours = formatThisDate.getHours();
  const minutes = formatThisDate.getMinutes();
  const seconds = formatThisDate.getSeconds();
  const issueCommentTime = `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  return issueCommentTime;
}

const handleAttachmentChange = (event) => {
  setAttachmentFile(event.target.files[0]);
  
};

  return (
    <>
      <div className="ticket-detail">
        <div className="ticket-text">
          <h1>
          {singalIssue.key} {singalIssue.id}
            {/* CITMA-723: [RFA] OSD-7155 - Pull off of member data from preside */}
          </h1>
          <p>
            <b>Support (Contract)</b> - Standard
          </p>
          <p>Raised by Citma Support 17 Mar 2023 16:32 | Time spent 30m</p>
          <hr />
          <p>
            Hi I am working on doing a data audit and it would be greate if we
            could get a copy of every user we have on preside so i can identify
            duplicate records and get a baseline of how clean our data is on
            preside.
            <br />
            <br />
            Thanks
          </p>
          <hr />
        </div>
        <div>
          <div className="ticket-status">
            <h3>Status: Ready for action</h3>
            <input
              className="checkbox-hide"
              type="checkbox"
              id="ticket-updates"
              name="ticket-updates"
            ></input>
            <label for="ticket-updates" className="label-text">
              Email ticket updates?
            </label>
          </div>
        </div>
      </div>
      <div>
        {/* <CommentSec /> */}


 
    {/* <CommentSec/> 
    /// */}

    <div className="comment-sec">
      <div>
        <p className="comment-heading">Comments</p>
      </div>
      <div>
        <input
          className="CB-hide"
          type="checkbox"
          id="ticket-updates"
          name="ticket-updates"
        ></input>
        <label className="comment-label-txt" for="ticket-updates">
          Request to close this ticket
        </label>
        
       <br />
        <br />
        <textarea className="comment-txtarea" name="Comments" type="text" rows={8} onChange={event => setIssueCommentBody(event.target.value)}></textarea> 
      {/* <input className="ip-text" name="Comments" type="text" onChange={event => setIssueCommentBody(event.target.value)} 
      value={issueCommentBody}/> */}
        
      </div>
      {/* <div className="comment-attachment">
        <p>Attachment</p>
        <App />
      </div> */}

<div className="comment-attachment">
  <p>Attachment</p>
  <input type="file" onChange={handleAttachmentChange} />
</div>

      <div className="comment-btn">
        {/* <button onClick={handleCommentButtonClick}>Comment</button> */}
        <button className="create-btn" type="submit" onClick={postIssueComments.bind(null, issueCommentBody)}>Comment</button>
      </div>

      <div className="comment-btn">
  <button className="create-btn" type="submit" onClick={postIssueAttachment}>
    Attachment
  </button>
</div>
    </div>

         {/* <CommentsView /> 
/// */}
<div className="comment-div">
      <div className="comment-view">
      <p className="comment-heading">Latest comments are: </p>
     <span> {issueComments.map((commentsArray) => (
              <span>
                {commentsArray.body.content.map((contentArray) => (
                  <span>
                    {contentArray.content.map((contentText) => (

                      <span>
  <span className="time-spent" key={commentsArray.id}> {commentsArray.author.displayName} {formatDate(commentsArray.created)} {formatTime(commentsArray.created)}  </span>
        <p>{contentText.text}</p>
                        
                      </span>
                    ))}


                  </span>

                ))}

              </span>

            ))}
            </span>
      </div>
      
      
     
    </div>




      </div>
    </>
  );
}

export default TicketDetail;
