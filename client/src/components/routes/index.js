import HomePage from "../Pages/HomePage/HomePage";
import Employees from "../Pages/Employees/Employees";
import Default from "../DefaultLayout/Default";
import Orders from "../Pages/Orders/Orders";
import Customers from "../Pages/Customers/Customers";
import Login from "../Pages/Login/Login";
import Products from "../Pages/Products/Products";
export const privateRouter = [
  { path: "/", component: HomePage },
  { path: "/employee", component: Employees },
  { path: "/order", component: Orders },
  { path: "/customer", component: Customers },
  { path: "/login", component: Login },
  { path: "/product", component: Products },
];

export const publicRouter = [{ path: "/login", component: Login }];
