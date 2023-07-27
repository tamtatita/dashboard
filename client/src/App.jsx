import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { privateRouter, publicRouter } from "./components/routes";
import "./index.css";
import { AuthContext, useAuth } from "./context/AuthContext";
import PublicRoute from "./components/routes/PublicRoute";

function PrivateRoute({ element: Element, ...rest }) {
  return (
    <Route
      {...rest}
      element={isAuthenticated() ? <Element /> : <Navigate to="/login" />}
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {privateRouter.map((route) => {
          const Page = route.component;
          return (
            <Route key={route.path} path={route.path} element={<Page />} />
          );
        })}

        {/* {privateRouter.map((route) => {
          const Page = route.component;

          <PrivateRoute
            key={route.path}
            path={route.path}
            element={<Page />}
          />;
        })} */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
