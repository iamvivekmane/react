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
        let newText = text.toUpperCase();
        setText(newText);
    }


    return (
        <div>
            <div className="container my-3">
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="myBox" rows="10" onChange={handleOnChange} value={text}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handleUpperClick}>Convert to uppercase</button>
            </div>
        </div>
    )
}

export default TextForm