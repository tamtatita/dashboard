import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Input, Layout, Menu, Space, Button, Badge } from "antd";

import React from "react";
const { Header, Content, Sider } = Layout;

const HeaderComponent = () => {
  return (
    <Layout className="w-full">
      <Header
        className="header"
        style={{
          backgroundColor: "#1e1e1e",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Space className="box_search ">
          <Input
            size="large"
            prefix={<SearchOutlined />}
            className=""
            placeholder="Search"
          />
        </Space>

        <Space direction="horizontal">
          <Button className="icon_header">{<NotificationOutlined />}</Button>

          <Button className="icon_header">{<NotificationOutlined />}</Button>

          <Button className="icon_header">{<NotificationOutlined />}</Button>

          <Button className="icon_header">Taam</Button>
        </Space>
      </Header>
    </Layout>
  );
};
export default HeaderComponent;
