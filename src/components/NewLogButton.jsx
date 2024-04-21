import React from 'react'

const NewLogButton = ({scrolToLatestLog,newLogsCnt}) => {
  return (
    
        <span className='mt-2 focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-semibold rounded-md text-xs px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900 '>
             <button onClick={scrolToLatestLog}>{newLogsCnt} new logs 🡇</button>
        </span>
     
  )
}

export default NewLogButton