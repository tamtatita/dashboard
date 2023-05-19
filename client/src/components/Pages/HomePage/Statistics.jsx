import React from "react";
import { BiTrendingDown, BiTrendingUp } from "react-icons/bi";

const Statistics = () => {
  return (
    <div>
      <div className="flex w-full justify-between gap-6 ">
        <FourBoxFirst title="Total Sum" value="4212" percent="42" data="1221" />
        <FourBoxFirst title="Total Sum" value="9431" percent="90" data="1221" />
        <FourBoxFirst title="Total Sum" value="9431" percent="12" data="1221" />
        <FourBoxFirst title="Total Sum" value="9431" percent="69" data="1221" />
      </div>
    </div>
  );
};

const FourBoxFirst = ({ title, value, percent, data }) => {
  function formatMoneyVietNam(currency) {
    return currency.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return (
    <div className="w-1/4  shadow-xl bg-white py-3 px-2 rounded-lg">
      <h5 className="text-gray-600 capitalize text-lg font-semibold">
        {title}
      </h5>
      <div className="flex-col">
        <div className="flex gap-3 items-center">
          <span className="font-bold text-xl">{formatMoneyVietNam(value)} $</span>

          <div
            className={`${
              percent >= 70
                ? "bg-sky-500"
                : percent >= 50 && percent < 70
                ? "bg-orange-500"
                : "bg-red-500"
            } px-3 py-1 rounded-lg items-center text-white flex gap-2`}
          >
            <i className="text-lg">
              {percent >= 50 ? <BiTrendingUp /> : <BiTrendingDown />}
            </i>

            <span className="text-white font-bold text-lg">{percent} %</span>
          </div>
        </div>

        <h1 className="text-[13px] text-gray-900 mt-5">
          You made an extra{" "}
          <span className="font-bold">{formatMoneyVietNam(data)}</span> this
          year{" "}
        </h1>
      </div>
    </div>
  );
};

export default Statistics;
