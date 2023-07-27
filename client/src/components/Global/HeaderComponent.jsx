import {
  NotificationOutlined,
  UserOutlined,
  SearchOutlined,
  LogoutOutlined,
  EditOutlined,
  CreditCardOutlined,
  FolderViewOutlined,
  SnippetsOutlined,
  SettingOutlined,
  PicCenterOutlined,
  QuestionCircleOutlined,
  HistoryOutlined,
  BookOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  Input,
  Layout,
  Menu,
  Space,
  Button,
  Badge,
  Drawer,
  Divider,
  Tabs,
  Tooltip,
} from "antd";

import React, { useContext, useEffect, useState } from "react";
import { BiMailSend } from "react-icons/bi";

const { Header, Content, Sider } = Layout;
import { BsLightbulb } from "react-icons/bs";
const HeaderComponent = () => {
  const [activeModelUser, setActiveModelUser] = useState(false);

  const handleCancel = () => {
    setActiveModelUser(false);
  };

  const handleOpen = () => {
    setActiveModelUser(true);
  };

  const btnHeader = [
    
    {
      icon: NotificationOutlined,
      title: "Notification",
    },
    {
      icon: SettingOutlined,
      title: "Setting",
      badge: true,
      numberBadge: 6,
    },
    {
      icon: MailOutlined,
      title: "Mail",
    },
  ];

  return (
    <Layout className="w-full bg-white">
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: 'white'
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

        <div
          className=" "
          style={{ display: "flex", alignItems: "center", gap: "12px" }}
        >
          {btnHeader.map((item) => (
            <Tooltip key={item.title} title={item.title}>
              {item.badge == true ? (
                <Badge count={item.numberBadge}>
                  <Button icon={<item.icon />} />
                </Badge>
              ) : (
                <Button icon={<item.icon />} />
              )}
            </Tooltip>
          ))}

          <Button
            onClick={() => setActiveModelUser(true)}
            shape="default"
            className=""
            // style={{padding:'px'}}
          >
            <div className="flex gap-3">
              <img
                src="https://cdn.vn.alongwalk.info/wp-content/uploads/2023/03/27234050/image-222-hinh-anh-cho-ngao-hai-huoc-doc-nhat-hien-nay-2023-167991005026339.jpg"
                alt=""
                className="h-6 w-6 rounded-full object-cover"
              />
              <span className="font-semibold">Tâm Lê</span>
            </div>
          </Button>

          {activeModelUser && (
            <Drawer placement="right" onClose={handleCancel} open={handleOpen}>
              <BoxUser />
            </Drawer>
          )}
        </div>
      </Header>
    </Layout>
  );
};

const BoxUser = () => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }

  const itemsTabProfile = [
    getItem("Edit Profile", "sub1", <EditOutlined />),
    getItem("View Profile", "sub2", <FolderViewOutlined />),
    getItem("Social Profile", "sub3", <SnippetsOutlined />),
    getItem("Billing", "sub4", <CreditCardOutlined />),
    getItem("Logout", "sub5", <LogoutOutlined />),
  ];

  const itemsTabSetting = [
    getItem("Support", "sub1", <QuestionCircleOutlined />),
    getItem("Account Settings", "sub2", <SettingOutlined />),
    getItem("Privacy Center", "sub3", <PicCenterOutlined />),
    getItem("Feedback", "sub4", <BookOutlined />),
    getItem("History", "sub5", <HistoryOutlined />),
  ];
  return (
    <div className=" bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.vn.alongwalk.info/wp-content/uploads/2023/03/27234050/image-222-hinh-anh-cho-ngao-hai-huoc-doc-nhat-hien-nay-2023-167991005026339.jpg"
            alt=""
            className="h-10 w-10 object-cover rounded-full"
          />

          <div className="flex flex-col ">
            <h1
              className="
                  
              font-semibold text-xl"
            >
              JWT User
            </h1>
            <p className="text-gray-500 text-[13px]">Frontend Dev</p>
          </div>
        </div>
        <Button icon={<LogoutOutlined />} />
      </div>
      <Divider />

      {/* === TAPS === */}
      <div className="">
        <Tabs
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
          defaultActiveKey="1"
        >
          <Tabs.TabPane
            tab={
              <span className="flex items-center">
                <UserOutlined />
                Home
              </span>
            }
            key={1}
          >
            <Menu mode="inline" items={itemsTabProfile} />
          </Tabs.TabPane>

          <Tabs.TabPane
            tab={
              <span className="flex items-center">
                <SettingOutlined />
                Setting
              </span>
            }
            icon={<UserOutlined />}
            key={2}
          >
            <Menu mode="inline" items={itemsTabSetting} />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default HeaderComponent;
