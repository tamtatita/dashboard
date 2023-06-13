import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { Global } from "../Global";
import DateTime from "../Global/DateTime";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, link, children) {
  return {
    key,
    icon,
    link,
    children,
    label,
  };
}
const items = [
  getItem("Dashboard", "1", "ss", <PieChartOutlined />),
  getItem("Customers", "2", "", <DesktopOutlined />),
  getItem("Employees", "sub1", "/", <UserOutlined />, [
    getItem("Tom", "3", "/"),
    getItem("Bill", "4", "/"),
    getItem("Alex", "5", "/"),
  ]),
  getItem("Branch", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];
const Default = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        theme="light"
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <span
          className={`font-bold text-xl text-center w-full flex py-3 items-center justify-center ${
            collapsed == true && "hidden"
          } `}
        >
          {" "}
          E-COMMERCE
        </span>
        <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
          {items.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <Link to={item.link}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="">
        <Global.HeaderComponent />
        <Content style={{ padding: "20px", backgroundColor: "#EEEEEE" }}>
          <DateTime />
          {children}
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          @Copyright
        </Footer>
      </Layout>
    </Layout>
  );
};
export default Default;
