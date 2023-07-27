import { useState } from "react";
import { Link } from "react-router-dom";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
const MenuItem = ({ icon, name, link, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-1 flex flex-col items-start hover:bg-slate-50">
      <div
        className="flex px-3 items-center py-3 gap-3  "
        onClick={handleClick}
      >
        {icon && <i className="text-xl text-blue-500">{icon}</i>}
        <Link to={link} className="text-blue-500 ">
          {name}
        </Link>
      </div>
      {isOpen && <ul className="pl-4 hover:bg-none bg-gray-100">{children}</ul>}
    </div>
  );
};

const MenuSideBar = () => {
  return (
    <div className="">
      <MenuItem icon={<HomeOutlined />} name="Dashboard" link="/"></MenuItem>
      <MenuItem
        icon={<UserOutlined />}
        name="Employee"
        link="/employee"
      ></MenuItem>
    </div>
  );
};

export default MenuSideBar;
