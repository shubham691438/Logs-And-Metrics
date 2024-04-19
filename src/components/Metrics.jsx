import React,{useState,useEffect} from 'react'
import {MimicMetrics} from '../api-mimic.js'
import ChartComponent from './ChartComponent.jsx';
import { useNavigate,useOutletContext, useParams } from 'react-router-dom';
import { format } from 'date-fns';

const Metrics = () => {
  
  const {timeRange,time}=useParams();
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState([]);
  const [startTime,setStartTime]=useState(0);
  const [endTime,setEndTime]=useState(0);

  const [selectedTimeRange,selectionTime,setChanges]=useOutletContext();

  useEffect(()=>{
    if(timeRange && time)
    {
      setChanges(timeRange,time);
    }
  },[])

  useEffect(()=>{
    
    navigate(`/metrics/${selectedTimeRange}/${selectionTime}`)
  },[selectedTimeRange])



  useEffect(() => {
  
    async function fetchMetrics() {
      try {
        const metrics = await MimicMetrics.fetchMetrics({ startTs: selectionTime - 1000*60*selectedTimeRange, endTs: Date.now() });
        // const metrics = await MimicMetrics.fetchMetrics({ startTs: Date.now() -21600000, endTs: Date.now() });
        console.log("metrics",metrics)

        
        let s=format(new Date(metrics[0].graphLines[0].values[0].timestamp), 'dd/MM/yyyy HH:mm')
        setStartTime(s);

        let len=metrics[0].graphLines[0].values.length;
        let e=format(new Date(metrics[0].graphLines[0].values[len-1].timestamp), 'dd/MM/yyyy HH:mm')
        setEndTime(e);

        setMetrics(metrics);
        
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    }

    fetchMetrics();
  }, [selectedTimeRange,navigate]);

  

  return (
    <div className='border-2 border-blue-200 rounded-md mx-2 my-1'>

      <div className='bg-white h-15 border-2 border-blue-200 rounded-t-md flex items-center'> 
        <div className='p-3'>
          <span className='text-2xl font-bold'>Metrics</span>  
          {
            metrics.length>0 &&(
              <span className='ml-3 text-xs font-semibold text-gray-600'>{ startTime} → {endTime} </span>
            )
          }
          
        </div>
      </div>

      <div className='px-3 py-2'> 
        {
          metrics.length>0 && (
            <div className="grid grid-cols-2 gap-4">
              <div className='bg-white min-h-80 border-2 border-blue-200 rounded-md p-3'>
                <ChartComponent data={metrics[0]}/>
              </div>
              
              <div className='bg-white min-h-80 border-2 border-blue-200 rounded-md p-3'>
                <ChartComponent data={metrics[1]}/>
              </div>

              <div className='bg-white min-h-80 border-2 border-blue-200 rounded-md p-3'>
                <ChartComponent data={metrics[2]}/>
              </div>
              
              <div className='bg-white min-h-80 border-2 border-blue-200 rounded-md p-3'>
                <ChartComponent data={metrics[3]}/>
              </div>
            </div>
          )
        }
        
      </div>

      {/* {metrics.length>0 && (
            
                <ChartComponent data={metrics[0]}/>)
             
      } */}

      

    </div>
  )
}

export default Metrics