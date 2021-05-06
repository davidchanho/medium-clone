import React from "react";
import { useLocation } from "react-router";
import MediumLogo from "../medium-logo";
import styles from "./Brand.module.scss";
import greetUserByTimeOfDay from "./greetUserByTimeOfDay";

function Brand() {
  const location = useLocation();

  return (
    <div className={styles.brand}>
      <MediumLogo width="180" height="34" />{" "}
      {location.pathname === "/" && greetUserByTimeOfDay()}
    </div>
  );
}

export default Brand;
