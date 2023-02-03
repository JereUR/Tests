import React from "react";
import { Outlet } from "react-router-dom";
import { Login } from "../pages/Login";

export const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

const PrivateRoute = () => {
  const isAuth = useAuth();

  return isAuth ? <Outlet /> : <Login />;
};

export default PrivateRoute;
