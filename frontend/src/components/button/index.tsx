import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

function Button({ children }: PropsWithChildren<{}>) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
