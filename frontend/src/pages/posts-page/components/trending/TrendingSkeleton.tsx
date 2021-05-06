import React from "react";
import Skeleton from "react-loading-skeleton";
import styles from "./index.module.scss";

function TrendingSkeleton() {
  return (
    <div className={styles.grid}>
      <Skeleton count={6} width={150} height={50} />
    </div>
  );
}

export default TrendingSkeleton;
