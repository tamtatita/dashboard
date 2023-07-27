import React, { useEffect, useState } from "react";
import Default from "../../DefaultLayout/Default";
import { PageHeader, Table, Tag } from "antd";
import axios from "axios";
import { API as url } from "../../../API";
import useColumnSearch from "../../hooks/getColumnProps";

const Products = () => {
  const [getColumnSearchProps] = useColumnSearch();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get(`${url}/product`);
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAPI();
  }, []);

  const columns = [
    {
      title: "ID",
      key: "productCode",
      dataIndex: "productCode",
      ...getColumnSearchProps("productCode"),
      // sorter: (a, b) => parseFloat(a.amount) - parseFloat(b.amount),
      // sortDirections: ["descend", "ascend"],
    },

    {
      title: "Name",
      key: "productName",
      dataIndex: "productName",
      ...getColumnSearchProps("productName"),
      sorter: (a, b) => a.productName.length - b.productName.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Type",
      key: "productLine",
      dataIndex: "productLine",
      ...getColumnSearchProps("productLine"),
      sorter: (a, b) => a.productLine.length - b.productLine.length,
      sortDirections: ["descend", "ascend"],
      render: (productLine) => {
        let color = "";
        if (productLine == "Motorcycles") color = "red";
        else if (productLine == "Classic Cars") color = "blue";
        else if (productLine == "Trucks and Buses") color = "lime";
        else if (productLine == "Vintage Cars") color = "yellow";
        else if (productLine == "Planes") color = "green";
        else if (productLine == "Ships") color = "black";
        else color = "error";
        return <Tag color={color}>{productLine}</Tag>;
      },
    },
    {
      title: "Scale",
      key: "productScale",
      dataIndex: "productScale",
      ...getColumnSearchProps("productScale"),
      sorter: (a, b) => a.productScale.length - b.productScale.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Vendor",
      key: "productVendor",
      dataIndex: "productVendor",
      sorter: (a, b) => a.productVendor.length - b.productVendor.length,
      sortDirections: ["descend", "ascend"],
      ...getColumnSearchProps("productVendor"),
    },

    {
      title: "Stock",
      key: "quantityInStock",
      dataIndex: "quantityInStock",
      ...getColumnSearchProps("quantityInStock"),
      sorter: (a, b) => a.quantityInStock - b.quantityInStock,
      sortDirections: ["descend", "ascend"],
      render: (quantityInStock) => {
        let color = "";
        if (quantityInStock < 1000) color = "#FF0033";
        else if (quantityInStock >= 1000 && quantityInStock <= 9000)
          color = "#FF6600";
        else color = "#33FF33";
        return <Tag color={color}>{quantityInStock}</Tag>;
      },
    },
    {
      title: "Buy Price",
      key: "buyPrice",
      dataIndex: "buyPrice",
      ...getColumnSearchProps("buyPrice"),
    },
    {
      title: "MSRP",
      key: "MSRP",
      dataIndex: "MSRP",
      ...getColumnSearchProps("MSRP"),
    },
  ];
  return (
    <div>
      <Default>
        <PageHeader title="Manager Products" />

        <Table
          columns={columns}
          expandable={{
            defaultExpandedRowKeys: ["0"],
          }}
          dataSource={data}
          scroll={{
            y: 300,
          }}
        />
      </Default>
    </div>
  );
};

export default Products;
