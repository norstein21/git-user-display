import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const PieChart = ({dataChart}) =>{
  const chartConfigs = {
  type: 'doughnut2d',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: {
  chart: {
    "caption": "Stats",
    "subCaption": "My Stats Per Languanges",
    // "xAxisName": "Country",
    // "yAxisName": "Reserves (MMbbl)",
    // "numberSuffix": "K",
    "decimal" : 0,
    "doughnutRadius" : "45%" ,
    "showPercentageValue":0,
    "theme": "candy"
  },
  data: dataChart
}
};


  return <ReactFC {...chartConfigs} />;
}


export default PieChart;