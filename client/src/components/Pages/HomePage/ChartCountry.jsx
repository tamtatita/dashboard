import React, { useEffect, useState } from "react";
import axios from "axios";
import { API as url } from "../../../API";
import { HomePageBox } from ".";
const ChartCountry = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${url}/chart/country`);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      
      
        <HomePageBox.ProductLinesChart type="country" data={data} />
      
    </div>
  );
};

export default ChartCountry;
