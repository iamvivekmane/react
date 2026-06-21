import AddNote from './AddNote';
import Noteitem from './Noteitem';
import NoteContext from "../context/notes/noteContext"
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
    const navigate = useNavigate();
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ eid: "", etitle: "", edescription: "", etag: "" })
    const ref = useRef(null)
    const refClose = useRef(null)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes();
        }
        else {
            navigate("/login")
        }
    }, [])




    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({ eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
    }


    const handleClick = (e) => {
        editNote(note.eid, note.etitle, note.edescription, note.etag)
        e.target.blur();
        refClose.current.click();
        props.showAlert("success", "Note updated successfully")
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        // Update note
        <>
            <button ref={ref} style={{ display: 'none' }} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                Edit note
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Update note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className='my-3'>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" onChange={onChange} value={note.etitle} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription} minLength={5} required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tag" className="form-label">Tag</label>
                                    <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag} minLength={3} required />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button disabled={note.etitle.length < 5 || note.edescription.length < 5 || note.etag.length < 3} type="button" className="btn btn-primary" onClick={handleClick}>Update note</button>
                        </div>
                    </div>
                </div>
            </div >
            <AddNote showAlert={props.showAlert} />
            <div className='container'>
                <div className="row my-3">
                    <h2>Your notes</h2>
                    <div className="container my-3">
                        {notes.length === 0 && 'No notes to display'}
                    </div>
                    {notes.map((note) => {
                        return <Noteitem showAlert={props.showAlert} key={note._id} note={note} updateNote={updateNote} />;
                    })}
                </div>
            </div>
        </>
    )
}

export default Notes