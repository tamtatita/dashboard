import { Typography } from "antd";
import React, { useEffect, useState } from "react";

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); // Khoảng thời gian 1 phút (60000 milliseconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const year = currentDateTime.getFullYear();
  const month = currentDateTime.getMonth() + 1;
  const day = currentDateTime.getDate();
  const hours = currentDateTime.getHours();
  const minutes = currentDateTime.getMinutes();

  return (
    <div>
      <Typography.Paragraph className=" text-lg text-gray-900 font-semibold">
        {day}/{month}/{year} | {hours}:{minutes}{" "}
      </Typography.Paragraph>
    </div>
  );
};

export default DateTime;
