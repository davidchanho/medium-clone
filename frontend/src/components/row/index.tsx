import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

function Row({ children }: PropsWithChildren<{}>) {
  return <div className={styles.row}>{children}</div>;
}

export default Row;
