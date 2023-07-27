import { DownOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Badge, Button, Dropdown, PageHeader, Space, Table, Tag } from "antd";

import React, { useEffect, useState } from "react";
import Default from "../../DefaultLayout/Default";
import axios from "axios";
import { API as url } from "../../../API";
import useColumnSearch from "../../hooks/getColumnProps";


const Orders = () => {
  const [dataOrder1, setDataOrder1] = useState([]);
  const [dataOrder2, setDataOrder2] = useState([]);
  const [getColumnSearchProps] = useColumnSearch();

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/order`);
        setDataOrder1(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
    console.log(dataOrder1);
  }, []);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/orderdetail`);
        setDataOrder2(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
    console.log(dataOrder2);
  }, []);
  const expandedRowRender = () => {
    const columns = [
      {
        title: "Order Number",
        dataIndex: "orderNumber",
        key: "orderNumber",
        width: "10%",
        ...getColumnSearchProps("orderNumber"),
      },
      {
        title: "Customer Number",
        dataIndex: "customerNumber",
        key: "customerNumber",
        width: "10%",
        ...getColumnSearchProps("customerNumber"),
      },

      {
        title: "Product Code",
        dataIndex: "productCode",
        key: "productCode",
        width: "10%",
        ...getColumnSearchProps("productCode"),
      },
      {
        title: "Product Name",
        dataIndex: "productName",
        key: "productName",
        width: "20%",
        ...getColumnSearchProps("productName"),
      },
      {
        title: "Type",
        dataIndex: "productLine",
        key: "productLine",
        width: "15%",
        ...getColumnSearchProps("productLine"),
      },

      {
        title: "Quantity ",
        dataIndex: "quantityOrdered",
        key: "quantityOrdered",
        width: "10%",
        ...getColumnSearchProps("quantityOrdered"),
      },
      {
        title: "Price Each",
        dataIndex: "priceEach",
        key: "priceEach",
        width: "10%",
        ...getColumnSearchProps("priceEach"),
      },
      {
        title: "sumMoney",
        dataIndex: "sumMoney",
        key: "sumMoney",
      },
    ];
    const data = [];
    if (dataOrder2.length > 0) {
      for (let i = 0; i < dataOrder2?.length; ++i) {
        const order = dataOrder2[i];
        data.push({
          key: i.toString(),
          orderNumber: order.orderNumber,
          customerNumber: order.customerNumber,
          productCode: order.productCode,
          productName: order.productName,
          productLine: order.productLine,
          quantityOrdered: order.quantityOrdered,
          priceEach: order.priceEach,
          sumMoney: order.sumMoney,
        });
      }
    }

    return (
      <div className="">
        <h1 className='font-bold text-xl text-gray-900'>OrderDetails</h1>
        <Table columns={columns} dataSource={data} pagination={false} />;
      </div>
    );
  };
  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderNumber",
      key: "orderNumber",
      width: "10%",
      ...getColumnSearchProps("orderNumber"),
      defaultSortOrder: "descend",
      sorter: (a, b) => a.orderNumber - b.orderNumber,
    },
    {
      title: "Customer ID",
      dataIndex: "customerNumber",
      key: "customerNumber",
      width: "10%",

      ...getColumnSearchProps("customerNumber"),
      defaultSortOrder: ["descend"],
      sorter: (a, b) => a.customerNumber - b.customerNumber,
    },

    {
      title: "Order Date",
      dataIndex: "orderDate",
      key: "orderDate",
      ...getColumnSearchProps("orderDate"),
      sorter: (a, b) => new Date(a.orderDate) - new Date(b.orderDate),
      defaultSortOrder: "descend",
      sortDirections: ["descend", "ascend"],

      render: (orderDate) => {
        const orderDates = new Date(orderDate).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        return orderDates;
      },
    },
    {
      title: "Shipped Date",
      dataIndex: "shippedDate",
      key: "shippedDate",

      ...getColumnSearchProps("shippedDate"),
      sorter: (a, b) => new Date(a.shippedDate) - new Date(b.shippedDate),
      defaultSortOrder: "descend",
      sortDirections: ["descend", "ascend"],

      render: (shippedDate) => {
        const shippedDates = new Date(shippedDate).toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        return shippedDates;
      },
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      ...getColumnSearchProps("status"),
      sorter: (a, b) => a.status.length - b.status.length,
      sortDirections: ["descend", "ascend"],

      render: (status) => {
        let color = "";
        if (status == "In Process") {
          color = "#FFFF00";
        } else if (status == "Shipped") {
          color = "#00DD00";
        } else if (status == "Cancelled") {
          color = "#FF0000";
        } else if (status == "Disputed") {
          color = "#0033FF";
        } else if (status == "On Hold") {
          color = "#FF6600";
        } else if (status == "Resolved") {
          color = "black";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];

  const data = [];
  if (dataOrder1.length > 0) {
    for (let i = 0; i < dataOrder1?.length; ++i) {
      const order = dataOrder1[i];
      data.push({
        key: i.toString(),
        orderNumber: order.orderNumber,
        customerNumber: order.customerNumber,
        Name: order.Name,
        orderDate: order.orderDate,
        shippedDate: order.shippedDate,
        status: order.status,
      });
    }
  }

  return (
    <Default>
      <PageHeader title="Manager Orders" />

      <Table
        columns={columns}
        expandable={{
          expandedRowRender,
          defaultExpandedRowKeys: ["0"],
        }}
        dataSource={data}
        scroll={{
          y: 300,
        }}
      />
    </Default>
  );
};
export default Orders;
