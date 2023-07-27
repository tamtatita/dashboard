import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(null);
  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    setToken(null);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem(token);
    if (storedToken) {
      setIsAuthenticated(true);
      setToken(token);
    }
  }, []);

  return { isAuthenticated, token, login, logout };
};

export { AuthContext, useAuth };
