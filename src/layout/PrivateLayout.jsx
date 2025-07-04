import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../views/user/Dashboard"; 


const PrivateLayout = () => {
  return (
    <>
      <Dashboard />
    </>
  );
};

export default PrivateLayout;
