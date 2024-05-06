import React, { useState, useEffect, useRef } from 'react';
import { MimicLogs } from '../api-mimic';
import { format } from 'date-fns';
import { useOutletContext } from 'react-router-dom';
import NewLogButton from './NewLogButton';

const Logs = () => {
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newLogsCnt,setNewLogsCnt]=useState(0);

  const logContainerRef = useRef(null);
  const [searchParams, setChanges] = useOutletContext();


  useEffect(() => {
    async function fetchLogs() {
      try {
        setLoading(true);
        const logs = await MimicLogs.fetchPreviousLogs({
          startTs: searchParams.get('time') - 1000 * 60 * searchParams.get('timeRange'),
          endTs: searchParams.get('time'),
          limit: 10
        });
        logs.reverse();
        setLogs(logs);

        setStartTime(format(new Date(parseInt(searchParams.get('time') - 1000 * 60 * searchParams.get('timeRange'))), 'dd/MM/yyyy HH:mm'));
        setEndTime(format(new Date(parseInt(searchParams.get('time'))), 'dd/MM/yyyy HH:mm'));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching logs:', error);
        setLoading(false);
      }
    }

    fetchLogs();

    //suscribe to live logs
    const unsubscribe = MimicLogs.subscribeToLiveLogs(newLog => {

      //check if at bottom with latest log
      const logContainer = logContainerRef.current;

      // scrollTop= top of scrollBar
      // ClientHeight= height of div
      // Scroll height = height of scroll area 
      const atBottom = (logContainer.scrollTop + logContainer.clientHeight+100) >= logContainer.scrollHeight;


  
      if(atBottom) setNewLogsCnt(0);
      else setNewLogsCnt((prev)=>prev+1);

    
      setLogs(prevLogs => [...prevLogs, newLog]);
    });

    return () => {
      unsubscribe();
    };
  }, [searchParams]);

  const fetchPreviousLogs = async () => {
    try {
      setLoading(true);
      const oldestTimestamp = logs[0]?.timestamp;
      const previousLogs = await MimicLogs.fetchPreviousLogs({
        startTs: oldestTimestamp - 1000 * 60 * 5, // Fetching logs prior to the oldest log timestamp
        endTs: oldestTimestamp,
        limit: 5 
      });
      previousLogs.reverse();

      console.log("previous logs",previousLogs);
      setLogs(prevLogs => [...previousLogs, ...prevLogs]); // Prepending previous logs to the existing logs
      setLoading(false);
    } catch (error) {
      console.error('Error fetching previous logs:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const logContainer = logContainerRef.current;

    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = logContainer;
      
      const atTop = scrollTop === 0;
      
      
      console.log("atTop",atTop)
      if (atTop && !loading) {
        fetchPreviousLogs();
      }
    };

    logContainer.addEventListener('scroll', handleScroll);

    return () => {
      logContainer.removeEventListener('scroll', handleScroll);
    };
  }, [loading]); 

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

  const scrolToLatestLog=()=>
  {
    const logContainer = logContainerRef.current;
    logContainer.scrollTop = logContainer.scrollHeight;
  }
  return (
    <div className='bg-white rounded-md border-2 border-gray-100 relative'>
      <div className='flex justify-end pb-2 pr-5'>
        <span className='text-xs font-semibold text-gray-600 h-3 pt-5 '>
          {logs.length > 0 && `Showing logs for ${startTime} → ${endTime}`}
        </span>
      </div>
      <div ref={logContainerRef} className='bg-[#090f17] h-[590px] overflow-y-auto mt-2 mb-9 mx-3 rounded-md border-2 border-gray-100 p-2'>

        <div className={" justify-center " + (loading ? "flex" : "hidden")}>
          <svg aria-hidden="true" className="w-6 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="inline-block text-[#A8C3E8] text-sm text-wrap px-3">loading previous logs...</span>
        </div>

        <ul className='text-white'>
          {logs.map((log, index) => (
            <li key={index} className='px-2'>
              {
                index % 7 === 1 ? (
                  // error
                  <>
                    <div className='h-3 w-0.5 bg-red-400 shadow-lg shadow-red-500/50 rounded-sm inline-block mr-2' />
                    <div className='inline-block text-[#5E7BAA] text-xs'>{format(new Date(log.timestamp), ' MMM dd HH:mm:ss.SSS ')}</div>
                    <div className='inline-block text-[#F87171] text-xs'>&nbsp; [error] &nbsp;</div>
                    <div className='inline-block text-[#A8C3E8] text-sm text-wrap'> : {log.message}</div>
                  </>
                ) :
                  index % 5 === 1 ? (
                    //success
                    <>
                      <div className='h-3 w-0.5 bg-[#2DD4BF] shadow-lg shadow-green-500/50 rounded-sm inline-block mr-2' />
                      <div className='inline-block text-[#5E7BAA] text-xs'>{format(new Date(log.timestamp), ' MMM dd HH:mm:ss.SSS ')}</div>
                      <div className='inline-block text-[#2DD4BF] text-xs'>&nbsp; [Success] &nbsp;</div>
                      <div className='inline-block text-[#A8C3E8] text-sm text-wrap'> : {log.message}</div>
                    </>
                  ) :
                    (
                      //info
                      <>
                        <div className='h-3 w-0.5 bg-blue-400 shadow-lg shadow-blue-500/50 rounded-sm inline-block mr-2' />
                        <div className='inline-block text-[#5E7BAA] text-xs'>{format(new Date(log.timestamp), ' MMM dd HH:mm:ss.SSS ')}</div>
                        <div className='inline-block text-[#5E7BAA] text-xs'>&nbsp; [Info] &nbsp;</div>
                        <div className='inline-block text-[#A8C3E8] text-sm text-wrap'> : {log.message}</div>
                      </>
                    )
              }
            </li>
          ))}
        </ul>
        
      </div>
      {newLogsCnt>0 &&
      <div className='absolute bottom-14 right-12'>
        <NewLogButton scrolToLatestLog={scrolToLatestLog} newLogsCnt={newLogsCnt}/>
      </div>
      }
    </div>
  )
}

export default Logs;
