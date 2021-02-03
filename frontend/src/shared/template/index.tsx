import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import styles from "./Template.module.scss";

function Template() {
  return (
    <div className='mx-auto'>
      <Navbar />
      <div className={styles.container}>
        <Outlet />
      </div>
    </div>
  );
}

export default Template;
