import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

function Template() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Template;
