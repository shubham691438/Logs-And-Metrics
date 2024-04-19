import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet, useParams,useNavigate } from 'react-router-dom'

function App() {  

  //default time range 5 min
  const [selectedTimeRange,setSelectedTimeRange]= useState(5)
  const [selectionTime,setSelectionTime]=useState(Date.now())


  
  const setChanges=(timeRange,time)=>{
    setSelectedTimeRange(timeRange);
    setSelectionTime(time);
  }
  return (
    <div>
      <Navbar selectedTimeRange={selectedTimeRange} setChanges={setChanges}/>
      <div >
        <Outlet context={[selectedTimeRange,selectionTime,setChanges]}/>
      </div>
      
    </div>
  )
}

export default App
