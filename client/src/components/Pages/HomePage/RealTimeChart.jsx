import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const RealTimeChart = ({ data }) => {
  const dataRealTime = [
    {
      formattedOrderDate: "2003-01-06",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2003-01-09",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2003-01-10",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2003-01-29",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2003-01-31",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2003-02-11",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2003-02-17",
      tongDonHang: 18,
    },
    {
      formattedOrderDate: "2003-02-24",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2003-03-03",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2003-03-10",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2003-03-18",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2003-03-24",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2003-03-25",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2003-03-26",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2003-04-01",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2003-04-04",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2003-04-11",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2003-04-16",
      tongDonHang: 12,
    },
    {
      formattedOrderDate: "2003-04-21",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2003-04-28",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2003-04-29",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2003-05-07",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2003-05-08",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2003-05-20",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2003-05-21",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2003-05-28",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2003-06-03",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2003-06-06",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2003-06-12",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2003-06-16",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2003-06-25",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2003-06-27",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2003-07-01",
      tongDonHang: 7,
    },
    {
      formattedOrderDate: "2003-07-02",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2003-07-04",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2003-07-07",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2003-07-10",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2003-07-16",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2003-07-24",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2003-08-01",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2003-08-08",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2003-08-10",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2003-08-13",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2003-08-25",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2003-09-03",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2003-09-05",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2003-09-11",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2003-09-12",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2003-09-19",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2003-09-21",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2003-09-25",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2003-09-28",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2003-10-02",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2003-10-04",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2003-10-05",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2003-10-06",
      tongDonHang: 19,
    },
    {
      formattedOrderDate: "2003-10-08",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2003-10-09",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2003-10-10",
      tongDonHang: 19,
    },
    {
      formattedOrderDate: "2003-10-11",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2003-10-17",
      tongDonHang: 12,
    },
    {
      formattedOrderDate: "2003-10-18",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2003-10-20",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2003-10-21",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2003-10-22",
      tongDonHang: 18,
    },
    {
      formattedOrderDate: "2003-10-23",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2003-10-28",
      tongDonHang: 18,
    },
    {
      formattedOrderDate: "2003-11-04",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2003-11-05",
      tongDonHang: 28,
    },
    {
      formattedOrderDate: "2003-11-06",
      tongDonHang: 27,
    },
    {
      formattedOrderDate: "2003-11-07",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2003-11-08",
      tongDonHang: 12,
    },
    {
      formattedOrderDate: "2003-11-11",
      tongDonHang: 23,
    },
    {
      formattedOrderDate: "2003-11-12",
      tongDonHang: 34,
    },
    {
      formattedOrderDate: "2003-11-13",
      tongDonHang: 12,
    },
    {
      formattedOrderDate: "2003-11-14",
      tongDonHang: 38,
    },
    {
      formattedOrderDate: "2003-11-15",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2003-11-18",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2003-11-19",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2003-11-20",
      tongDonHang: 25,
    },
    {
      formattedOrderDate: "2003-11-21",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2003-11-25",
      tongDonHang: 21,
    },
    {
      formattedOrderDate: "2003-11-26",
      tongDonHang: 22,
    },
    {
      formattedOrderDate: "2003-11-27",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2003-12-01",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2003-12-02",
      tongDonHang: 35,
    },
    {
      formattedOrderDate: "2003-12-03",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2003-12-05",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2003-12-09",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2004-01-02",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2004-01-09",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2004-01-12",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2004-01-15",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2004-01-16",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2004-01-22",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2004-01-26",
      tongDonHang: 7,
    },
    {
      formattedOrderDate: "2004-01-29",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2004-02-02",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2004-02-04",
      tongDonHang: 7,
    },
    {
      formattedOrderDate: "2004-02-09",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-02-10",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2004-02-12",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-02-18",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2004-02-19",
      tongDonHang: 18,
    },
    {
      formattedOrderDate: "2004-02-20",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2004-02-21",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2004-02-22",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-02-26",
      tongDonHang: 7,
    },
    {
      formattedOrderDate: "2004-03-02",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2004-03-10",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2004-03-11",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-03-15",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2004-03-19",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-03-20",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2004-03-29",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2004-03-30",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-04-02",
      tongDonHang: 12,
    },
    {
      formattedOrderDate: "2004-04-03",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2004-04-05",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-04-09",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2004-04-12",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2004-04-13",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2004-04-20",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2004-04-26",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-04-29",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-05-04",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-05-05",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2004-05-07",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-05-08",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2004-05-11",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-05-18",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2004-05-26",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-06-01",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-06-03",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2004-06-04",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-06-08",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-06-14",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2004-06-15",
      tongDonHang: 19,
    },
    {
      formattedOrderDate: "2004-06-16",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2004-06-17",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-06-24",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2004-06-28",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2004-06-30",
      tongDonHang: 7,
    },
    {
      formattedOrderDate: "2004-07-02",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-07-06",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2004-07-07",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2004-07-12",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2004-07-16",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-07-19",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2004-07-20",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2004-07-21",
      tongDonHang: 20,
    },
    {
      formattedOrderDate: "2004-07-23",
      tongDonHang: 18,
    },
    {
      formattedOrderDate: "2004-08-02",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-08-04",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2004-08-06",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2004-08-09",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2004-08-17",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2004-08-19",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-08-20",
      tongDonHang: 27,
    },
    {
      formattedOrderDate: "2004-08-21",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2004-08-27",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2004-08-28",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2004-08-30",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2004-09-01",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-09-03",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2004-09-07",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-09-08",
      tongDonHang: 26,
    },
    {
      formattedOrderDate: "2004-09-09",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-09-10",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2004-09-15",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-09-16",
      tongDonHang: 7,
    },
    {
      formattedOrderDate: "2004-09-27",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-09-30",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2004-10-06",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2004-10-11",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2004-10-13",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-10-14",
      tongDonHang: 26,
    },
    {
      formattedOrderDate: "2004-10-15",
      tongDonHang: 22,
    },
    {
      formattedOrderDate: "2004-10-16",
      tongDonHang: 28,
    },
    {
      formattedOrderDate: "2004-10-21",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2004-10-22",
      tongDonHang: 26,
    },
    {
      formattedOrderDate: "2004-10-29",
      tongDonHang: 7,
    },
    {
      formattedOrderDate: "2004-11-01",
      tongDonHang: 26,
    },
    {
      formattedOrderDate: "2004-11-02",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2004-11-03",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-11-04",
      tongDonHang: 29,
    },
    {
      formattedOrderDate: "2004-11-05",
      tongDonHang: 25,
    },
    {
      formattedOrderDate: "2004-11-09",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2004-11-10",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2004-11-12",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2004-11-15",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2004-11-16",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2004-11-17",
      tongDonHang: 32,
    },
    {
      formattedOrderDate: "2004-11-18",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2004-11-19",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-11-20",
      tongDonHang: 12,
    },
    {
      formattedOrderDate: "2004-11-21",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-11-22",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2004-11-23",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2004-11-24",
      tongDonHang: 35,
    },
    {
      formattedOrderDate: "2004-11-25",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2004-11-29",
      tongDonHang: 18,
    },
    {
      formattedOrderDate: "2004-12-01",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2004-12-02",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2004-12-03",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-12-04",
      tongDonHang: 22,
    },
    {
      formattedOrderDate: "2004-12-07",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2004-12-09",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2004-12-10",
      tongDonHang: 24,
    },
    {
      formattedOrderDate: "2004-12-15",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2004-12-16",
      tongDonHang: 18,
    },
    {
      formattedOrderDate: "2004-12-17",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2005-01-05",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2005-01-06",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2005-01-07",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2005-01-10",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2005-01-12",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2005-01-19",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2005-01-20",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2005-01-23",
      tongDonHang: 12,
    },
    {
      formattedOrderDate: "2005-01-26",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2005-01-31",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2005-02-02",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2005-02-03",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2005-02-08",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2005-02-09",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2005-02-10",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2005-02-16",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2005-02-17",
      tongDonHang: 22,
    },
    {
      formattedOrderDate: "2005-02-22",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2005-02-23",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2005-02-28",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2005-03-01",
      tongDonHang: 18,
    },
    {
      formattedOrderDate: "2005-03-02",
      tongDonHang: 1,
    },
    {
      formattedOrderDate: "2005-03-03",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2005-03-04",
      tongDonHang: 16,
    },
    {
      formattedOrderDate: "2005-03-09",
      tongDonHang: 10,
    },
    {
      formattedOrderDate: "2005-03-10",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2005-03-11",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2005-03-15",
      tongDonHang: 7,
    },
    {
      formattedOrderDate: "2005-03-17",
      tongDonHang: 4,
    },
    {
      formattedOrderDate: "2005-03-23",
      tongDonHang: 8,
    },
    {
      formattedOrderDate: "2005-03-28",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2005-03-30",
      tongDonHang: 18,
    },
    {
      formattedOrderDate: "2005-04-01",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2005-04-03",
      tongDonHang: 12,
    },
    {
      formattedOrderDate: "2005-04-07",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2005-04-08",
      tongDonHang: 17,
    },
    {
      formattedOrderDate: "2005-04-14",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2005-04-15",
      tongDonHang: 3,
    },
    {
      formattedOrderDate: "2005-04-22",
      tongDonHang: 13,
    },
    {
      formattedOrderDate: "2005-04-23",
      tongDonHang: 2,
    },
    {
      formattedOrderDate: "2005-04-29",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2005-05-01",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2005-05-03",
      tongDonHang: 11,
    },
    {
      formattedOrderDate: "2005-05-05",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2005-05-06",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2005-05-09",
      tongDonHang: 5,
    },
    {
      formattedOrderDate: "2005-05-10",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2005-05-13",
      tongDonHang: 6,
    },
    {
      formattedOrderDate: "2005-05-16",
      tongDonHang: 9,
    },
    {
      formattedOrderDate: "2005-05-17",
      tongDonHang: 14,
    },
    {
      formattedOrderDate: "2005-05-29",
      tongDonHang: 15,
    },
    {
      formattedOrderDate: "2005-05-30",
      tongDonHang: 7,
    },
    {
      formattedOrderDate: "2005-05-31",
      tongDonHang: 19,
    },
  ];

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // const fetchAPI = async () => {
    //   try {
    //     const res = await axios.get(`${url}/realtime`);
    //     setDataRealTime(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // fetchAPI();
    const startDate = new Date("2003-05-31");
    let currentDate = new Date(startDate);

    const timer = setInterval(() => {
      currentDate.setDate(currentDate.getDate() + 1);
      const formattedDate = currentDate.toISOString().split("T")[0];
      const foundData = dataRealTime.find(
        (item) => item.formattedOrderDate === formattedDate
      );

      if (foundData) {
        setChartData((prevData) => [...prevData, foundData]);
      } else {
        setChartData((prevData) => [
          ...prevData,
          { formattedOrderDate: formattedDate, tongDonHang: 0 },
        ]);
      }
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  const config = {
    data,
    padding: "auto",
    xField: "formattedOrderDate",
    yField: "Tổng đơn hàng",
    xAxis: {
      type: "timeCat",
      tickCount: 10,
    },
  };

  return (
    <LineChart width={1000} height={300} data={chartData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="formattedOrderDate" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="tongDonHang"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};
export default RealTimeChart;
