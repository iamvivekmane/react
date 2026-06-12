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
  const [alert, setAlert] = useState(null)
  const showAlert = (Type, Message) => {
    setAlert({
      type: Type,
      message: Message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/Home" element={<Home showAlert={showAlert} />} />
              <Route exact path="/About" element={<About showAlert={showAlert} />} />
              <Route exact path="/Login" element={<Login showAlert={showAlert} />} />
              <Route exact path="/Signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App
