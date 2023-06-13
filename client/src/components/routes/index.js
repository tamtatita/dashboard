import HomePage from "../Pages/HomePage/HomePage";
import Employees from "../Pages/Employees/Employees";
import Default from "../DefaultLayout/Default";
export const publicRouter = [
  { path: "/", component: HomePage },
  { path: "/employee", component: Employees },
];
