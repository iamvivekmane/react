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
        const json = await response.json();
        setNotes(json.notes);
    }










    //  Add a note 
    const addNote = async (title, description, tag) => {
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEwYzhjNjJiYWE5MWU0NmU5NmE5MGU5In0sImlhdCI6MTc3OTIwNzU0OH0.LpIaza4eR2A6WRySWP2V0e-pLjuiFSkcU8eh2KL1DTw'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const note = await response.json();
        setNotes(notes.concat(note))
    }

    //  Edit a note 
    const editNote = async (id, title, description, tag) => {

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEwYzhjNjJiYWE5MWU0NmU5NmE5MGU5In0sImlhdCI6MTc3OTIwNzU0OH0.LpIaza4eR2A6WRySWP2V0e-pLjuiFSkcU8eh2KL1DTw'
            },
            body: JSON.stringify({ title, description, tag })
        });
        const json = await response.json();

        const newNotes = JSON.parse(JSON.stringify(notes))

        for (let index = 0; index < newNotes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes)
    }

    //  Delete a note 
    const deleteNote = async (id) => {
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmEwYzhjNjJiYWE5MWU0NmU5NmE5MGU5In0sImlhdCI6MTc3OTIwNzU0OH0.LpIaza4eR2A6WRySWP2V0e-pLjuiFSkcU8eh2KL1DTw'
            },
        });
        const json = response.json();
        const newNote = notes.filter((note) => { return note._id !== id })
        setNotes(newNote);
    }


    return (
        <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}


export default noteState;