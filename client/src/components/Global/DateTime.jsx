import { Space, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import useFormatDateTime from "../hooks/useFormatDateTime";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Tạo một interval để cập nhật thời gian mỗi phút
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Xóa interval khi component bị unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  // const formatTime = (date: any) => {
  //   const options = {
  //     year: "numeric",
  //     month: "long",
  //     day: "numeric",
  //     hour: "numeric",
  //     minute: "numeric",
  //     hour12: false,

  //   };
  //   return date.toLocaleString(undefined, options);
  // };
  const formatDateTime = useFormatDateTime();

  return (
    <Space>
      <Tag color="lime" style={{fontSize:'24px', padding: '8px'}}>
        {formatDateTime(currentTime)}
      </Tag>
    </Space>
  );
};

export default DateTime;
