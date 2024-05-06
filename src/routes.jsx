import App from "./App"
import './index.css'
import Metrics from "./components/Metrics"
import Logs from "./components/Logs"
import { createBrowserRouter,useNavigate } from "react-router-dom";
import { useEffect } from "react"


const Navigate = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/metrics')
  },[])
  return (
    <div></div>
  )
}




const  routes=createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path:'/',
          element:<Navigate/>
        },
        {
          path:'metrics',
          element:<Metrics/>
        },
        {
          path:'logs',
          element:<Logs/>
        },
      ]
      
    },
])

export default routes