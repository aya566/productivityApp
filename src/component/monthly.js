import './styles/week.css';
import ReactApexChart from 'react-apexcharts';

function Month(){
  const options = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    colors: [ '#074F68','#0b578eeb' ,'#459bcd','#8ECBEA' ],
  };
  
  const series = [44, 55, 13, 43];
   
    return (
        <div className='week-page'>
        <h1>Monthly Tracker with Pie Chart View</h1>
        <div className='word-flex'>
        <div>
    <ReactApexChart options={options} series={series} type="pie" height={350} width={500} />
  </div>
  <p>A monthly tracker improve your personal and professional lives.
     By providing a broader perspective on time, it allows you to set and work toward more long-term goals,
      making it easier to break down larger objectives into manageable tasks. This strategic planning not only enhances productivity 
      but also helps in better time management and resource allocation. Overall, a monthly tracker serves as an invaluable organizational tool, aiding you
           in achieving their goals, maintaining a balanced life, and fostering personal and professional growth.</p>
           </div>
      </div>
    );
    };
  

  export default Month;