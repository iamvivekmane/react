import React, { useState } from "react";
import NoteContext from "./noteContext";


const noteState = (props) => {
    const s1 = {
        "name": "vivek",
        "class": "10th"
    }
    const [state, setstate] = useState(s1);
    const update = () => {
        console.log("Update called")
        setTimeout(() => {
            setstate({
                "name": "shubham",
                "class": "11th"
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>


    )
}


export default noteState;