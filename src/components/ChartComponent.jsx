import React from 'react';
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
} from 'chart.js'

ChartJs.register(
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)



const ChartComponent = ({ data }) => {
    
    const graphColors = ['#DC2626','#2563EB' ,'#059669']; 

    const len=data.graphLines.length;

    const chartData = {
        labels: data.graphLines[0].values.map(entry => entry.timestamp),
        datasets: data.graphLines.map((graph, index) => ({
            label: graph.name,
            data: graph.values.map(entry => entry.value),
            fill: false,
            //len-index-1 is done only to place correct color at its pos
            borderColor: graphColors[len-index-1], 
            backgroundColor: graphColors[len-index-1],
            pointRadius: 0,
            pointHitRadius: 4,
            hoverBackgroundColor: '#f97316',
            hoverBorderColor: '#f97316',
            borderWidth: 1.5
            
        }))
    };

    console.log("charData", chartData);
    
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
                    }
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

    return <Line data={chartData} options={options} />;
};

export default ChartComponent;
