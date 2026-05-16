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

const App = () => {
  const pageSize = 6;
  const apiKey = import.meta.env.VITE_NEWS_API
  const [progress, setProgress] = useState(0)
  return (
    <  >

      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color="#f11946"
          height={3}
          progress={progress}
        />
        <Routes>
          <Route>
            <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={'general'} pageSize={5} country={'us'} category={'general'} />} />
            <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={'business'} pageSize={5} country={'us'} category={'business'} />} />
            <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={'health'} pageSize={5} country={'us'} category={'health'} />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={'entertainment'} pageSize={5} country={'us'} category={'entertainment'} />} />
            <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={'science'} pageSize={5} country={'us'} category={'science'} />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={'sports'} pageSize={5} country={'us'} category={'sports'} />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={'technology'} pageSize={5} country={'us'} category={'technology'} />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ >
  )
}
export default App;