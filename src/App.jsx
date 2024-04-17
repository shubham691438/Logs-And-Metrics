import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div>
      <Navbar/>
      <div className='px-2 py-1'>
        <Outlet/>
      </div>
      
    </div>
  )
}

export default App
