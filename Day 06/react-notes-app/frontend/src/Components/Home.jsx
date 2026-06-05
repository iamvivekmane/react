import React, { useContext } from 'react'
import NoteContext from "../context/notes/noteContext"
import Notes from './Notes';
import AddNote from './addNote';

const Home = () => {
    return (
        <div>
          
            <Notes />
        </div >
    )
}

export default Home