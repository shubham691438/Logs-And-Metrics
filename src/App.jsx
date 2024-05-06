import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Outlet, useParams,useNavigate, useSearchParams } from 'react-router-dom'


function App() {  

  //default time range 5 min and date as current date
   const [searchParams,setSearchParams]=useSearchParams({timeRange:5,time:Date.now()})

  
  const setChanges=(timeRange,time)=>{
    setSearchParams((prev)=>{
      prev.set('timeRange',timeRange);
      prev.set('time',time)
      return prev
    })
  }

  

  return (
    <div>
      <Navbar searchParams={searchParams} setChanges={setChanges}/>
      <div >
        <Outlet context={[searchParams,setChanges]}/>
      </div>
      
    </div>
  )
}

export default App
