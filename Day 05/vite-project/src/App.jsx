import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import News from './components/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Spinner from './components/Spinner'

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route>
              <Route exact path="/" element={<News key={'general'}  pageSize={5} country={'us'} category={'general'} />} />
              <Route exact path="/business" element={<News key={'business'}  pageSize={5} country={'us'} category={'business'} />} />
              <Route exact path="/entertainment" element={<News  key={'entertainment'} pageSize={5} country={'us'} category={'entertainment'} />} />
              <Route exact path="/science" element={<News key={'science'}  pageSize={5} country={'us'} category={'science'} />} />
              <Route exact path="/sports" element={<News  key={'sports'} pageSize={5} country={'us'} category={'sports'} />} />
              <Route exact path="/technology" element={<News key={'technology'}  pageSize={5} country={'us'} category={'technology'} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
