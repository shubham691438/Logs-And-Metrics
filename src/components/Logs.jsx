import React,{useState,useEffect,useRef} from 'react'
import { MimicLogs } from '../api-mimic';
import { format } from 'date-fns';
import { useNavigate, useParams,useOutletContext } from 'react-router-dom';

const Logs = () => {
  
  const [startTime,setStartTime]=useState(0);
  const [endTime,setEndTime]=useState(0);
  const [logs, setLogs] = useState([]);

  const logContainerRef = useRef(null);

  const [searchParams,setChanges]=useOutletContext();

 

  useEffect(() => {
    // Fetch logs when the component mounts
    async function fetchLogs() {
      try {
        console.log("timeRange",searchParams.get('timeRange'),searchParams.get('time'))
        const logs = await MimicLogs.fetchPreviousLogs({ startTs: searchParams.get('time') - 1000*60*searchParams.get('timeRange'), endTs: searchParams.get('time'),limit:10 });
        logs.reverse();
        console.log("logs",logs);
        setLogs(logs);
        
        
        setStartTime(format(new Date(parseInt(searchParams.get('time') - 1000*60*searchParams.get('timeRange'))),'dd/MM/yyyy HH:mm'));
        setEndTime(format(new Date(parseInt(searchParams.get('time'))),'dd/MM/yyyy HH:mm'));
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
  }, [searchParams]);

  useEffect(() => {
    const logContainer = logContainerRef.current;
    // Check if user is at the bottom of the scrollable area

    console.log(logContainer.scrollTop + logContainer.clientHeight,logContainer.scrollHeight);
    const atBottom = (logContainer.scrollTop + logContainer.clientHeight+100) >= logContainer.scrollHeight;
    
    console.log("atBottom",atBottom)
    // If user is at the bottom, scroll to the latest log
    if (atBottom) {
      logContainer.scrollTop = logContainer.scrollHeight;
    }
  }, [logs]);

  return (
    <div className='bg-white  rounded-md border-2 border-gray-100'>
      <div className='flex justify-end pr-5 '>
        <span className='text-xs font-semibold text-gray-600 h-3 pt-2' >
          {logs.length > 0 && `Showing logs for ${startTime} → ${endTime}`}
        </span>
      </div>
      <div ref={logContainerRef} className='bg-[#090f17] h-[595px] overflow-y-auto mt-4 mb-9 mx-3 rounded-md border-2 border-gray-100 p-2'>
        <ul className='text-white ' >
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