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

    //  Add a note 
    const addNote = () => {
        note = null;



    }

    const addNote = async (title, description, tag) => {
        // TODO: API Call
        // API Call 
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            },
            body: JSON.stringify({ title, description, tag })
        });
        //  Edit a note 
        const editNote = () => {

        }

        //  Delete a note 
        const deleteNote = () => {

        }

        const
        return (
            <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote }}>
                {props.children}
            </NoteContext.Provider>


        )
    }


    export default noteState;