import React, { useContext, useEffect } from 'react'
import NoteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './addNote';
const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, [])
    return (
        <>
            <AddNote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <Noteitem note={note} />;
                })}
            </div>
        </>
    )
}

export default Notes