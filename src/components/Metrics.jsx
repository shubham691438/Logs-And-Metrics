import React,{useState,useEffect} from 'react'
import {MimicMetrics} from '../api-mimic.js'
import ChartComponent from './ChartComponent.jsx';

const Metrics = () => {

  const [metrics, setMetrics] = useState([]);

  useEffect(() => {
  
    async function fetchMetrics() {
      try {
        const metrics = await MimicMetrics.fetchMetrics({ startTs: Date.now() -900000, endTs: Date.now() });
        console.log("metrics",metrics)
        setMetrics(metrics);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    }

    fetchMetrics();
  }, []);

  return (
    <div>

      <div className='bg-white h-15 border-2 border-blue-200 rounded-t-md flex items-center'> 
        <div className='p-3'>
          <span className='text-2xl font-bold'>Metrics</span>  
          <span className='ml-3 text-xs font-semibold text-gray-600'>9/08/2023 10:10 → 9/08/2023 10:25 </span>
        </div>
      </div>

      <div className='px-3 py-2'> 
        {
          metrics.length>0 && (
            <div className="grid grid-cols-2 gap-4">
              <div className='bg-white min-h-80 border-2 border-blue-200 rounded-md'>
                <ChartComponent data={metrics[0]}/>
              </div>
              
              <div className='bg-white min-h-80 border-2 border-blue-200 rounded-md'>02</div>

              <div className='bg-white min-h-80 border-2 border-blue-200 rounded-md'>03</div>
              
              <div className='bg-white min-h-80 border-2 border-blue-200 rounded-md'>04</div>
            </div>
          )
        }
        
      </div>

      {/* <div>
        <ChartComponent data={metrics}/>
      </div> */}

    </div>
  )
}

export default Metrics