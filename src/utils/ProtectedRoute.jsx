import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ flag, Component, dest }) => {
    console.log(dest)
  return flag ? <Component /> : <Navigate to={dest} />;
};

export default ProtectedRoute;
//HOC