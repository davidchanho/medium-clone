import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/_shared/footer";
import Navbar from "../../components/_shared/navbar";

function Template() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Template;
