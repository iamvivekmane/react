import React, { useContext, useEffect, useRef } from 'react'
import NoteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './addNote';
const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, [])
    const ref = useRef(null)

    const updateNote = (note) => {
        ref.current.click();
    }
    return (
        <>
            <button ref={ref} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                Edit note
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <AddNote />
            <div className="row my-3">
                <h2>Your notes</h2>
                {notes.map((note) => {
                    return <Noteitem note={note} updateNote={updateNote} />;
                })}
            </div>
        </>
    )
}

export default Notes