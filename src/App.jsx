

import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return (


    <Routes>
      <Route path="/" exact  element={<Home/>}/>
      <Route path="movies/:id" exact  element={<Movie/>}/>
    </Routes>
  )
}

export default App