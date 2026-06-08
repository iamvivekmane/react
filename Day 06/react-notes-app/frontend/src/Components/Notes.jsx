import React, { useContext, useEffect, useRef, useState } from 'react'
import NoteContext from "../context/notes/noteContext"
import Noteitem from './Noteitem';
import AddNote from './addNote';
const Notes = () => {
    const context = useContext(NoteContext);
    const { notes, getNotes } = context;
    useEffect(() => {
        getNotes();
    }, [])
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" })

    const ref = useRef(null)
    const refClose = useRef(null)

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }

    const handleClick = (e) => {
        console.log("handleCLick called", note)
        refClose.current.click();
    }

    const onChange = (e) => {
        console.log("On change is called")
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <>
            <button ref={ref} style={{ display: 'none' }} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
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
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button ref={refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleClick}>Update note</button>
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