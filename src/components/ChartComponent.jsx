import React, { useEffect, useRef, useState } from 'react';
import 'chartjs-adapter-date-fns';
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



const ChartComponent = ({ data }) => {
    
    const chartRef=useRef(null);
    const [gradients,setGradients]=useState([])
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

    return <Line ref={chartRef} data={chartData} options={options} />;
};

export default ChartComponent;
