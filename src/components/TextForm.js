import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowerClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const downloadClick = () => {
      const element = document.createElement("a");

    const file = new Blob([text,{type : 'text/plain'}]);
    element.href =URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  };
  
 
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
      <>
    <div className="container">
      <h1>{props.headingText}</h1>

      <div className="mb-3">
        {/* <label for="myBox" className="form-label">{props.textArea}</label> */}
        <textarea
        
        placeholder="Enter your text here"
          value={text}
          className="form-control"
          onChange={handleOnChange}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <div className="d-grid gap-2  d-md-block">
      <button disabled={text.length===0} type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to UPERCASE
      </button>
      
      <button disabled={text.length===0}  type="button" className="btn btn-primary mx-1" onClick={handleLowerClick}>
        Convert to lowercase
      </button>
      
      <button disabled={text.length===0}  type="button"  className="btn btn-primary mx-1" onClick={downloadClick}>
        Download Text
      </button>
      
      <button disabled={text.length===0}  type="button" 
        className="btn btn-danger clearBtn mx-1"
        onClick={handleClearClick}
      >Clear TextArea
      </button>
      </div>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{text.length===0?0:0.008* text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  );
}
