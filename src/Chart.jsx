import React from 'react';
import {Line} from 'react-chartjs-2';



const Chart = ({interestTotal, simpleTotal, compoundInterestTotal, compoundTotal, months}) => {

  const data = {
      labels: months,// can work dynamically
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',//refers to the color of the point
          borderColor: 'rgba(75,192,192,1)',// refers to line border
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
  
    return(
        <div>
        <Line data={data}/>
        </div>
    )
}

export default Chart;