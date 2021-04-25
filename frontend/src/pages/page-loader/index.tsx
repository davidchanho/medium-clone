import React from "react";
import styles from "./PageLoader.module.scss";

function PageLoader() {
  return (
    <div
      className={`vw-100 vh-100 d-flex align-items-center justify-content-center ${styles.pageLoader}`}
    >
      <img src="/mediumMobile.svg" alt="" />
    </div>
  );
}

export default PageLoader;
