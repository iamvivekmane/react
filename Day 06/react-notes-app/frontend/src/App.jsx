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
import Landing from './Components/Landing';
import Footer from './Components/Footer';

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
          <div className="d-flex flex-column min-vh-100">
            <Navbar />
            <Alert alert={alert} />
            <main className="flex-grow-1 d-flex flex-column">
              <Routes>
                <Route exact path="/" element={<Landing showAlert={showAlert} />} />
                <Route exact path="/Home" element={<Home showAlert={showAlert} />} />
                <Route exact path="/About" element={<About showAlert={showAlert} />} />
                <Route exact path="/Login" element={<Login showAlert={showAlert} />} />
                <Route exact path="/Signup" element={<Signup showAlert={showAlert} />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  )
}

export default App