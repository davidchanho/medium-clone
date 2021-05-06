import React, { PropsWithChildren } from "react";
import styles from "./index.module.scss";

function Modal({ children }: PropsWithChildren<{}>) {
  return <div className={styles.modal}>{children}</div>;
}

export default Modal;
