import React, { useContext, useEffect, useState } from "react";

import Default from "../../DefaultLayout/Default";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { HomePageBox } from ".";
import { PageHeader, Button, Tag, Tooltip } from "antd";
import useColumnSearch from "../../hooks/getColumnProps";
import axios from "axios";
import TableComponent from "../../Global/TableComponent";
import TimeLine from "./TimeLine";
import { API as url } from "../../../API";
import BarChart from "./BarChart";

const HomePage = () => {
  const [dataPayment, setDataPayment] = useState([]);
  const [dataTimeLine, setDataTimeLine] = useState([]);
  const [productLines, setProductLines] = useState([]);

  const [dataRealTime, setDataRealTime] = useState([]);
  const [displayedItems, setDisplayedItems] = useState(50);
  const [dataBarChart, setDataBarChart] = useState([]);
  const [getColumnSearchProps] = useColumnSearch();

  const columnTable = [
    {
      title: "Customer ID",
      dataIndex: "customerNumber",
      key: "customerNumber",
      width: "10%",
      ...getColumnSearchProps("customerNumber"),
    },
    {
      title: "Payment ID",
      dataIndex: "checkNumber",
      key: "checkNumber",
      width: "10%",
      ...getColumnSearchProps("checkNumber"),
    },
    {
      title: "Order Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      width: "30%",
      ...getColumnSearchProps("paymentDate"),
      render: (paymentDate) => {
        const orderDates = new Date(paymentDate).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        });
        return orderDates;
      },
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      width: "10%",
      ...getColumnSearchProps("amount"),
      sorter: (a, b) => parseFloat(a.amount) - parseFloat(b.amount),
      sortDirections: ["descend", "ascend"],

      render: (amount) => {
        let color = "";
        if (amount <= 10000) {
          color = "#33CCFF";
        } else if (amount > 10000 && amount <= 20000) {
          color = "#FF3333";
        } else if (amount > 20000) {
          color = "#33FF33";
        }
        return <Tag color={color}>{amount}</Tag>;
      },
    },
  ];

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/payment`);
        setDataPayment(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/realtime`);
        setDataRealTime(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  // PRODUCTLINE
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/productline`);
        setProductLines(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/timeline`);
        setDataTimeLine(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/cusbuyorder`);
        setDataBarChart(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);
  return (
    <Default>
      <div className="flex flex-col gap-8">
        <PageHeader title="Dashboard" />

        {/* === THỐNG KÊ === */}
        <HomePageBox.Statistics />

        {/* === BIỂU ĐỒ REALTIME === */}
        <div
          className="
          bg-white p-3 rounded-lg w-full h-auto"
        >
          <div className="flex items-center gap-4">
            <span>Biểu đồ Realtime việc đặt hàng</span>
            <Tooltip
              title="Biểu đồ realtime việc đặt hàng từ ngày 1/6/2003 -> 31/5/2005"
              color="green"
            >
              <span>
                <QuestionCircleOutlined />
              </span>
            </Tooltip>
          </div>
          {/* <HomePageBox.RealTimeChart /> */}
        </div>

        {/* === PRODUCT LINE ===  */}
        <div className=" w-full bg-white flex gap-4">
          {productLines.length > 0 && (
            <div className=" w-2/3 p-2 rounded-lg">
              <h1 className="font-bold bg-white text-xl capitalize">
                Total orders by product line over years.
              </h1>
              <HomePageBox.ProductLinesChart
                data={productLines.length > 0 && productLines}
              />
            </div>
          )}
          <div className="bg-white w-1/3">
            <h1>Biểu đồ khác</h1>
          </div>
        </div>

        {/* BAR CHART */}
        <div className="bg-white p-3 rounded-lg">
          <h4 className="font-bold text-xl capitalize flex items-center gap-3 ">
            Top 10 customers with the highest order count
            <Tooltip color="green" title=" Clicking on each column item will display the details">
              <QuestionCircleOutlined size={30} />
            </Tooltip>
          </h4>
          <BarChart data={dataBarChart.length > 0 && dataBarChart} />
        </div>

        <div className="flex gap-4 items-center h-[60vh] ">
          <div className="w-2/3 rounded-lg h-full bg-white p-2 overflow-y-scroll">
            <h1 className="font-bold text-xl">Recent Orders</h1>
            <TableComponent
              columns={columnTable}
              dataSource={dataPayment.length > 0 && dataPayment}
              bordered
            />
          </div>

          {/* === TIMELINE === */}

          <div className="w-1/3 rounded-lg h-full bg-white overflow-y-scroll p-4  ">
            {dataTimeLine.length > 0 && (
              <TimeLine data={dataTimeLine?.slice(0, 30)} />
            )}
          </div>
        </div>
      </div>
    </Default>
  );
};

export default HomePage;
