import React from 'react'
import PropTypes from 'prop-types'; 

const TimeRangeSelect = ({searchParams,setChanges}) => {
  return (
    <form className="max-w-sm mx-auto">
        <select value={searchParams.get('timeRange')} onChange={(e)=>{setChanges(e.target.value,Date.now())}} id="duration" className="font-semibold bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-200 block w-full p-2.5 dark:bg-white dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue={5} >Last 5 minutes</option>
            <option value={15}>Last 15 minutes</option>
            <option value={30}>Last 30 minutes</option>
            <option value={60}>Last 1 hour</option>
            <option value={180}>Last 3 hours</option>
            <option value={360}>Last 6 hours</option>
        </select>
    </form>
  )
}

// Define PropTypes for Navbar component
TimeRangeSelect.propTypes = {
    searchParams: PropTypes.object.isRequired, 
    setChanges: PropTypes.func.isRequired,
  };
export default TimeRangeSelect