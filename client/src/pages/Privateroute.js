import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.Userreducer);
  if (!isAuth) {
    return <Redirect to="/login" />;
  }                                   
  return <Route component={Component} {...rest} />;
};

export default PrivateRoute;