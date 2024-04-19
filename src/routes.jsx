import App from "./App"
import { createBrowserRouter } from "react-router-dom"
import './index.css'
import Metrics from "./components/Metrics"
import Logs from "./components/Logs"
import Storybook from "./components/Storybook"

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
          path:'logs/:timeRange?/:time?',
          element:<Logs/>
        },
        {
          path:'storybook',
          element:<Storybook/>
        }
      ]
      
    },
])

export default routes