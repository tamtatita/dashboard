import React, { useEffect, useState } from "react";

import Default from "../../DefaultLayout/Default";
import DateTime from "../../Global/DateTime";

import { HomePageBox } from ".";
import { PageHeader } from "antd";
import useColumnSearch from "../../hooks/getColumnProps";
import axios from "axios";
import TableComponent from "../../Global/TableComponent";
import TimeLine from "./TimeLine";

const HomePage = () => {
  const [dataPaymment, setDataPayment] = useState([]);
  const [dataTimeLine, setDataTimeLine] = useState([]);
  const [getColumnSearchProps] = useColumnSearch();
  const columnTable = [
    {
      title: "Customer ID",
      dataIndex: "customerNumber",
      key: "customerNumber",
      width: "10%",
      ...getColumnSearchProps,
    },
    {
      title: "Payment ID",
      dataIndex: "checkNumber",
      key: "checkNumber",
      width: "10%",
      ...getColumnSearchProps,
    },
    {
      title: "Order Date",
      dataIndex: "paymentDate",
      key: "paymentDate",
      width: "20%",
      ...getColumnSearchProps,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      ...getColumnSearchProps,
      sorter: (a, b) => a.amount.length - b.amount.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get("http://localhost:8081/payment");
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
        const res = await axios.get("http://localhost:8081/timeline");
        setDataTimeLine(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);
  return (
    <Default>
      <DateTime />
      <PageHeader title="Dashboard" />

      {/* === THỐNG KÊ === */}
      <HomePageBox.Statistics />

      <div className="flex gap-4 items-center h-[60vh] my-6">
        <div className="w-2/3 rounded-lg h-full bg-white p-2 overflow-y-scroll">
          <h1>Recent Orders</h1>
          <TableComponent
            columns={columnTable}
            dataSource={dataPaymment.length > 0 && dataPaymment}
            bordered
          />
        </div>

        {/* === TIMELINE === */}
        <div className="w-1/3 rounded-lg h-full bg-white overflow-y-scroll p-4  ">
          <TimeLine data={dataTimeLine.slice(0, 30)} />
        </div>
      </div>
    </Default>
  );
};

export default HomePage;
