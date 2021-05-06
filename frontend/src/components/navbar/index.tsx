import React from "react";
import Brand from "./Brand";
import Nav from "./Nav";
import styles from "./Nav.module.scss";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Brand />
      <Nav />
    </div>
  );
}

export default Navbar;
