import { Button, Input, Space, Table } from "antd";
import React, { useRef, useState } from "react";

const TableComponent = ({ columns, dataSource }) => {
  return (
    <Table
      scroll={{
        y: 300,
      }}
      bordered
      columns={columns}
      dataSource={dataSource}
    />
  );
};
export default TableComponent;
