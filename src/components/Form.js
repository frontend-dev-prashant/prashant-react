import React, { useState } from "react";

// To LowerCase
export default function Form(props) {
  const textToLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  // To Uppercase
  const textToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  // To Clear All Text
  const textCLearAll = () => {
    let newText = "";
    setText(newText);
  };

  // To Remove Extra Spaces
  const textRemoveExtaSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  // To select and copy Text
  const textCopyAll = () => {
    var copyText = document.getElementById("myTextarea");
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(copyText.value);
  };

  // for getting variable value (setText) of textarea value that user are entering
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  // (text) variable is a main variable and (setText) is a variable who will store updated value.
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-3"
        style={{ backgroundColor: props.mode === "dark" ? "grey" : "white" }}
      >
        <h5>Convert your text into Lowercase and Uppercase</h5>
        <br />
        <div>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={handleOnChange}
            maxLength={500}
            placeholder="Enter here or Paste your text (Max 500 characters)"
            className="form-control p-2"
            id="myTextarea"
            rows="7"
          ></textarea>
        </div>
        <h5 className="mt-2">
          {/* After space count one word and give length of word & length of characters */}
          {text.split(" ").length} Words and {text.length} Characters &nbsp;
          <span>
            (it wili take {0.008 * text.split(" ").length} Minutes To Read)
          </span>
        </h5>
        <br />
        <div className="d-flex">
          <div>
            <button
              onClick={textToLowercase}
              className="btn btn-primary bt-sm mx-1"
            >
              Convert To Lowercase
            </button>
          </div>
          <div>
            <button
              onClick={textToUppercase}
              className="btn btn-primary bt-sm mx-1"
            >
              Convert To Uppercase
            </button>
          </div>
          <div>
            <button
              onClick={textCopyAll}
              className="btn btn-primary bt-sm mx-1"
            >
              Select and Copy
            </button>
          </div>
          <div>
            <button
              onClick={textRemoveExtaSpaces}
              className="btn btn-primary bt-sm mx-1"
            >
              Remove Extra Spaces
            </button>
          </div>
          <div>
            <button
              onClick={textCLearAll}
              className="btn btn-secondary bt-sm mx-1"
            >
              Clear All
            </button>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
