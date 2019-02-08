import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';
import {Card, CardBody, CardHeader} from 'reactstrap';
import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips';

const line = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'sales',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(93, 104, 111, 1)',
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
      pointRadius: 3,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 220],
    },
  ],
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: true
}

class Charts extends Component {
  render() {
    return (
      <div className="animated fadeIn">
          <Card >
            <CardHeader>
              Line Chart
              <div className="card-header-actions h-75 d-inline-block">
                <a href="http://www.chartjs.org" className="card-header-action">
                  <small className="text-muted">docs</small>
                </a>
              </div>
            </CardHeader>
            <CardBody>
              <div className="chart-wrapper">
                <Line data={line} options={options} />
              </div>
            </CardBody>
          </Card>
      </div>
    );
  }
}

export default Charts;
