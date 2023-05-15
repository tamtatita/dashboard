import React, { useEffect, useState } from "react";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
import Header from "../Global/HeaderComponent";
// import { DataLine as dataLine } from "../data/DataLine";
import axios from "axios";

import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";
import Default from "../DefaultLayout/Default";
import { Line, Column, Area } from "@ant-design/plots";

const HomePage = () => {
  const [dataArea, setDataArea] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
        );
        console.log(response);
        setDataArea(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("data", dataArea);

  const config = {
    data: dataArea?.length > 0 ? dataArea : [],
    xField: "timePeriod",
    yField: "value",
    color: "#FFFF00",
    xAxis: {
      range: [0, 1],
    },
  };

  return (
    <Default>
      <div className="flex w-full justify-between gap-6">
        <FourBoxFirst
          title="Total Sum"
          value="75,00"
          percent="42"
          data={<Area {...config} />}
        />
        <FourBoxFirst
          title="Total Sum"
          value="75,00"
          percent="90"
          data={<Column {...configCol} />}
        />
        <FourBoxFirst
          title="Total Sum"
          value="75,00"
          percent="12"
          data={<Column {...configCol} />}
        />
        <FourBoxFirst
          title="Total Sum"
          value="75,00"
          percent="70"
          data={<Area {...config} />}
        />
        {/* <Row gutter={16}>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Active"
                value={11.28}
                precision={2}
                valueStyle={{
                  color: "#3f8600",
                }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
          <Col span={12}>
            <Card bordered={false}>
              <Statistic
                title="Idle"
                value={9.3}
                precision={2}
                valueStyle={{
                  color: "#cf1322",
                }}
                prefix={<ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        </Row> */}
      </div>
    </Default>
  );
};

const data = [
  {
    action: "浏览网站",
    pv: 50000,
  },
  {
    action: "放入购物车",
    pv: 35000,
  },
  {
    action: "生成订单",
    pv: 25000,
  },
  {
    action: "支付订单",
    pv: 15000,
  },
  {
    action: "完成交易",
    pv: 8500,
  },
];

const configCol = {
  data,
  xField: "action",
  yField: "pv",
  // colorField: "type",
  color: "#19CDD7",
};

const FourBoxFirst = ({ title, value, percent, data }) => {
  return (
    <div className="basis-[25%] h-[18em] p-3 flex flex-col rounded-lg bg-[--primary]">
      <h1 className="text-lg font-semibold text-left capitalize text-gray-100">
        {title}
      </h1>
      <div className="flex items-center gap-4 ">
        <h1 className="text-lg font-semibold text-white">${value}</h1>
        <div
          className={`${
            percent >= 70
              ? "text-green-500 border-green-500 "
              : `${percent}` >= 40 && `${percent}` <= 69
              ? "text-orange-500 border-orange-500 "
              : "text-red-500 border-red-500 "
          } px-5 py-1 rounded-md text-md font-semibold border-[1px] flex items-center gap-2`}
        >
          {percent >= 50 ? <BiTrendingUp /> : <BiTrendingDown />}
          {percent} %
        </div>
      </div>

      {data}
    </div>
  );
};

export default HomePage;
