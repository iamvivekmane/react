import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import News from './components/News'

import React, { Component } from 'react'
import Navbar from './components/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={8} />
      </div>
    )
  }
}
