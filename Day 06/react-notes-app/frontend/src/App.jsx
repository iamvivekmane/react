import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import NoteState from './context/notes/NoteState'
import Alert from './Components/Alert'
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {/* <Alert message="This is amazing react course" /> */}
          <div className="container">
            <Routes>
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/About" element={<About />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Signup" element={<Signup />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
