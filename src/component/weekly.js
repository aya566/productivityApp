import './styles/week.css';

//import Chart from 'react-apexcharts';

//import  ApexCharts from 'apexcharts';
import ReactApexChart from 'react-apexcharts'

import { useState } from 'react';

function Weekly(){

  const [mydata , setMydata] = useState({
    options: {
      colors: [ '#0b578eeb' ,'#459bcd'],
      chart: {
        id: 'basic-bar',
        toolbar:{
          show: true,
          tools: {
            selection: false,
            zoom: false,
            zoomin: false,
            zoomout: false,
            pan: false,
            reset: true,

          }
        }
        
      },
      xaxis:{
        categories: ['SAT..','SUN..','MON..','TUS..','WED..','THURS..','FRI..']
      }
    },
    series:[
      {
        name: 'updates',
        data: [ 25,33,13,89,34,20,30]
      },
      {
        name: 'new tasks',
        data: [ 70,47,72,45,12,50,38]
      },

    ]
  });

   
    return (
        <div className='week-page'>
        <h1>Weekly Tracker with Graphical View</h1>
        <div className='word-flex'>
        <div>
          <ReactApexChart 
          options={mydata.options}
          series={mydata.series}
          type='area'
          width='600' />
        </div>
        <p>
        A weekly tracker enhance your personal and professional organization,
         productivity, and goal achievement. By breaking down tasks and responsibilities into a weekly format, 
        helps you set goals, prioritize tasks, and track their progress & empowers you to plan, reflect, and learn, ultimately contributing to their success and satisfaction. 
        </p>
        </div>
      </div>
    );
    };
  

  export default Weekly;