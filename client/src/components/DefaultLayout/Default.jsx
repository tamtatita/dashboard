import {
  UserAddOutlined,
  UserOutlined,
  PieChartOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useContext, useState } from "react";
import { Global } from "../Global";
import DateTime from "../Global/DateTime";

const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children, type, link) {
  return {
    key,
    icon,
    children,
    label,
    type,
    link,
  };
}

const items = [
  getItem("Dashboard", "/", <HomeOutlined />),
  getItem("Employees", "/employee", <UserAddOutlined />),

  getItem("Customers", "/customer", <UserOutlined />),

  getItem("Orders", "/order", <ShoppingCartOutlined />),
  getItem("Products", "/product", <ProfileOutlined />),
];

const { SubMenu } = Menu;
const renderMenuItems = (items) => {
  return items.map((item) => {
    if (item.type === "group") {
      return (
        <SubMenu key={item.key} title={item.label} icon={item.icon}>
          {renderMenuItems(item.children)}
        </SubMenu>
      );
    } else {
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <a href={item.link}>{item.label}</a>
        </Menu.Item>
      );
    }
  });
};

const Default = ({ children }) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
      }}
    >
      <Sider
        style={{
          height: "100vh",
          // overflowY: "scroll",
          position: "fixed",
          top: 0,
          backgroundColor: "white",

          zIndex: 100,
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <span
          className={`font-bold bg-white text-xl text-center w-full flex py-3 items-center justify-center ${
            collapsed == true && "hidden"
          } `}
        >
          {" "}
          E-COMMERCE
        </span>
        <Menu
          onClick={({ key }) => {
            navigate(key);
          }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          // theme="light"
          items={items}
        />
      </Sider>
      <Layout className="" style={{ marginLeft: collapsed ? "70px" : "200px" }}>
        <Global.HeaderComponent />
        <Content
          style={{
            padding: "20px",
          }}
        >
          <DateTime />
          {children}
        </Content>
        {/* <Footer
          style={{
            textAlign: "center",
          }}
        >
          @Copyright
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default Default;
