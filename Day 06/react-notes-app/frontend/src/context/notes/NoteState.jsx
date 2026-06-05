import React, { useState } from "react";
import NoteContext from "./noteContext";

const noteState = (props) => {
    const host = "http://localhost:5000"

    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial)

    //  Get all notes
    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEwYzhjNjJiYWE5MWU0NmU5NmE5MGU5In0sImlhdCI6MTc3OTIwNzU0OH0.LpIaza4eR2A6WRySWP2V0e-pLjuiFSkcU8eh2KL1DTw'
            }
        });
        const json1 = await response.json();
        console.log(json1.notes)
        setNotes(json1.notes);
    }










    //  Add a note 
    const addNote = async (title, description, tag) => {
        console.log("Adding a new note")
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEwYzhjNjJiYWE5MWU0NmU5NmE5MGU5In0sImlhdCI6MTc3OTIwNzU0OH0.LpIaza4eR2A6WRySWP2V0e-pLjuiFSkcU8eh2KL1DTw'
            },
            body: JSON.stringify({ title, description, tag })
        });
        console.log("success")
        // const json = response.json();


        const note = {
            "_id": "6a15924c0db406967580d4b5",
            "user": "6a0c8c62baa91e46e96a90e9d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2026-05-26T12:30:04.218Z",
            "__v": 0
        };
        setNotes(notes.concat(note))
    }


    //  Edit a note 
    const editNote = async () => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEwYzhjNjJiYWE5MWU0NmU5NmE5MGU5In0sImlhdCI6MTc3OTIwNzU0OH0.LpIaza4eR2A6WRySWP2V0e-pLjuiFSkcU8eh2KL1DTw'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = response.json();
        console.log("success")

        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (id == element._id) {
                element.name = name;
                element.description = description;
                element.tag = tag;
            }

        }

    }

    //  Delete a note 
    const deleteNote = (id) => {
        console.log("Deleting a note")
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote);
        console.log("deleted")
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default noteState;