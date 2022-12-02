import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

const PieChart = ({dataChart}) =>{
  const chartConfigs = {
  type: 'pie3d',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: {
  chart: {
    "caption": "Languages",
    "subCaption": "List of Languages that I Frequently Used",
    // "xAxisName": "Country",
    // "yAxisName": "Reserves (MMbbl)",
    // "numberSuffix": "K",
    "decimal" : 0,
    "pieRadius" : "35%" ,
    "theme": "fusion"
  },
  data: dataChart
}
};


  return <ReactFC {...chartConfigs} />;
}


export default PieChart;