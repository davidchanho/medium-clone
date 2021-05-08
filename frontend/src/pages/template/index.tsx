import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";

function Template() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Template;
