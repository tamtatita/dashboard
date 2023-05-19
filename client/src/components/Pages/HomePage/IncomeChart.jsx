import React, { useEffect, useState } from "react";
import { DataIncome } from "../../data/DataLine";
import { G2, Line } from "@ant-design/plots";
import axios from "axios";
const IncomeChart = () => {
  const [data, setData] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);
  const [dataToShow, setDataToShow] = useState(10); // Số lượng dữ liệu hiển thị ban đầu
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    // Tạo một mock API request để lấy dữ liệu
    const fetchData = async () => {
      setIsFetching(true);
      const res = await axios.get("https://gw.alipayobjects.com/os/antvdemo/assets/data/cpu-data.json");
      const data = await res.data

      // Giả định rằng bạn đang lấy dữ liệu từ một nguồn nào đó
      // Ví dụ: const response = await fetch('your-api-endpoint');
      // const data = await response.json();

      // Đoạn code mẫu dùng để giả lập dữ liệu
      const mockData = Array.from(
        { length: 100 },
        (_, index) => `Data ${index + 1}`
      );
      setData(mockData);

      setIsFetching(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (!isFetching) {
      const newDataToShow = Math.min(data.length, dataToShow);
      setDisplayedData(data.slice(0, newDataToShow));
    }
  }, [data, dataToShow, isFetching]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDataToShow((prevDataToShow) => prevDataToShow + 10); // Tăng số lượng dữ liệu hiển thị sau mỗi khoảng thời gian
    }, 60000); // Khoảng thời gian 1 phút (60000 milliseconds)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  G2.registerShape("point", "breath-point", {
    draw(cfg, container) {
      const data = cfg.data;
      const point = {
        x: cfg.x,
        y: cfg.y,
      };
      const group = container.addGroup();

      if (data.time === "14.20" && data.date === "today") {
        const decorator1 = group.addShape("circle", {
          attrs: {
            x: point.x,
            y: point.y,
            r: 10,
            fill: cfg.color,
            opacity: 0.5,
          },
        });
        const decorator2 = group.addShape("circle", {
          attrs: {
            x: point.x,
            y: point.y,
            r: 10,
            fill: cfg.color,
            opacity: 0.5,
          },
        });
        const decorator3 = group.addShape("circle", {
          attrs: {
            x: point.x,
            y: point.y,
            r: 10,
            fill: cfg.color,
            opacity: 0.5,
          },
        });
        decorator1.animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1800,
            easing: "easeLinear",
            repeat: true,
          }
        );
        decorator2.animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1800,
            easing: "easeLinear",
            repeat: true,
            delay: 600,
          }
        );
        decorator3.animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1800,
            easing: "easeLinear",
            repeat: true,
            delay: 1200,
          }
        );
        group.addShape("circle", {
          attrs: {
            x: point.x,
            y: point.y,
            r: 6,
            fill: cfg.color,
            opacity: 0.7,
          },
        });
        group.addShape("circle", {
          attrs: {
            x: point.x,
            y: point.y,
            r: 1.5,
            fill: cfg.color,
          },
        });
      }

      return group;
    },
  });
  const config = {
    autoFit: true,
    height: 500,
    data,
    meta: {
      cpu: {
        time: {
          type: "cat",
        },
        max: 100,
        min: 0,
      },
    },
    xField: "time",
    yField: "cpu",
    seriesField: "date",
    tooltip: {
      showMarkers: false,
    },
    point: {
      shape: "breath-point",
    },
  };

  return <Line {...config} />;
};

export default IncomeChart;
