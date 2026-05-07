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
        props.showAlert('success', 'Converted to upper case');
    }

    const handleLowerClick = () => {
        // console.log("handling lower click");
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert('success', 'Converted to lower case');

    }

    const handleClearClick = () => {
        // console.log("handling clear click");
        setText("");
        props.showAlert('success', 'Cleared text');

    }

    const handleRemoveSpaceClick = () => {
        let spaceRemovedText = text.replaceAll(" ", "");
        setText(spaceRemovedText);
        props.showAlert('success', 'Removed spaces');
    }


    return (
        <>
            <div className="min-vh-100" style={{ backgroundColor: props.textFormColor }} >
                <div className="container">
                    <div className="mb-3">
                        <h1 style={{ color: props.textColor }}>{props.heading}</h1>
                        <textarea className="form-control" id="myBox" rows="8" style={{ backgroundColor: props.textFormColor }}
                            onChange={handleOnChange} value={text}></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary" style={{ backgroundColor: props.buttonColor }}
                        onClick={handleUpperClick}>Convert to uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1" style={{ backgroundColor: props.buttonColor }} onClick={handleLowerClick}>Convert to lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1" style={{ backgroundColor: props.buttonColor }} onClick={handleClearClick}>Clear text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-1" style={{ backgroundColor: props.buttonColor }} onClick={handleRemoveSpaceClick}>Remove spaces</button>
                    <div className="container my-3" style={{ backgroundColor: props.textFormColor }} style={{ color: props.textColor }} >
                        <h2>Your text summary</h2>
                        <p>{text.split(" ").filter((element) => { return element.length !== 0 }).length}  words, {text.trim("").length === 0 ? 0 : text.length} characters</p>
                        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                        <h2>Preview</h2>
                        <p>{text.split(" ").filter((element) => { return element.length != 0 }).length ? text : 'Enter some text to preview it here'}</p>
                    </div>
                </div>
            </div >
        </>
    )
}

export default TextForm