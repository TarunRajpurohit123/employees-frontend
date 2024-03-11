import React from 'react';
import { Bar as AntBar, Line as AntLine, Pie as AntPie } from '@ant-design/charts';
import { statusChart } from '../../api/api';

const ChartComponent = ({ chartType,data }) => {
  

  // Render different chart types based on user selection
  let chart;
  switch (chartType) {
    case 'bar':
      chart = <AntBar data={data} xField="status" yField={["count","percentage"]} />;
      break;
    case 'line':
      chart = <AntLine data={data} xField="status" yField={["count","percentage"]} />;
      break;
    case 'pie':
      chart = <AntPie data={data} xField="status" yField={["count","percentage"]} colorField={"status"}/>;
      break;
    default:
      chart = <div>No chart selected</div>;
  }

  return <div>{chart}</div>;
};

export default ChartComponent;
