import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'


function App() {


  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
