import React from "react";
import { NavLink } from "react-router-dom";
import MediumLogo from "../medium-logo";
import Row from "../row";
import styles from "./index.module.scss";

function FooterNav() {
  return (
    <Row>
      <MediumLogo fill="white" width="145" height="29" />
      <div className={styles.linklist}>
        <NavLink className={styles.link} to="#!">
          About
        </NavLink>
        <NavLink className={styles.link} to="#!">
          Help
        </NavLink>
        <NavLink className={styles.link} to="#!">
          Legal
        </NavLink>
      </div>
    </Row>
  );
}

export default FooterNav;
