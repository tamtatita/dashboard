import React, { useEffect, useState } from "react";

import Default from "../../DefaultLayout/Default";
import DateTime from "../../Global/DateTime";

import { HomePageBox } from ".";
import { PageHeader } from "antd";
import Table from "../../Global/TableComponent";

const HomePage = () => {
  return (
    <Default>
      <DateTime />
      <PageHeader
        title="Dashboard"
      />

      {/* === THỐNG KÊ === */}
      <HomePageBox.Statistics />

      <div className="w-[500px] bg-white p-2">
        <h1>Recent Orders</h1>
        <Table />
      </div>
    </Default>
  );
};

export default HomePage;
