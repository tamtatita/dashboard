import { Bar } from "@ant-design/plots";
import { useState } from "react";

const BarChart = ({ data }) => {
  
  const config = {
    data: data.length > 0 && data,
    xField: "Total",
    yField: "Name",
    barWidthRatio: 0.6,
   
    seriesField: "Total",
    color: "#3dcfff",
    legend: false,
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  };
  return <Bar {...config}  />;
};

export default BarChart;
