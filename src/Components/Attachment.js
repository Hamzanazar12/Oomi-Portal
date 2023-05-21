import axios from "axios";

import React, { Component } from "react";
import "./CSS/attachment.css";

class App extends Component {
  state = {
    // Initially, no file is selected
    selectedFile: null,
  };

  // On file select (from the pop up)
  onFileChange = (event) => {
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  // On file upload (click the upload button)
  onFileUpload = () => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    axios.post("api/uploadfile", formData);
  };

  // File content to be displayed after
  // file upload is complete
  fileData = () => {
    if (this.state.selectedFile) {
      return (
        <div>
          <p>{this.state.selectedFile.name}</p>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  render() {
    return (
      <div className="main-upload-div">
        <div className="upload-file">
          <p>
            Drag/paste a file here
            <br />
            Or, if you prefer...
          </p>
          <button id="button">
            {" "}
            <input
              className="upload"
              type="file"
              onChange={this.onFileChange}
            />
            {this.fileData()}
            Select a file from your computer
          </button>
        </div>
      </div>
    );
  }
}

export default App;
