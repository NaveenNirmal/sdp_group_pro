import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import './LineChart.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins:{
        legend:{
            position: 'top'
        },
        title:{
            display: true,
            text: 'Daily Register Report (Custormers/Riders/Vehicles)'
        },
    },
};

const labels = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const data = {
    labels,
    datasets:[
        {
            label:"Daily Registered Customers",
            data:[33, 53, 85, 41, 44, 65, 85, 80, 23, 55, 66, 76],
            borderColor:'rgba(0,56,98,1)',
            backgroundColor:'rgba(0,143,255,1)',
        },
        {
            label:"Daily Registered Riders",
            data:[85, 80, 23, 55, 66, 76, 33, 25, 35, 51, 54, 65],
            borderColor:'rgba(194,0,255,1)',
            backgroundColor:'rgba(93,52,106,1)',
        },
        {
            label:"Daily Registered Vehicles",
            data:[70, 60, 35, 75, 88, 12, 43, 51, 10, 76, 34, 80],
            borderColor:'rgba(2,180,54,1)',
            backgroundColor:'rgba(101,176,123,1)',
        }
    ]
}

function LineChart() {



  return(
        <>
            <div className="linechart__Container">
                <Line options={options} data={data}/>
            </div>
        </>
    );
}

export default LineChart;
