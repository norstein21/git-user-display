import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const BarChart = ({dataChart}) =>{
  const chartConfigs = {
  type: 'bar3d',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: {
  chart: {
    "caption": "Most Popular",
    // "subCaption": "My Popular Repo By Languanges",
    "xAxisName": "Repo",
    "yAxisName": "Stars",
    "xAxisNameFontSize": "16px",
    "yAxisNameFontSize": "16px"
    // "numberSuffix": "K",
    // "decimal" : 0,
    // "doughnutRadius" : "45%" ,
    // "showPercentValues":0,
    // "theme": "candy"
  },
  data: dataChart
}
};


  return <ReactFC {...chartConfigs} />;
}


export default BarChart;