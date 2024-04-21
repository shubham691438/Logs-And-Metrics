import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import './index.css'
import Metrics from "./components/Metrics"
import Logs from "./components/Logs"

const  routes=createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
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