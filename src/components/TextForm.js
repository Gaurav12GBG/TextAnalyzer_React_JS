import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpperClick = () => {
    let newText = text.toUpperCase();
    // text = newText;     //Wrong way to change the state
    setText(newText); // Correct way to change the state
    props.showAlert("Converted to uppercase!", "success")
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success")

  };

  const handleClearTextClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success")

  };

  const handleCopy = () => {
    var text = document.getElementById('myBox')
    text.select()
    text.setSelectionRange(0, 9999)
    navigator.clipboard.writeText(text.value)
    props.showAlert("Copied to clipboard!", "success")

  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed!", "success")
  }

  const handleOnChangeFunc = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4>{props.heading}</h4>
        <div className="mb3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChangeFunc}
            style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'black'}}
            
            id="myBox"
            rows="8"
          ></textarea>
          <button
            className="btn btn-primary my-3 mx-1"
            onClick={handleUpperClick}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-success my-3 mx-1"
            onClick={handleLowerClick}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-danger my-3 mx-1"
            onClick={handleClearTextClick}
          >
            Clear Text
          </button>
          <button
            className="btn btn-info my-3 mx-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            className="btn btn-warning my-3 mx-1"
            onClick={handleExtraSpaces}
          >
            Extra Space Remover
          </button>
        </div>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h4>Your text Summary here:</h4>
        <p>
          <b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Words and <b>{text.length}</b>{" "}
          Characters.
        </p>
        <p>
          <b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minute to read.
        </p>
        <h4>Preview:</h4>
        <p>{text.length>0?text:'Enter something in the above textbox to preview it here...'}</p>
      </div>
    </>
  );
}
