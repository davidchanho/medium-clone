import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

function Template() {
  return (
    <div className="mx-auto">
      <Navbar />
      <div className="mx-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Template;
