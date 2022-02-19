import React from 'react';
import './BarChart.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Daily Completed/Rejection Orders',
      },
    },
  };

  const labels = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  const barData = {
    labels,
    datasets:[
        {
            label:"Daily Completed Orders",
            data:[33, 53, 85, 41, 44, 65, 85],
            borderColor:'rgba(255,134,0,1)',
            backgroundColor:'rgba(194,148,98,1)',
        },
        {
            label:"Daily Rejected Orders",
            data:[85, 80, 23, 55, 66, 76, 33],
            borderColor:'rgba(226,72,46,1)',
            backgroundColor:'rgba(208,114,98,1)',
        },
    ]
}

function BarChart() {
  return (
        <>
            <div className="barchart__Container">
                <Bar options={barOptions} data={barData} />
            </div>
        </>
    );
}

export default BarChart;
