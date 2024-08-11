import React from "react";
import SideView from "./SideView";
import MainContainer from "./MainContainer";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="grid grid-cols-12">
      <SideView />
      <Outlet />
    </div>
  );
};

export default Body;
