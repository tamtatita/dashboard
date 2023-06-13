import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";

const ProductLinesChart = ({ data }) => {
  const config = {
    data,
    isGroup: true,
    xField: "productLine",
    yField: "Total",
    seriesField: "year",

    /** 设置颜色 */
    color: ["#33CCFF", "#FF3300"],

    pattern: {
      padding: 3,
    },

    /** 设置间距 */
    marginRatio: 0.2,
    label: {
      // 可手动配置 label 数据标签位置
      position: "top",

      // 'top', 'middle', 'bottom'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: "interval-adjust-position",
        }, // 数据标签防遮挡
        {
          type: "interval-hide-overlap",
        }, // 数据标签文颜色自动调整
        {
          type: "adjust-color",
        },
      ],
    },
  };
  return <Column {...config} />;
};

export default ProductLinesChart;
