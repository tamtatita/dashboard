import React, { useContext } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";

import {
  Form,
  InputNumber,
  Radio,
  Select,
  Button,
  Input,
  Modal,
  PageHeader,
  Space,
  Table,
  Tag,
} from "antd";
import Default from "../../DefaultLayout/Default";
import { useEffect, useState } from "react";
import axios from "axios";

import TableComponent from "../../Global/TableComponent";
import useColumnSearch from "../../hooks/getColumnProps";
import { API as url } from "../../../API.js";
import { Link } from "react-router-dom";

const Customers = () => {
  const [getColumnSearchProps] = useColumnSearch();

  const [customer, setCustomer] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/customer`);
        setCustomer(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  const columnTable = [
    {
      title: "ID",
      dataIndex: "customerNumber",
      key: "customerNumber",
      width: "10%",
      ...getColumnSearchProps("customerNumber"),
    },
    {
      title: "Name",
      dataIndex: "customerName",
      key: "customerName",
      width: "10%",
      ...getColumnSearchProps("customerName"),
    },
    {
      title: "First Name",
      dataIndex: "contactFirstName",
      key: "contactFirstName",
      width: "10%",
      ...getColumnSearchProps("contactFirstName"),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: "10%",
      ...getColumnSearchProps("phone"),
    },
    {
      title: "Address 1",
      dataIndex: "addressLine1",
      key: "addressLine1",
      width: "10%",
      ...getColumnSearchProps("addressLine1"),
    },
    {
      title: "Address 2",
      dataIndex: "addressLine2",
      key: "addressLine2",
      width: "10%",
      ...getColumnSearchProps("addressLine2"),
    },
    {
      title: "City",
      dataIndex: "city",
      key: "city",
      width: "10%",
      ...getColumnSearchProps("city"),
    },
    {
      title: "state",
      dataIndex: "state",
      key: "state",
      width: "10%",
      ...getColumnSearchProps("state"),
    },
    {
      title: "Country",
      dataIndex: "country",
      key: "country",
      width: "10%",
      ...getColumnSearchProps("country"),
    },
    {
      title: "Employee ID",
      dataIndex: "salesRepEmployeeNumber",
      key: "salesRepEmployeeNumber",
      width: "10%",
      ...getColumnSearchProps("salesRepEmployeeNumber"),
      render: (salesRepEmployeeNumber) => {
        return (
          <Link
            to={`/employee/${salesRepEmployeeNumber}`}
            className="font-bold text-sky-500"
          >
            {salesRepEmployeeNumber}
          </Link>
        );
      },
    },
    {
      title: "creditLimit",
      dataIndex: "creditLimit",
      key: "creditLimit",
      width: "10%",
      ...getColumnSearchProps("creditLimit"),
    },
  ];
  return (
    <>
      <Default>
        <PageHeader title="Manager Customers" />
        <Space className="mb-4">
          <Button
            icon={<PlusCircleOutlined />}
            type="primary"
            // onClick={handleAddEmp}
            size="large"
          >
            Add Emp
          </Button>
        </Space>
        <TableComponent
          dataSource={customer}
          scroll={{
            y: 300,
          }}
          columns={columnTable}
        />
      </Default>
    </>
  );
};

export default Customers;
