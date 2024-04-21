import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { differenceInMinutes } from 'date-fns';
import 'chartjs-adapter-date-fns';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js'
import { Link } from 'react-router-dom';

ChartJs.register(
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

ChartJs.register(zoomPlugin);

const ChartComponent = ({ searchParams,setChanges,data }) => {
    
    const chartRef=useRef(null);
    const [gradients,setGradients]=useState([])
    const [zoomCompleted, setZoomCompleted] = useState(false);
    
    const [timeRange,setTimeRange]=useState(0);
    const [time,setTime]=useState(0);

    useEffect(()=>{
        const ctx=chartRef.current.ctx;
        let redGradient = ctx.createLinearGradient(0, 0, 0, 450);
        redGradient.addColorStop(0, "rgb(220,38,38,1)");
        redGradient.addColorStop(0.5, "rgb(255, 255, 255,1)");
        redGradient.addColorStop(1, "rgb(255, 255, 255,0)");
        
        let blueGradient = ctx.createLinearGradient(0, 0, 0, 450);
        blueGradient.addColorStop(0, "rgb(37,99,235,0.4)");
        blueGradient.addColorStop(0.5, "rgb(255, 255, 255,0)");
        blueGradient.addColorStop(1, "rgb(255, 255, 255,0)");

        let GreenGradient = ctx.createLinearGradient(0, 0, 0, 450);
        GreenGradient.addColorStop(0, "rgb(5,150,105,0.4)");
        GreenGradient.addColorStop(0.5, "rgb(255, 255, 255,0)");
        GreenGradient.addColorStop(1, "rgb(255, 255, 255,0)");

        setGradients([redGradient,blueGradient,GreenGradient])

    },[chartRef])

    //red blue green
    const graphColors = ['#DC2626','#2563EB' ,'#059669']; 

    const len=data.graphLines.length;

   
    const chartData = {
        labels: data.graphLines[0].values.map(entry => entry.timestamp),
        datasets: data.graphLines.map((graph, index) => ({
            label: graph.name,
            data: graph.values.map(entry => entry.value),
            fill: data.name=="Disk IOPS"?true:false,
            //len-index-1 is done only to place correct color at its pos
            borderColor: graphColors[len-index-1], 
            backgroundColor: gradients[len-index-1],
            pointRadius: 0,
            pointHitRadius: 4,
            hoverBackgroundColor: '#f97316',
            hoverBorderColor: '#f97316',
            borderWidth: 1.5
            
        }))
    };

   
    
    const options = {
        responsive: true,
        maintainAspectRatio:false,
        plugins: {
            title: {
                display: true,
                text: data.name ,
                padding: {
                    top: 10,
                    bottom: 20
                },
                align:'start'
                
            },
            legend: {
                position: 'bottom',
                align:'start',
                labels:{
                    boxWidth:10,
                    font:{
                        weight:'bold'
                    },
                },

            },
            zoom: {
                // pan: {
                //   enabled:true,
                //   mode:'x',
                //   threshold:10,
                // },
                
                zoom: {
                    mode:'x',
                    drag:{
                        enabled:true,
                        backgroundColor:'#bfdbfe',
                        borderColor:'#bfdbfe',
                        borderWidth:1,
                        // threshold:500,
                        drawTime:'beforeDraw',
                        
                    },
                    onZoomStart:({chart,event,point})=>{
                        console.log("start",chart,event,point);
                    },
                    onZoom:({chart})=>{
                        console.log("Zooming",chart)
                    },
                    onZoomComplete:({chart})=>{
                        
                        let len=chart.scales.x.ticks.length;
                        setTime(chart.scales.x.ticks[len-1].value)
                        setTimeRange(differenceInMinutes(chart.scales.x.ticks[len-1].value,chart.scales.x.ticks[0].value));

                        console.log("timeRange",differenceInMinutes(chart.scales.x.ticks[len-1].value,chart.scales.x.ticks[0].value))
                        console.log("time",chart.scales.x.ticks[len-1].value)
                        setZoomCompleted(true);
                        console.log("zoom Complete",chart)
                    }
                    
                }
              }
        },
        transitions: {
            zoom: {
              animation: {
                duration: 1000*60*60*60,
                easing: 'easeOutCubic'
              }
            }
          },
        scales:{
            x: {
                type: 'time',
                time: {
                    unit: 'minute',
                    parser: 'HH:mm', 
                    displayFormats: {
                        hour: 'HH:mm', 
                        minute: 'HH:mm' 
                    }
                },
                ticks: {
                    color: '#94A0B2' 
                },
                grid: {
                    color: 'rgb(206,224,248,0.5)' 
                }
            },
            y:{
                beginAtZero:true,
                position: 'right',
                ticks: {
                    color: '#94A0B2' 
                },
                grid: {
                    color: 'rgb(206,224,248,0.5)' 
                }
            }
        }
        
    };
    
    const handleButtonClick = () => {
        console.log('Button clicked');
        // Add logic for button click event
    };
    return (
       
        <div className='bg-white min-h-[280px] border-2 border-blue-200 rounded-md p-3 relative'>
            {zoomCompleted && (
                <div className='absolute z-50 right-12' >
                    <button type='button' className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-8 focus:ring-gray-300 font-semibold rounded-md text-sm px-2 py-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={handleButtonClick} >
                        <Link to={"/logs?timeRange="+timeRange+"&time="+time}>View Logs</Link>
                    </button>
                </div>
            )}
            <Line ref={chartRef} data={chartData} options={options} />
        </div>    
       
    );
};

ChartComponent.propTypes = {
    searchParams: PropTypes.object.isRequired,
    setChanges: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
  };

export default ChartComponent;
