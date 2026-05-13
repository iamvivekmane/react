import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import News from './components/News'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Spinner from './components/Spinner'

export default class App extends Component {
  pageSize = 5;
  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={this.state.progress}
          />
          <Routes>
            <Route>
              <Route exact path="/" element={<News setProgress={this.setProgress} key={'general'} pageSize={5} country={'us'} category={'general'} />} />
              <Route exact path="/business" element={<News setProgress={this.setProgress} key={'business'} pageSize={5} country={'us'} category={'business'} />} />
              <Route exact path="/health" element={<News setProgress={this.setProgress} key={'health'} pageSize={5} country={'us'} category={'health'} />} />
              <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key={'entertainment'} pageSize={5} country={'us'} category={'entertainment'} />} />
              <Route exact path="/science" element={<News setProgress={this.setProgress} key={'science'} pageSize={5} country={'us'} category={'science'} />} />
              <Route exact path="/sports" element={<News setProgress={this.setProgress} key={'sports'} pageSize={5} country={'us'} category={'sports'} />} />
              <Route exact path="/technology" element={<News setProgress={this.setProgress} key={'technology'} pageSize={5} country={'us'} category={'technology'} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
