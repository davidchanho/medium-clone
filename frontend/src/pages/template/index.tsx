import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import styles from "./Template.module.scss";

function Template() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Template;
