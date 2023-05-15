import React from "react";

import { Button } from "antd";
import MenuSideBar from "../Global/MenuSideBar";
import HeaderComponent from "../Global/HeaderComponent";

const Default = ({ children }) => {
  return (
    <div className="flex w-full bg-black h-full">
      <div className="text-white bg-[--primary] w-[300px] h-[400px] ">
        <MenuSideBar />
      </div>
      <div className="flex-1">
        <HeaderComponent />
        <div className="mt-5 p-5">{children}</div>
        <Button type="primary">Primary Button</Button>
      </div>
    </div>
  );
};

export default Default;
