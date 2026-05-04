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

  const [navbarColor, setNavbarColor] = useState('#FFFFFF')

  const [textFormColor, setTextFormColor] = useState('#FFFFFF')

  const [textColor, setTextColor] = useState('#000000')


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



  const changeMode = (mode) => {
    if (mode === 'white') {
      setNavbarColor('#FFFFFF');
      setTextFormColor('#FFFFFF');
      setTextColor('#000000')
      console.log('white');

    }
    if (mode === 'black') {
      setNavbarColor('#042743');
      setTextFormColor('#063354');
      document.body.style.color = "red";
    }

  }



  return (
    <>
      <Navbar title="TextUtils" aboutText="About" changeMode={changeMode} navbarColor={navbarColor} textColor={textColor} />
      <Alert alert={alert} />
      <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} textFormColor={textFormColor} textColor={textColor} />
      {/* <About /> */}
    </>

  )
}

export default App