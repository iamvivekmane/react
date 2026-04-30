import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



let name = "vivek";
function App() {
  const [count, setCount] = useState(0)

  return (
    <> <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <div className="blank">
        <h1>This is the {name}</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolore inventore accusantium maxime totam sequi eaque molestias a reprehenderit, iure assumenda sunt libero quibusdam magnam dignissimos laborum distinctio amet ipsa officia eveniet! Sit.</p>
      </div>

    </>

  )
}


export default App
