import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <TextForm heading="Enter text to analyze" />
    </>
  )
}

export default App
