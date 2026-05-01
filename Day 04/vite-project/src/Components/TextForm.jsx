//Comments are for debugging purpose

import React, { useState } from 'react'
const TextForm = (props) => {
    const [text, setText] = useState("");
    // text = "this is the text"; // wrong way to change the state
    // setText("this is the text"); // right way to change the state

    const handleOnChange = (e) => {
        // console.log("handling the on change");
        setText(e.target.value);
        // console.log(text);
    }

    const handleUpperClick = () => {
        // console.log("handling upper click");
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const handleLowerClick = () => {
        // console.log("handling lower click");
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const handleClearClick = () => {
        // console.log("handling clear click");
        setText("");
    }

    const handleRemoveSpaceClick = () => {
        let spaceRemovedText = text.replaceAll(" ", "");
        setText(spaceRemovedText);
        spaceRemovedText.
    }


    return (
        <>
            <div className="container my-3">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" rows="10" onChange={handleOnChange} value={text}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpperClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLowerClick}>Convert to lowercase</button>
                <button className="btn btn-primary mx-3" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-3" onClick={handleRemoveSpaceClick}>Remove spaces</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>{text.length > 0 ? text.split(" ").length : 0} words, {text.length} characters</p>
                <p>{text.length > 0 ? 0.008 * text.split(" ").length : text.length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm