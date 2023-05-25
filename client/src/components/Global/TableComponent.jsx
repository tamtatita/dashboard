import { Button, Input, Space, Table } from "antd";
import React, { useRef, useState } from "react";

const TableComponent = ({ columns, dataSource }) => {
  return <Table bordered columns={columns} dataSource={dataSource} />;
};
export default TableComponent;
