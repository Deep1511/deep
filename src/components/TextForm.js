import React,{useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case","success")
  }

  const handleLoClick=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case","success")

  }

  const handleToClear=()=>{
    // console.log("Uppercase was clicked" + text);
    let newText="";
    setText(newText);
    props.showAlert("Clear the text area","success")

  }
  const handleOnChange=(event)=>{
    console.log("On Change");
    setText(event.target.value)
  }
  const [text, setText]=useState('Enter text here');
  // setText("new Text");
  return (
    <>
    <div className='container'  style={{color:props.mode==='dark' ? 'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark' ? 'grey':'white',color:props.mode==='dark' ? 'white':'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleToClear}>Clear Text</button>


    </div>
    <div className="container my-3" style={{color:props.mode==='dark' ? 'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008*text.split("").length} Minutes read</p>
    </div>
    </>
  )
}
