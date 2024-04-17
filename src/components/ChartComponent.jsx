import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'

ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

const ChartComponent = ({ data }) => {
    console.log(data);  

    
    const graphColors = ['rgb(75, 192, 192)', 'rgb(54, 162, 235)' ,'rgb(255,0,0)']; 

    const chartData = {
        labels: data.graphLines[0].values.map(entry => entry.timestamp),
        datasets: data.graphLines.map((graph, index) => ({
            label: graph.name,
            data: graph.values.map(entry => entry.value),
            // fill: false,
            borderColor: graphColors[index], 
            // tension: 0.1
        }))
    };
    
    const options={
        responsive:true,
        plugins:{
            legend:{
                position:"bottom",
            }
        },
        title:{
            display:true,
            text:"hi"
        }
    }

    return <Line data={chartData} options={options}/>;
};

export default ChartComponent;
