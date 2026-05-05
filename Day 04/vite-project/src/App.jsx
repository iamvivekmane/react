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

  const [buttonColor, setButtonColor] = useState('#1a73e8')


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
      setTextFormColor('#e5e7eb');
      setTextColor('#000000');
      setButtonColor('#000000');
    }
    if (mode === 'black') {
      setNavbarColor('#2d2d2d');
      setTextFormColor('#1a1a1a');
      setTextColor('#FFFFFF');
      setButtonColor('#475569');
    }

    if (mode === 'red') {
      setNavbarColor('#C0392B ');
      setTextFormColor('#FDEDEC ');
      setTextColor('#000000');
      setButtonColor('#C0392B');
    }

    if (mode === 'blue') {
      setNavbarColor('#042743');
      setTextFormColor('#063354');
      setTextColor('#FFFFFF');
      setButtonColor('#0891b2');
    }




  }



  return (
    <>
      <Navbar title="TextUtils" aboutText="About" changeMode={changeMode} navbarColor={navbarColor} textColor={textColor} buttonColor={buttonColor} />
      <Alert alert={alert} />
      <TextForm heading="Enter text to analyze" mode={mode} showAlert={showAlert} textFormColor={textFormColor} textColor={textColor} buttonColor={buttonColor} />
      {/* <About /> */}
    </>

  )
}

export default App