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
    import { useLocation } from "react-router-dom";

    function MyComponent() {
        const location = useLocation();

        console.log(location.pathname);

        const query = new URLSearchParams(location.search);
        const userId = query.get("id");

        const fromPage = location.state?.from || "Unknown";

        return <div>Current Path: {location.pathname}</div>;
    }

    return (
        <NoteContext.Provider value={{ state, update }}>
            {props.children}
        </NoteContext.Provider>


    )
}


export default noteState;