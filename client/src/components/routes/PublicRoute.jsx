import { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
const PublicRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext); // Get the isAuthenticated value from the AuthContext

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PublicRoute;
