import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!" , "success");
  }
  const handleloClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!" , "success")
  }
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  }
  const handleToClear = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared!" , "success");

  }
  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!" , "success");

  }

  const [text, setText] = useState('');
  //text="new Text";    //Wrong way
  //setText("New Text");    //Right way
  return (
    <>
    <div className="container" style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} style={{backgroundColor : props.mode==="dark"?"#13466e":"white",
            color: props.mode==="dark"?"white":"#042743"}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToClear}>Clear the Texts</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy texts</button>
    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"#042743"}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words, {text.length} characters</p>
      <p>{0.08 * text.split(" ").filter((element) => {return element.length !== 0}).length } Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
