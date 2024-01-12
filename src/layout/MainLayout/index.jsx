import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navbar";

function MainLayout() {
  return (
    <div><Navbar></Navbar>
    <Outlet></Outlet>
    </div>
  );
}

export default MainLayout;
