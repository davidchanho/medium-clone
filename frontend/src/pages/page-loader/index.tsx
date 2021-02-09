import React from "react";
import { ReactComponent as MediumMobile } from "../../asset/mediumMobile.svg";
import styles from "./PageLoader.module.scss";

function PageLoader() {
  return (
    <div
      className={`vw-100 vh-100 d-flex align-items-center justify-content-center ${styles.pageLoader}`}
    >
      <MediumMobile />
    </div>
  );
}

export default PageLoader;
