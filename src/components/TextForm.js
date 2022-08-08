import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("! Converted to Uppercase", "success");
    }
    const handleLowClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("! Converted to Lowercase", "success");

    }

    const handleClearClick=()=>{
        setText("");
        props.showAlert("! Text Cleared", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = () => {
        var text = document.getElementById(`myBox`);
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("! Copied to clipboard", "success");
    }

    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/); 
        // Learn Regular Expression in vanilla JS to understand /[ ]+/
        setText(newText.join(" "));
        props.showAlert("! Extra spaces removed", "success");
    }

    const [text, setText] = useState(`Enter text here`);
    // text="new Text" //Wrong way to change the state
    // setText("new Text"); //Correct way to change the state


    return (
        <>
            <div className="container" style={{color: props.mode===`dark`?`white`:`black`}}>
                <h1 className="mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`#042743`:`white`, color: props.mode===`dark`?`white`:`black`}}
                        id="myBox"
                        rows="8"
                    ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert to Upper Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleLowClick}>Convert to Lower Case</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode===`dark`?`white`:`black`}}>
                <h3>Your text summary</h3>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                {/* Filter is used to separate out elements from an array fulfilling certain conditions  */}
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
                <h4>Preview</h4>
                <p>{text.length>0?text:`Enter something to preview it here`}</p>
            </div>

        </>
    );
}
