import React,{useState,useEffect} from 'react'
import { MimicLogs } from '../api-mimic';
import { format } from 'date-fns';

const Logs = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    // Fetch logs when the component mounts
    async function fetchLogs() {
      try {
        const logs = await MimicLogs.fetchPreviousLogs({ startTs: Date.now() - 86400000, endTs: Date.now(), limit: 10 });
        console.log("logs",logs);
        setLogs(logs);
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    }

    fetchLogs();

    // Subscribe to live logs
    const unsubscribe = MimicLogs.subscribeToLiveLogs(newLog => {
      setLogs(prevLogs => [...prevLogs, newLog]);
    });

    // Cleanup function
    return () => {
      unsubscribe(); // Unsubscribe from live logs when the component unmounts
    };
  }, []);

  return (
    <div className='bg-white  rounded-md border-2 border-gray-100'>
      <div className='bg-[#090f17] min-h-[600px] mt-6 mb-9 mx-3 rounded-md border-2 border-gray-100'>
        <ul className='text-white '>
          {logs.map((log, index) => (
              <li key={index} className='px-2'> 
                {
                  
                  index % 7 === 1 ? (
                    // error
                    <>
                      <div className='h-3 w-0.5 bg-red-400 shadow-lg shadow-red-500/50 rounded-sm inline-block mr-2'/>
                      <div className='inline-block text-[#5E7BAA] text-xs'>{format(new Date(log.timestamp),' MMM dd HH:mm:ss.SSS ')}</div> 
                      <div className='inline-block text-[#F87171] text-xs'>&nbsp; [error] &nbsp;</div>
                      <div className='inline-block text-[#A8C3E8] text-sm text-wrap'> : {log.message}</div>
                    </>
                  ) 
                  //success
                  : index % 5 ===1 ?(
                    <>
                      <div className='h-3 w-0.5 bg-[#2DD4BF] shadow-lg shadow-green-500/50 rounded-sm inline-block mr-2'/>
                      <div className='inline-block text-[#5E7BAA] text-xs'>{format(new Date(log.timestamp),' MMM dd HH:mm:ss.SSS ')}</div> 
                      <div className='inline-block text-[#2DD4BF] text-xs'>&nbsp; [Success] &nbsp;</div>
                      <div className='inline-block text-[#A8C3E8] text-sm text-wrap'> : {log.message}</div>
                    </>  
                  ):
                  (
                    //info
                    <>
                      <div className='h-3 w-0.5 bg-blue-400 shadow-lg shadow-blue-500/50 rounded-sm inline-block mr-2'/>
                      <div className='inline-block text-[#5E7BAA] text-xs'>{format(new Date(log.timestamp),' MMM dd HH:mm:ss.SSS ')}</div> 
                      <div className='inline-block text-[#5E7BAA] text-xs'>&nbsp; [Info] &nbsp;</div>
                      <div className='inline-block text-[#A8C3E8] text-sm text-wrap'> : {log.message}</div>
                    </>  
                  )
                }
              </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Logs