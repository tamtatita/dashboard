import React from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

// const items = [
//   {
//     label: "Navigation One",
//     key: "mail",
//     icon: <MailOutlined />,
//   },
//   {
//     label: "Navigation Two",
//     key: "app",
//     icon: <AppstoreOutlined />,
//     disabled: true,
//   },
//   {
//     label: "Navigation Three - Submenu",
//     key: "SubMenu",
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: "group",
//         label: "Item 1",
//         children: [
//           {
//             label: "Option 1",
//             key: "setting:1",
//           },
//           {
//             label: "Option 2",
//             key: "setting:2",
//           },
//         ],
//       },
//       {
//         type: "group",
//         label: "Item 2",
//         children: [
//           {
//             label: "Option 3",
//             key: "setting:3",
//           },
//           {
//             label: "Option 4",
//             key: "setting:4",
//           },
//         ],
//       },
//     ],
//   },
// ];

const MenuSideBar = () => {
  return (
    <Menu>
      <Menu.Item>item 1</Menu.Item>
      <Menu.Item>item 2</Menu.Item>
      <Menu.SubMenu title="sub menu">
        <Menu.Item>item 3</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

// const CustomMenu = () => {
//   return <Menu mode="inline">{items.map(renderMenuItem)}</Menu>;
// };

export default MenuSideBar;
