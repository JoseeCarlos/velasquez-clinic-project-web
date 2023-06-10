import { useState } from 'react'
import Administrador from './components/Administrador'
import Login from './pages/Login'
import Home from './pages/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admin/*" element={<Administrador/>} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
