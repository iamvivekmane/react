import React, { useState } from "react";
import NoteContext from "./noteContext";

const noteState = (props) => {

    const notesInitial = [
        {
            "_id": "6a1592220db406967580d4b3",
            "user": "6a0c8c62baa91e46e96a90e9",
            "title": "Gym",
            "description": "Hit Chest",
            "tag": "imp",
            "date": "2026-05-26T12:29:22.215Z",
            "__v": 0
        },
        {
            "_id": "6a1592370db406967580d4b4",
            "user": "6a0c8c62baa91e46e96a90e9",
            "title": "Dier",
            "description": "Eat clean",
            "tag": "med",
            "date": "2026-05-26T12:29:43.043Z",
            "__v": 0
        },
        {
            "_id": "6a1592370db406967580d4b4",
            "user": "6a0c8c62baa91e46e96a90e9",
            "title": "Dier",
            "description": "Eat clean",
            "tag": "med",
            "date": "2026-05-26T12:29:43.043Z",
            "__v": 0
        },
        {
            "_id": "6a1592370db406967580d4b4",
            "user": "6a0c8c62baa91e46e96a90e9",
            "title": "Dier",
            "description": "Eat clean",
            "tag": "med",
            "date": "2026-05-26T12:29:43.043Z",
            "__v": 0
        },
        {
            "_id": "6a1592370db406967580d4b4",
            "user": "6a0c8c62baa91e46e96a90e9",
            "title": "Dier",
            "description": "Eat clean",
            "tag": "med",
            "date": "2026-05-26T12:29:43.043Z",
            "__v": 0
        },
        {
            "_id": "6a1592370db406967580d4b4",
            "user": "6a0c8c62baa91e46e96a90e9",
            "title": "Dier",
            "description": "Eat clean",
            "tag": "med",
            "date": "2026-05-26T12:29:43.043Z",
            "__v": 0
        },
        {
            "_id": "6a15924c0db406967580d4b5",
            "user": "6a0c8c62baa91e46e96a90e9",
            "title": "sdfsdf",
            "description": "Complete assignments",
            "tag": "high",
            "date": "2026-05-26T12:30:04.218Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>


    )
}


export default noteState;