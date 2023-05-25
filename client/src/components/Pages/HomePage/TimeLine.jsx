import React from "react";
import { RiBillLine } from "react-icons/ri";

const TimeLine = ({ data }) => {
  return (
    <div className="">
      <h1 className="font-bold text-xl ">TimeLine Order</h1>
      {data.length > 0 &&
        data.map((item) => (
          <div className="flex">
            <div className="flex flex-col items-center mr-4">
              <div>
                <div className="flex bg-green-100 text-green-600 border-none items-center justify-center w-10 h-10 border rounded-full">
                  <RiBillLine />
                </div>
              </div>
              <div className="w-px h-full bg-gray-300"></div>
            </div>
            <div className="pb-8 ">
              <p className="mb-2 text-lg font-semibold text-gray-600">
                {item.orderDate}
              </p>
              <h1 className="text-gray-700">
                {`${item.contactLastName} ${item.contactFirstName}`}
                <span>
                  {" "}
                  from the city {item.city} has placed a successful order.
                </span>
              </h1>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TimeLine;
