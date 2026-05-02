import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import About from './Components/About'
import Alert from './Components/Alert'
function App() {

  const [mode, setMode] = useState('light')

  const [alert, setAlert] = useState(null);

  const showAlert = (Type, Message) => {
    setAlert({
      type: Type,
      message: Message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  // const toggleMode = () => {
  //   if (mode === 'light') {
  //     setMode('dark');
  //     showAlert('success', 'Dark mode has been enabled');
  //     document.body.style.backgroundColor = '#042743'
  //   }
  //   else {
  //     setMode('light');
  //     showAlert('success', 'Light mode has been enabled');
  //     document.body.style.backgroundColor = 'white'
  //   }
  // }



  // const toggleMode = (mode) => {
  //   // setMode(selectedMode);
  //   showAlert('success', 'Dark mode has been enabled');
  //   console.log("clickieeed");

  //   document.body.style.backgroundColor = mode
  // }









  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} />
      <Alert alert={alert} />
      <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} />
      {/* <About /> */}
    </>

  )
}

export default App